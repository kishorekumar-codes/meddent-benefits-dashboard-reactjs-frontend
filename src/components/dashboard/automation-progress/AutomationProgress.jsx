  import { Progress } from "antd";
  import { SettingOutlined } from "@ant-design/icons";
  import WorkFlowSteps from "../../../data/WorkFlowSteps";
import { stepColors } from "../../../utils/tools";

  const AutomationProgress = ({ percent = 100 }) => {

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
              return (
                <div
                  key={step.id}
                  className="workflow-progress-segment"
                >
                  <Progress
                    percent={100}
                    showInfo={false}
                    strokeColor={stepColors[index]}
                    railColor="#e2e8f0"
                    size={{ height: 8 }}
                  />
                </div>
              );
            })}
          </div>

          <span className="stat-value-22">{percent}%</span>
        </div>
      </div>
    );
  };

  export default AutomationProgress;