import { Progress } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const AutomationProgress = ({ percent = 72 }) => {
  return (
    <div className="automation-card card">
      {/* Icon Badge */}
      <div className="icon-badge">
        <SettingOutlined className="gear-icon" />
      </div>

      {/* Title & Progress Bar Area */}
      <div className="progress-content">
        <h3 className="common-title-primary progress-title">Agentic Automation Progress</h3>
        <Progress
          percent={percent}
          showInfo={false}
          strokeColor="#10b981"
          railColor="#e2e8f0"
          size={{ height: 8 }}
          className="custom-progress-bar"
        />
        <span className="stat-value-22">{percent}%</span>
      </div>

    </div>
  );
};

export default AutomationProgress;
