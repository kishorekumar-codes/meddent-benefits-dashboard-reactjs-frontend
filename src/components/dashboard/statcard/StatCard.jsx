import React from 'react';

export default function StatCard({ icon, value, label, subtext, iconBg, iconColor }) {
  return (
    <div className="stat-card">
      <div className="stat-icon-wrapper" style={{ backgroundColor: iconBg, color: iconColor }}>
        {icon}
      </div>
      <div className="stat-content">
        <h2 className="stat-value-22">{value}</h2>
        <p className="common-text-grey-12">{label}</p>
        {/* <h3 className="common-title-secondary">{value}</h3>
        <p className="common-text-grey-14">{label}</p> */}
      </div>
    </div>
  );
};