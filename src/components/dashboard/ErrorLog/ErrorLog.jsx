import { AlertCircle, ArrowRight, MoreVertical } from "lucide-react";
import ErrorLogData from "../../../data/ErrorLogData";

export default function ErrorLog() {
  return (
    <div className="card">
      {/* Header with Icon, Title, Badge, and Link */}
      <div className="queue-header">
        <div className="queue-title-row">
          <div className="error-title-wrapper">
            <AlertCircle className="error-header-icon" size={20} />
            <h3 className="common-title-primary mb-0">Error Log</h3>
            <span className="error-count-badge">
              {ErrorLogData.length} Errors
            </span>
          </div>
          <a href="#view-all-logs" className="view-all-link">
            View All Logs <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Table Container */}
      <div className="queue-table-container">
        <table className="queue-table error-table">
          <thead>
            <tr>
              <th className="th-sno">#</th>
              <th>Date & Time</th>
              <th>Patient</th>
              <th>Step</th>
              <th>Error Message</th>
              {/* <th>Status</th> */}
              <th className="th-action">Action</th>
            </tr>
          </thead>
          <tbody>
            {ErrorLogData.map((item) => (
              <tr key={item.id} className="error-row">
                <td className="pid">{item.id}</td>
                <td className="updated-cell">{item.dateTime}</td>
                <td>
                  <span className="p-name">{item.patient}</span>
                </td>
                <td className="step-cell">{item.step}</td>
                <td className="error-message-cell">{item.errorMessage}</td>
                {/* <td>
                  <span className="status-pill red">{item.status}</span>
                </td> */}
                <td className="action-cell">
                  <div className="error-action-wrapper">
                    <button className="retry-btn">Retry</button>
                    {/* <MoreVertical size={14} className="action-icon" /> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}