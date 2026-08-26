import { MoreVertical } from "lucide-react";
import QueueData from "../../../data/QueueData";

export default function PatientQueue() {
  return (
    <div className="card">
      {/* Header with Title and View All Inline */}
      <div className="queue-header">
        <div className="queue-title-row">
          <h3 className="common-title-primary">Patient Process Queue</h3>
          <a href="#view-all" className="view-all-link">
            View All
          </a>
        </div>
      </div>

      {/* Scrollable Table Area */}
      <div className="queue-table-container">
        <table className="queue-table">
          <thead>
            <tr>
              <th className="th-sno">#</th>
              <th>Patient</th>
              <th>Current Step</th>
              <th>Status</th>
              <th>Updated</th>
              <th className="th-action">Action</th>
            </tr>
          </thead>
          <tbody>
            {QueueData.map((item) => (
              <tr key={item.id}>
                <td className="pid">{item.id}</td>
                <td>
                  <div className="patient-cell">
                    <img src={item.avatar} alt={item.name} className="p-avatar" />
                    <span className="p-name">{item.name}</span>
                  </div>
                </td>
                <td className="step-cell">
                  <span className={`step-dot ${item.statusType}`}></span>
                  {item.step}
                </td>
                <td>
                  <span className={`status-pill ${item.statusType}`}>{item.status}</span>
                </td>
                <td className="updated-cell">{item.updated}</td>
                <td className="action-cell">
                  <MoreVertical size={14} className="action-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
