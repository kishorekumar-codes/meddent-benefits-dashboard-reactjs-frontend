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
  STEP_DURATION,
  stepColors,
} from "../../../utils/tools";

const WorkflowVisualization = ({
  patientName = "",
  runId,
}) => {
  const [workflowSteps, setWorkflowSteps] = useState(WorkFlowSteps);

  useEffect(() => {
    // Initial state before first run
    if (runId === 0) {
      setWorkflowSteps(
        WorkFlowSteps.map((step) => ({
          ...step,
          status: "waiting",
        }))
      );

      return;
    }

    // Reset all steps
    setWorkflowSteps(
      WorkFlowSteps.map((step) => ({
        ...step,
        status: "waiting",
      }))
    );

    let currentStepIndex = 0;

    // Immediately start first step
    setWorkflowSteps((prevSteps) =>
      prevSteps.map((step, index) =>
        index === 0
          ? {
            ...step,
            status: "running",
            startTime: getCurrentTime(),
            endTime: null,
          }
          : {
            ...step,
            status: "waiting",
            startTime: null,
            endTime: null,
          }
      )
    );

    const interval = setInterval(() => {
      currentStepIndex += 1;

      // Complete current step
      setWorkflowSteps((prevSteps) =>
        prevSteps.map((step, index) => {
          if (index === currentStepIndex - 1) {
            return {
              ...step,
              status: "completed",
              endTime: getCurrentTime(),
            };
          }

          return step;
        })
      );

      // Start next step
      if (currentStepIndex < WorkFlowSteps.length) {
        setWorkflowSteps((prevSteps) =>
          prevSteps.map((step, index) => {
            if (index === currentStepIndex) {
              return {
                ...step,
                status: "running",
                startTime: getCurrentTime(),
                endTime: null,
              };
            }

            return step;
          })
        );
      }
    }, STEP_DURATION);

    return () => {
      clearInterval(interval);
    };
  }, [runId]);

  return (
    <div className="card">
      {/* Header */}
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

      {/* Timeline List */}
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
              {/* Timeline Indicator */}
              <div className="workflow-node-container">
                {index !==
                  workflowSteps.length - 1 && (
                    <div
                      className="workflow-line"
                      style={{
                        backgroundColor:
                          isWaiting
                            ? "#e2e8f0"
                            : stepColor,
                      }}
                    />
                  )}

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

                  {/* running */}
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

              {/* Step Detail Card */}
              <div className={`workflow-card ${step.status}`}>
                <div className="workflow-card-left">
                  <div className="common-text-grey-12">
                    STEP {step.stepNumber}
                  </div>

                  <h3 className="common-sub-primary">
                    {step.name}
                  </h3>

                  {/* Time */}
                  <div className="common-text-grey-12">
                    <span>Started: {step.startTime || "00:00:00"}</span>
                    <span className="dot">  •  </span>
                    <span>Ended: {step.endTime || "00:00:00"}</span>
                  </div>
                </div>

                <div className="workflow-card-right">
                  {/* Duration */}
                  {step.duration && !isRunning && (
                    <div className="workflow-stat">
                      <span className="common-text-grey-11">
                        DURATION
                      </span>

                      <span className="common-sub-primary">
                        {isRunning
                          ? "20.0s"
                          : step.status ===
                            "completed"
                            ? "20.0s"
                            : "--"}
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

const getCurrentTime = () => {
  return new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

export default WorkflowVisualization;