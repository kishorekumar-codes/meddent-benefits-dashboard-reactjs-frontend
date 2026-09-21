import { useEffect, useState } from "react";
import { Progress } from "antd";
import {
  SettingOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

import WorkFlowSteps from "../../../data/WorkFlowSteps";
import { stepColors } from "../../../utils/tools";

const STEP_DURATION = 20; // 20 seconds per step
const TOTAL_WORKFLOW_TIME = STEP_DURATION * WorkFlowSteps.length; // 80 seconds

const TOTAL_ESTIMATED_TIME = 5 * 60; // 5 minutes

const AutomationProgress = ({ runId }) => {
  // Overall workflow percentage: 0 -> 100 in 80 seconds
  const [percent, setPercent] = useState(0);

  // Fixed 5-minute countdown
  const [remainingSeconds, setRemainingSeconds] = useState(TOTAL_ESTIMATED_TIME);

  // Current step progress: 0 -> 100 every 20 seconds
  const [currentStepPercent, setCurrentStepPercent] =  useState(0);

  // Current active step
  const [currentStepIndex, setCurrentStepIndex] =   useState(0);

  useEffect(() => {
    // Initial state
    if (runId === 0) {
      setPercent(0);
      setRemainingSeconds(TOTAL_ESTIMATED_TIME);
      setCurrentStepPercent(0);
      setCurrentStepIndex(0);

      return;
    }

    // Reset when a new run starts
    setPercent(0);
    setRemainingSeconds(TOTAL_ESTIMATED_TIME);
    setCurrentStepPercent(0);
    setCurrentStepIndex(0);

    let elapsedSeconds = 0;

    const timer = setInterval(() => {
      elapsedSeconds += 1;

      const workflowPercent = Math.min(
        Math.round(
          (elapsedSeconds / TOTAL_WORKFLOW_TIME) * 100
        ),
        100
      );

      setPercent(workflowPercent);

      const stepIndex = Math.min(
        Math.floor(
          (elapsedSeconds - 1) / STEP_DURATION
        ),
        WorkFlowSteps.length - 1
      );

      setCurrentStepIndex(stepIndex);

      const secondsIntoStep = ((elapsedSeconds - 1) % STEP_DURATION) + 1;

      const stepPercent = Math.min(
        Math.round(
          (secondsIntoStep / STEP_DURATION) * 100
        ),
        100
      );

      setCurrentStepPercent(stepPercent);

      const remaining = Math.max(
        TOTAL_ESTIMATED_TIME - elapsedSeconds,
        0
      );

      setRemainingSeconds(remaining);

      if (elapsedSeconds >= TOTAL_WORKFLOW_TIME) {
        clearInterval(timer);

        setPercent(100);
        setCurrentStepPercent(100);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [runId]);

  const minutes = Math.floor(
    remainingSeconds / 60
  );

  const seconds = remainingSeconds % 60;

  const formattedTime = `${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="automation-card card">
      <div className="icon-badge">
        <SettingOutlined className="gear-icon" />
      </div>

      <div className="progress-content">
        <h3 className="common-title-primary progress-title">
          Agentic Automation Progress
        </h3>

        <div className="workflow-progress">
          {WorkFlowSteps.map((step, index) => {

            let stepPercent = 0;

            if (index < currentStepIndex) {
              stepPercent = 100;
            } else if (index === currentStepIndex) {
              stepPercent = currentStepPercent;
            } else {
              stepPercent = 0;
            }

            if (runId === 0) {
              stepPercent = 0;
            }

            return (
              <div
                key={step.id}
                className="workflow-progress-segment"
              >
                <Progress
                  percent={stepPercent}
                  showInfo={false}
                  strokeColor={stepColors[index]}
                  railColor="#e2e8f0"
                  size={{ height: 8 }}
                />
              </div>
            );
          })}
        </div>

        <div className="progress-stats">
          <span className="stat-value-22">
            {percent}%
          </span>

          <div className="estimated-time-container">
            <ClockCircleOutlined className="time-icon" />

            <div className="time-text-group">
              <span className="time-label">
                EST. REMAINING
              </span>

              <span className="time-value">
                {formattedTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationProgress;