export default function MiniSparklineCard({ title, value, change, changeType, strokeColor }) {
  return (
    <div className="mini-card">
      <span className="common-title-secondary">{title}</span>
      <div className="mini-body">
        <div className="mini-info">
          <h3 className="stat-value-18">{value}</h3>
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
