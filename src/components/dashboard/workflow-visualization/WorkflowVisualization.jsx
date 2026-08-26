import { Check, RotateCw } from "lucide-react";
import WorkFlowSteps from "../../../data/WorkFlowSteps";

const WorkflowVisualization = () => {
  return (
    <div className="card">
      {/* Header */}
      <div className="workflow-header">
        <h3 className="common-title-primary">WORKFLOW</h3>
        <span className="common-text-grey-12" style={{ marginBottom: "8px" }}>
          Total steps: {WorkFlowSteps.length}
        </span>
      </div>

      {/* Timeline List */}
      <div className="workflow-timeline">
        {WorkFlowSteps.map((step, index) => {
          const isCompleted = step.status === "completed";
          const isRunning = step.status === "running";

          return (
            <div key={step.id} className="workflow-step-row">
              {/* Left Timeline Indicator */}
              <div className="workflow-node-container">
                {index !== WorkFlowSteps.length - 1 && (
                  <div
                    className={`workflow-line ${isCompleted ? "completed" : isRunning ? "running" : ""}`}
                  />
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
