import React from 'react';
import { 
  User, 
  ShieldCheck, 
  Stethoscope, 
  ClipboardCheck, 
  Calculator, 
  FileText, 
  CreditCard, 
  Users, 
  Check,
  RotateCw 
} from 'lucide-react';

const steps = [
  { id: 1, name: 'Registration', status: 'completed', icon: <User size={22} /> },
  { id: 2, name: 'Eligibility Check', status: 'completed', icon: <ShieldCheck size={22} /> },
  { id: 3, name: 'Treatment Verification', status: 'upcoming', icon: <Stethoscope size={22} />, badge: 'sync' },
  { id: 4, name: 'Pre-Authorization', status: 'in-progress', icon: <ClipboardCheck size={22} /> },
  { id: 5, name: 'Benefit Estimation', status: 'upcoming', icon: <Calculator size={22} /> },
  { id: 6, name: 'Claim Submission', status: 'upcoming', icon: <FileText size={22} /> },
  { id: 7, name: 'Payment & Notification', status: 'upcoming', icon: <CreditCard size={22} /> },
];

const WorkflowVisualization = () => {
  return (
    <div className="workflow-card">
      <div className="workflow-card-header">
        <h3 className="workflow-card-title">Workflow Visualization</h3>
        <p className="workflow-card-subtitle">Patient journey at a glance</p>
      </div>

      <div className="workflow-circle-container">
        {/* Outer Circle Ring */}
        <svg className="workflow-svg-ring" viewBox="0 0 580 580">
          <defs>
            {/* Attractive Green Gradient definition */}
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>

          <circle cx="290" cy="290" r="240" className="workflow-ring-bg" />
          <circle cx="290" cy="290" r="240" className="workflow-ring-completed" />
          <circle cx="290" cy="290" r="240" className="workflow-ring-progress" />
        </svg>

        {/* Center Node with Grey Circular Backdrop */}
        <div className="workflow-center-backdrop">
          <div className="workflow-center-node">
            <div className="workflow-center-icon-wrapper">
              {/* <Users size={30} className="workflow-center-icon" /> */}
              <img src={"https://i.pravatar.cc/100?img=12"} alt={"img"} className="workflow-center-icon" style={{borderRadius:"50%"}}/>
            </div>
            <h4>James Wilson</h4>
            <p>Real-time workflow tracking</p>
          </div>
        </div>

        {/* Dynamic Nodes with Gradient Highlights */}
        {steps.map((step, index) => {
          const angle = (index * (360 / steps.length)) - 90;
          return (
            <div 
              key={step.id} 
              className="workflow-node-item"
              style={{
                transform: `rotate(${angle}deg) translate(240px) rotate(${-angle}deg)`
              }}
            >
              <div className={`workflow-node-bubble workflow-${step.status}`}>
                {step.status === 'completed' && (
                  <span className="workflow-status-badge workflow-check">
                    <Check size={10} strokeWidth={3} />
                  </span>
                )}
                {step.status === 'in-progress' && (
                  <span className="workflow-status-badge workflow-progress">
                    <Check size={10} strokeWidth={3} />
                  </span>
                )}
                {step.badge === 'sync' && (
                  <span className="workflow-status-badge workflow-sync">
                    <RotateCw size={9} strokeWidth={2.5} />
                  </span>
                )}

                <span className="workflow-node-icon">{step.icon}</span>
                <span className="workflow-node-label">{step.name}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Legend */}
      <div className="workflow-legend">
        <span className="workflow-legend-item">
          <span className="workflow-dot workflow-green"></span> Completed (2)
        </span>
        <span className="workflow-legend-item">
          <span className="workflow-dot workflow-blue"></span> In Progress (2)
        </span>
      </div>
    </div>
  );
};

export default WorkflowVisualization;