import React from 'react';

export default function StatCard({ icon, value, label, subtext, iconBg, iconColor }) {
  return (
    <div className="stat-card">
      <div className="stat-icon-wrapper" style={{ backgroundColor: iconBg, color: iconColor }}>
        {icon}
      </div>
      <div className="stat-content">
        <h2 className="stat-value">{value}</h2>
        <p className="stat-label">{label}</p>
        {/* <span className="stat-subtext">{subtext}</span> */}
      </div>
    </div>
  );
}