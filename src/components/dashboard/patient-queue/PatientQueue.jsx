import React from 'react';
import { MoreVertical } from 'lucide-react';

const queueData = [
  {
    id: '01',
    name: 'Robert Johnson',
    avatar: 'https://i.pravatar.cc/100?img=11',
    status: 'Completed',
    statusType: 'green',
    step: 'Final Verification Complete',
    updated: '2 mins ago',
  },
  {
    id: '02',
    name: 'Olivia Martinez',
    avatar: 'https://i.pravatar.cc/100?img=5',
    status: 'Completed',
    statusType: 'green',
    step: 'Final Verification Complete',
    updated: '4 mins ago',
  },
  {
    id: '03',
    name: 'James Wilson',
    avatar: 'https://i.pravatar.cc/100?img=12',
    status: 'In Progress',
    statusType: 'blue',
    step: 'Dental Carrier Verification',
    updated: '6 mins ago',
  },
  {
    id: '04',
    name: 'Sophia Brown',
    avatar: 'https://i.pravatar.cc/100?img=9',
    status: 'In Progress',
    statusType: 'blue',
    step: 'Secondary Insurance Check',
    updated: '8 mins ago',
  },
  {
    id: '05',
    name: 'William Davis',
    avatar: 'https://i.pravatar.cc/100?img=13',
    status: 'Pending',
    statusType: 'orange',
    step: '-',
    updated: '10 mins ago',
  },
  {
    id: '06',
    name: 'Emma Watson',
    avatar: 'https://i.pravatar.cc/100?img=16',
    status: 'In Progress',
    statusType: 'blue',
    step: 'Aggregate Responses',
    updated: '12 mins ago',
  },
  {
    id: '07',
    name: 'Liam Miller',
    avatar: 'https://i.pravatar.cc/100?img=15',
    status: 'Pending',
    statusType: 'orange',
    step: ' ',
    updated: '15 mins ago',
  },
  {
    id: '08',
    name: 'Ava Taylor',
    avatar: 'https://i.pravatar.cc/100?img=20',
    status: 'Completed',
    statusType: 'green',
    step: 'Final Verification Complete',
    updated: '18 mins ago',
  },
  {
    id: '09',
    name: 'Noah Anderson',
    avatar: 'https://i.pravatar.cc/100?img=68',
    status: 'Completed',
    statusType: 'green',
    step: 'Final Verification Complete',
    updated: '21 mins ago',
  },
  {
    id: '10',
    name: 'Isabella Thomas',
    avatar: 'https://i.pravatar.cc/100?img=26',
    status: 'In Progress',
    statusType: 'blue',
    step: 'Dental Carrier Verification',
    updated: '25 mins ago',
  },
  {
    id: '11',
    name: 'Mason White',
    avatar: 'https://i.pravatar.cc/100?img=33',
    status: 'In Progress',
    statusType: 'blue',
    step: 'Secondary Insurance Check',
    updated: '28 mins ago',
  },
  {
    id: '12',
    name: 'Mia Harris',
    avatar: 'https://i.pravatar.cc/100?img=47',
    status: 'Completed',
    statusType: 'green',
    step: 'Final Verification Complete',
    updated: '30 mins ago',
  },
];

export default function PatientQueue() {
  return (
    <div className="card">
      {/* Header with Title and View All Inline */}
      <div className="queue-header">
        <div className="queue-title-row">
          <h3 className="common-title-primary">Patient Process Queue</h3>
          <a href="#view-all" className="view-all-link">View All</a>
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