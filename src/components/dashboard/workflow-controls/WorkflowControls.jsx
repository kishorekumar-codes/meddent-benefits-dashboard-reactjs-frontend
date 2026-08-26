import { Play, Pause, RotateCcw, Square } from "lucide-react";

export default function WorkflowControls() {
  return (
    <div className="card">
      <h3 className="common-title-primary">Workflow Controls</h3>

      <div className="control-buttons">
        <button className="ctrl-btn green">
          <span className="btn-icon">
            <Play size={13} fill="currentColor" strokeWidth={0} className="icon-offset" />
          </span>
          <span>Start</span>
        </button>

        <button className="ctrl-btn blue">
          <span className="btn-icon">
            <Pause size={12} fill="currentColor" strokeWidth={0} />
          </span>
          <span>Pause</span>
        </button>

        <button className="ctrl-btn orange">
          <span className="btn-icon">
            <RotateCcw size={12} strokeWidth={2.8} />
          </span>
          <span>Restart</span>
        </button>

        <button className="ctrl-btn red">
          <span className="btn-icon">
            <Square size={10} fill="currentColor" strokeWidth={0} />
          </span>
          <span>Stop</span>
        </button>
      </div>
    </div>
  );
}
