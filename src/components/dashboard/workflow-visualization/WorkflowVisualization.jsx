import { useEffect, useState } from "react";
import {
  Check,
  CircleX,
  RotateCw,
  Clock3,
} from "lucide-react";

import WorkFlowSteps from "../../../data/WorkFlowSteps";
import {
  capitalizeFirstLetter,
  STEP_DURATIONS,
  stepColors,
} from "../../../utils/tools";

const WorkflowVisualization = ({
  patientName = "",
  runId,
}) => {
  const [workflowSteps, setWorkflowSteps] =
    useState(WorkFlowSteps);

  useEffect(() => {
    // ----------------------------------------
    // Initial state before first run
    // ----------------------------------------

    if (runId === 0) {
      setWorkflowSteps(
        WorkFlowSteps.map((step) => ({
          ...step,
          status: "waiting",
          startTime: null,
          endTime: null,
        }))
      );

      return;
    }

    // ----------------------------------------
    // Reset all steps
    // ----------------------------------------

    setWorkflowSteps(
      WorkFlowSteps.map((step) => ({
        ...step,
        status: "waiting",
        startTime: null,
        endTime: null,
      }))
    );

    let currentStepIndex = 0;
    let timeout;

    // ----------------------------------------
    // Start Step
    // ----------------------------------------

    const startStep = (stepIndex) => {
      // Start current step
      setWorkflowSteps((prevSteps) =>
        prevSteps.map((step, index) =>
          index === stepIndex
            ? {
              ...step,
              status: "running",
              startTime: getCurrentTime(),
              endTime: null,
            }
            : step
        )
      );

      // ----------------------------------------
      // Wait for current step duration
      // ----------------------------------------

      timeout = setTimeout(() => {
        // Complete current step
        setWorkflowSteps((prevSteps) =>
          prevSteps.map((step, index) =>
            index === stepIndex
              ? {
                ...step,
                status: "completed",
                endTime: getCurrentTime(),
              }
              : step
          )
        );

        // ----------------------------------------
        // Start next step
        // ----------------------------------------

        if (
          stepIndex + 1 <
          WorkFlowSteps.length
        ) {
          currentStepIndex += 1;

          startStep(currentStepIndex);
        }
      }, STEP_DURATIONS[stepIndex]);
    };

    // ----------------------------------------
    // Start first step immediately
    // ----------------------------------------

    startStep(0);

    // ----------------------------------------
    // Cleanup
    // ----------------------------------------

    return () => {
      clearTimeout(timeout);
    };
  }, [runId]);

  return (
    <div className="card">
      {/* ======================================
          Header
      ======================================= */}

      <div className="workflow-header">
        <h3 className="common-title-primary">
          WORKFLOW
        </h3>

        <div className="patient-tag">
          <span className="patient-tag-dot"></span>

          {runId > 0 ? (
            <>
              Processing{" "}
              {patientName || "Patient Name"}
            </>
          ) : (
            "Waiting to start"
          )}
        </div>
      </div>

      {/* ======================================
          Timeline List
      ======================================= */}

      <div className="workflow-timeline">
        {workflowSteps.map((step, index) => {
          const isCompleted = step.status === "completed";
          const isRunning = step.status === "running";
          const isQuery = step.status === "query";
          const isWaiting = step.status === "waiting";

          const stepColor = stepColors[index];

          return (
            <div
              key={step.id}
              className="workflow-step-row"
            >
              {/* ==================================
                  Timeline Indicator
              =================================== */}

              <div className="workflow-node-container">
                {/* Timeline Line */}

                {index !==
                  workflowSteps.length - 1 && (
                    <div
                      className="workflow-line"
                      style={{
                        backgroundColor:
                          isWaiting || isRunning
                            ? "#e2e8f0"
                            : stepColor,
                      }}
                    />
                  )}

                {/* Timeline Node */}

                <div
                  className={`workflow-node ${step.status}`}
                  style={{
                    borderColor: isWaiting
                      ? "#cbd5e1"
                      : stepColor,

                    color: isWaiting
                      ? "#94a3b8"
                      : stepColor,
                  }}
                >
                  {/* Completed */}

                  {isCompleted && (
                    <Check
                      size={18}
                      strokeWidth={2.5}
                    />
                  )}

                  {/* Running */}

                  {isRunning && (
                    <RotateCw
                      size={16}
                      className="spin"
                      strokeWidth={2.5}
                    />
                  )}

                  {/* Query */}

                  {isQuery && (
                    <CircleX
                      size={18}
                      strokeWidth={2.5}
                    />
                  )}

                  {/* Waiting */}

                  {isWaiting && (
                    <Clock3
                      size={16}
                      strokeWidth={2}
                    />
                  )}
                </div>
              </div>

              {/* ==================================
                  Step Detail Card
              =================================== */}

              <div className={`workflow-card ${step.status}`}   >
                <div className="workflow-card-left">
                  {/* Step Number */}

                  <div className="common-text-grey-12">
                    STEP {step.stepNumber}
                  </div>

                  {/* Step Name */}

                  <h3 className="common-sub-primary">
                    {step.name}
                  </h3>

                  {/* Time */}

                  <div className="common-text-grey-12">
                    <span>
                      Started:{" "}
                      {step.startTime ||
                        "00:00:00"}
                    </span>

                    {step.endTime && (
                      <>
                        <span className="dot">
                          {" "}
                          •{" "}
                        </span>

                        <span>
                          Ended:{" "}
                          {step.endTime}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* ==================================
                    Right Side
                =================================== */}

                <div className="workflow-card-right">
                  {/* Duration */}

                  {isCompleted && (
                    <div className="workflow-stat">
                      <span className="common-text-grey-11">
                        DURATION
                      </span>

                      <span className="common-sub-primary">
                        {formatDuration(
                          STEP_DURATIONS[index]
                        )}s
                      </span>
                    </div>
                  )}

                  {/* Active Task */}

                  {isRunning && (
                    <div className="workflow-stat active">
                      <span className="common-text-grey-11">
                        ACTIVE TASK
                      </span>

                      <span className="common-sub-primary active-text">
                        Processing...
                      </span>
                    </div>
                  )}

                  {/* Status */}

                  <span
                    className={`workflow-badge ${step.status}`}
                  >
                    {capitalizeFirstLetter(
                      step.status
                    )}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ========================================
// Helpers
// ========================================

const getCurrentTime = () => {
  return new Date().toLocaleTimeString(
    "en-GB",
    {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }
  );
};

const formatDuration = (milliseconds) => {
  const totalSeconds = Math.floor(
    milliseconds / 1000
  );

  const minutes = Math.floor(
    totalSeconds / 60
  );

  const seconds = totalSeconds % 60;

  if (minutes > 0) {
    return `${minutes}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  }

  return `${seconds}s`;
};

export default WorkflowVisualization;