// import { Clock } from "lucide-react";

// const AutomationProgress = () => {
//   return (
//     <div className="card">
//       <h3 className="common-title-primary">Automation Progress</h3>

//       <div className="gauge-content-body">
//         {/* Large Half-Circle Gauge */}
//         <div className="gauge-wrapper">
//           <svg viewBox="0 0 100 55" className="gauge-svg">
//             {/* Background Track Arc */}
//             <path
//               d="M 10 50 A 40 40 0 0 1 90 50"
//               fill="none"
//               stroke="#f1f5f9"
//               strokeWidth="9"
//               strokeLinecap="round"
//             />
//             {/* Green Progress Arc */}
//             <path
//               d="M 10 50 A 40 40 0 0 1 78 22"
//               fill="none"
//               stroke="#10b981"
//               strokeWidth="9"
//               strokeLinecap="round"
//             />
//           </svg>
//           <div className="gauge-text">
//             <span className="stat-value-22">72%</span>
//             <span className="common-text-grey-12">Overall Progress</span>
//           </div>
//         </div>

//         {/* Stats Section Aligned to the Right */}
//         <div className="progress-stats">
//           <div className="stat-row">
//             <span className="common-text-grey-14">
//               <span className="dot green"></span> Completed
//             </span>
//             <span className="common-title-secondary">72%</span>
//           </div>
//           <div className="stat-row">
//             <span className="common-text-grey-14">
//               <span className="dot blue"></span> In Progress
//             </span>
//             <span className="common-title-secondary">18%</span>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="time-remaining">
//         <span className="time-label">Estimated Time Remaining</span>
//         <span className="common-title-secondary time">
//           18m 24s <Clock size={15} className="clock-icon" />
//         </span>
//       </div>
//     </div>
//   );
// };

// export default AutomationProgress;


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
