import React from 'react';
import { MoreVertical } from 'lucide-react';

const queueData = [
  { id: '01', name: 'Robert Johnson', avatar: 'https://i.pravatar.cc/100?img=11', status: 'In Progress', statusType: 'blue', step: 'Dental Treatment Verification', updated: '2 mins ago' },
  { id: '02', name: 'Olivia Martinez', avatar: 'https://i.pravatar.cc/100?img=5', status: 'In Progress', statusType: 'blue', step: 'Pre-Authorization', updated: '4 mins ago' },
  { id: '03', name: 'James Wilson', avatar: 'https://i.pravatar.cc/100?img=12', status: 'In Progress', statusType: 'blue', step: 'Insurance Eligibility Check', updated: '6 mins ago' },
  { id: '04', name: 'Sophia Brown', avatar: 'https://i.pravatar.cc/100?img=9', status: 'Pending', statusType: 'orange', step: 'Patient Registration', updated: '8 mins ago' },
  { id: '05', name: 'William Davis', avatar: 'https://i.pravatar.cc/100?img=13', status: 'Completed', statusType: 'green', step: 'Payment Posted', updated: '10 mins ago' },
  { id: '06', name: 'Emma Watson', avatar: 'https://i.pravatar.cc/100?img=16', status: 'In Progress', statusType: 'blue', step: 'Benefit Estimation', updated: '12 mins ago' },
  { id: '07', name: 'Liam Miller', avatar: 'https://i.pravatar.cc/100?img=15', status: 'Pending', statusType: 'orange', step: 'Claim Submission', updated: '15 mins ago' },
  { id: '08', name: 'Ava Taylor', avatar: 'https://i.pravatar.cc/100?img=20', status: 'Completed', statusType: 'green', step: 'Eligibility Check', updated: '18 mins ago' },
  { id: '09', name: 'Noah Anderson', avatar: 'https://i.pravatar.cc/100?img=68', status: 'In Progress', statusType: 'blue', step: 'Treatment Verification', updated: '21 mins ago' },
  { id: '10', name: 'Isabella Thomas', avatar: 'https://i.pravatar.cc/100?img=26', status: 'Pending', statusType: 'orange', step: 'Pre-Authorization', updated: '25 mins ago' },
  { id: '11', name: 'Mason White', avatar: 'https://i.pravatar.cc/100?img=33', status: 'Completed', statusType: 'green', step: 'Patient Registration', updated: '28 mins ago' },
  { id: '12', name: 'Mia Harris', avatar: 'https://i.pravatar.cc/100?img=47', status: 'In Progress', statusType: 'blue', step: 'Payment & Notification', updated: '30 mins ago' },
];

export default function PatientQueue() {
  return (
    <div className="patient-queue-card">
      {/* Header with Title and View All Inline */}
      <div className="queue-header">
        <div className="queue-title-row">
          <h3 className="queue-card-title">Patient Process Queue</h3>
          <a href="#view-all" className="view-all-link">View All</a>
        </div>
        <p className="queue-card-subtitle">View and manage patient workflow status</p>
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
            {queueData.map((item) => (
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