import { Progress } from "antd";
import {
  SettingOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

import WorkFlowSteps from "../../../data/WorkFlowSteps";

import {
  STEP_DURATIONS,
  TOTAL_WORKFLOW_TIME,
  stepColors,
  getWorkflowPercentage,
} from "../../../utils/tools";

const AutomationProgress = ({
  runId,
  elapsedTime = 0,
}) => {
  /*
   * ==========================================
   * OVERALL PROGRESS
   * ==========================================
   */

  const percent =
    runId === 0
      ? 0
      : getWorkflowPercentage(elapsedTime);

  /*
   * ==========================================
   * EACH STEP PROGRESS
   * ==========================================
   */

  let accumulatedTime = 0;

  const stepPercentages = STEP_DURATIONS.map(
    (duration) => {
      const stepStart = accumulatedTime;

      const stepEnd =
        accumulatedTime + duration;

      accumulatedTime = stepEnd;

      /*
       * Waiting
       */
      if (elapsedTime <= stepStart) {
        return 0;
      }

      /*
       * Completed
       */
      if (elapsedTime >= stepEnd) {
        return 100;
      }

      /*
       * Running
       */
      const progress =
        ((elapsedTime - stepStart) / duration) *
        100;

      return Math.min(
        Math.round(progress),
        100
      );
    }
  );

  /*
   * ==========================================
   * ELAPSED TIME COUNTER
   * ==========================================
   *
   * Starts at 00:00
   * Increases with elapsedTime
   * Ends at 06:56
   */

  const elapsedSeconds = Math.min(
    Math.floor(elapsedTime / 1000),
    Math.floor(TOTAL_WORKFLOW_TIME / 1000)
  );

  const minutes = Math.floor(
    elapsedSeconds / 60
  );

  const seconds = elapsedSeconds % 60;

  const formattedTime = `${String(
    minutes
  ).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  return (
    <div className="automation-card card">
      {/* Icon */}
      <div className="icon-badge">
        <SettingOutlined className="gear-icon" />
      </div>

      <div className="progress-content">
        {/* Title */}
        <h3 className="common-title-primary progress-title">
          Agentic Automation Progress
        </h3>

        {/* Progress */}
        <div className="workflow-progress">
          {WorkFlowSteps.map(
            (step, index) => (
              <div
                key={step.id}
                className="workflow-progress-segment"
                style={{
                  flex: `${STEP_DURATIONS[index]} 1 0`,
                }}
              >
                <Progress
                  percent={
                    runId === 0
                      ? 0
                      : stepPercentages[index]
                  }
                  showInfo={false}
                  strokeColor={
                    stepColors[index]
                  }
                  railColor="#e2e8f0"
                  size={{ height: 8 }}
                />
              </div>
            )
          )}
        </div>

        {/* Stats */}
        <div className="progress-stats">
          <span className="stat-value-22">
            {percent}%
          </span>

          <div className="estimated-time-container">
            <ClockCircleOutlined className="time-icon" />

            <div className="time-text-group">
              <span className="time-label">
                ELAPSED TIME
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