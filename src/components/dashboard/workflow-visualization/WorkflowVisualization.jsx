import React from 'react';
import { Check, RotateCw } from 'lucide-react';

const steps = [
  {
    id: 1,
    stepNumber: '01',
    name: 'Data Validation',
    status: 'completed',
    startTime: '10:43:37',
    endTime: '10:43:47',
    duration: '10.0s',
  },
  {
    id: 2,
    stepNumber: '02',
    name: 'Carrier Verification',
    status: 'completed',
    startTime: '10:43:47',
    endTime: '10:44:22',
    duration: '35.0s',
  },
  {
    id: 3,
    stepNumber: '03',
    name: 'Dental Carrier Verification',
    status: 'running',
    startTime: '10:44:22',
    activeTask: 'Processing...',
  },
  {
    id: 4,
    stepNumber: '04',
    name: 'Secondary Insurance Check',
    status: 'waiting',
  },
  {
    id: 5,
    stepNumber: '05',
    name: 'Medicaid Authorization',
    status: 'waiting',
  },
  {
    id: 6,
    stepNumber: '06',
    name: 'Aggregate Responses',
    status: 'waiting',
  },
  {
    id: 7,
    stepNumber: '07',
    name: 'Generate Benefits PDF',
    status: 'waiting',
  },
  {
    id: 8,
    stepNumber: '08',
    name: 'Final Verification Complete',
    status: 'waiting',
  },
];

const WorkflowVisualization = () => {
  return (
    <div className="card">
      {/* Header */}
      <div className="workflow-header">
        <h3 className='common-title-primary'>WORKFLOW</h3>
        <span className="common-text-grey-12" style={{marginBottom: '8px'}}>Total steps: {steps.length}</span>
      </div>

      {/* Timeline List */}
      <div className="workflow-timeline">
        {steps.map((step, index) => {
          const isCompleted = step.status === 'completed';
          const isRunning = step.status === 'running';

          return (
            <div key={step.id} className="workflow-step-row">
              {/* Left Timeline Indicator */}
              <div className="workflow-node-container">
                {index !== steps.length - 1 && (
                  <div className={`workflow-line ${isCompleted ? 'completed' : isRunning ? 'running' : ''}`} />
                )}
                
                <div className={`workflow-node ${step.status}`}>
                  {isCompleted && <Check size={18} strokeWidth={2.5} />}
                  {isRunning && <RotateCw size={16} className="spin" strokeWidth={2.5} />}
                </div>
              </div>

              {/* Step Detail Card */}
              <div className={`workflow-card ${step.status}`}>
                <div className="workflow-card-left">
                  <div className="common-text-grey-12">STEP {step.stepNumber}</div>
                  <h3 className="common-title-secondary">{step.name}</h3>
                  
                  {(step.startTime || step.endTime) && (
                    <div className="common-text-grey-12">
                      {step.startTime && <span>Started: {step.startTime}</span>}
                      {step.startTime && step.endTime && <span className="dot">•</span>}
                      {step.endTime && <span>Ended: {step.endTime}</span>}
                    </div>
                  )}
                </div>

                <div className="workflow-card-right">
                  {step.duration && (
                    <div className="workflow-stat">
                      <span className="common-text-grey-11">DURATION</span>
                      <span className="common-title-secondary">{step.duration}</span>
                    </div>
                  )}

                  {step.activeTask && (
                    <div className="workflow-stat active">
                      <span className="common-text-grey-11">ACTIVE TASK</span>
                      <span className="common-title-secondary active-text">{step.activeTask}</span>
                    </div>
                  )}

                  <span className={`workflow-badge ${step.status}`}>
                    {step.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkflowVisualization;