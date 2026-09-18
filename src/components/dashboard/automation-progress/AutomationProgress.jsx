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
        <h3 className="common-title-primary">Automation Progress</h3>
        <Progress
          percent={percent}
          showInfo={false}
          strokeColor="#10b981"
          trailColor="#e2e8f0"
          strokeWidth={8}
          className="custom-progress-bar"
        />
      </div>

      {/* Percentage Output */}
      <div className="progress-stats">
        <span className="stat-value-22">{percent}%</span>
        <span className="common-text-grey-11">Overall Progress</span>
      </div>
    </div>
  );
};

export default AutomationProgress;
