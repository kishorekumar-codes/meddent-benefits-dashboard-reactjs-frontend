import React from 'react';
import { Clock } from 'lucide-react';

const AutomationProgress = () => {
  return (
    <div className="automation-card">
      <div className="automation-card-header">
        <h3 className="automation-card-title">Automation Progress</h3>
      </div>

      <div className="gauge-content-body">
        {/* Large Half-Circle Gauge */}
        <div className="gauge-wrapper">
          <svg viewBox="0 0 100 55" className="gauge-svg">
            {/* Background Track Arc */}
            <path
              d="M 10 50 A 40 40 0 0 1 90 50"
              fill="none"
              stroke="#f1f5f9"
              strokeWidth="9"
              strokeLinecap="round"
            />
            {/* Green Progress Arc */}
            <path
              d="M 10 50 A 40 40 0 0 1 78 22"
              fill="none"
              stroke="#10b981"
              strokeWidth="9"
              strokeLinecap="round"
            />
          </svg>
          <div className="gauge-text">
            <span className="gauge-percentage">72%</span>
            <span className="gauge-label">Overall Progress</span>
          </div>
        </div>

        {/* Stats Section Aligned to the Right */}
        <div className="progress-stats">
          <div className="stat-row">
            <span className="stat-label">
              <span className="dot green"></span> Completed
            </span>
            <span className="val">72%</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">
              <span className="dot blue"></span> In Progress
            </span>
            <span className="val">18%</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="time-remaining">
        <span className="time-label">Estimated Time Remaining</span>
        <span className="time">
          18m 24s <Clock size={15} className="clock-icon" />
        </span>
      </div>
    </div>
  );
};

export default AutomationProgress;