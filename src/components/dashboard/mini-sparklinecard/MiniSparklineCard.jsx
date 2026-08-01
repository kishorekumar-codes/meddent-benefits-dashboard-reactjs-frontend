import React from 'react';

export default function MiniSparklineCard({ title, value, subtext, change, changeType, strokeColor }) {
  return (
    <div className="mini-card">
      <div className="mini-card-header">
        <span className="mini-title">{title}</span>
      </div>
      <div className="mini-body">
        <div className="mini-info">
           {/* <span className="mini-subtext">{subtext}</span> */}
          <h3 className="mini-value">{value}</h3> 
          <span className={`mini-change ${changeType}`}>{change}</span>
        </div>
        
        <div className="mini-chart">
          <svg viewBox="0 0 100 40" className="sparkline-svg">
            <path
              d="M0 30 Q15 20, 30 25 T60 15 T90 20 T100 5"
              fill="none"
              stroke={strokeColor}
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}