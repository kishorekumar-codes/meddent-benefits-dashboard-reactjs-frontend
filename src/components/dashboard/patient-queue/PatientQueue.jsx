import {
  ArrowRight,
  MoreVertical,
} from "lucide-react";

import QueueData from "../../../data/QueueData";
import { TOTAL_STEPS } from "../../../utils/tools";

export default function PatientQueue({
  runningPatient,
  currentStep = 0,
  processStatus = "waiting",
}) {
  // Generate numeric ID for the newly running patient
  const getNextPatientId = () => {
    const numericIds = QueueData.map((item) =>
      Number(item.id)
    ).filter((id) => !Number.isNaN(id));

    const nextId =
      numericIds.length > 0
        ? Math.max(...numericIds) + 1
        : 1;

    return String(nextId).padStart(2, "0");
  };

  const activePatient = runningPatient
    ? {
      id: getNextPatientId(),
      patientValue: runningPatient.value,
      name: runningPatient.label,
      avatar:
        runningPatient.avatar ||
        "https://i.pravatar.cc/100?img=12",
      status:
        processStatus === "completed"
          ? "Completed"
          : "Running",
      statusType:
        processStatus === "completed"
          ? "completed"
          : "running",
      step:
        processStatus === "completed"
          ? "Step 4"
          : `Step ${currentStep}`,
      updated: "Just now",
    }
    : null;

  const queuePatients = activePatient
    ? [
      activePatient,
      ...QueueData,
    ]
    : QueueData;

  return (
    <div className="card">
      {/* ======================================
          HEADER
      ======================================= */}

      <div className="queue-header">
        <div className="queue-title-row">
          <div className="queue-title-wrapper">
            <h3 className="common-title-primary">
              Patient Process Queue
            </h3>

            {/* {showStepCounter && ( */}
            <span className="queue-step-counter">
              {currentStep || "0"} / {TOTAL_STEPS}
            </span>
            {/* )} */}

            {/* {runningPatient &&
              processStatus === "completed" && (
                <span className="queue-step-counter">
                  4 / 4
                </span>
              )} */}
          </div>

          <a
            href="#"
            className="view-all-link"
            onClick={(event) =>
              event.preventDefault()
            }
          >
            View All
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* ======================================
          TABLE
      ======================================= */}

      <div className="queue-table-container">
        <table className="queue-table">
          <thead>
            <tr>
              <th className="th-sno">#</th>
              <th>Patient</th>
              <th>Current Step</th>
              <th>Status</th>
              <th>Updated</th>
              <th className="th-action">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {queuePatients.map((item) => {
              /*
               * Check whether this is the
               * currently running patient.
               */
              const isRunningPatient =
                activePatient &&
                item.id === activePatient.id;

              /*
               * Dynamic step
               */
              const displayStep =
                isRunningPatient
                  ? processStatus === "completed"
                    ? "Step 4"
                    : currentStep > 0
                      ? `Step ${currentStep}`
                      : "-"
                  : item.step;

              /*
               * Dynamic status
               */
              const displayStatus =
                isRunningPatient
                  ? processStatus === "completed"
                    ? "Completed"
                    : "Running"
                  : item.status;

              /*
               * Dynamic status type
               */
              const displayStatusType =
                isRunningPatient
                  ? processStatus === "completed"
                    ? "completed"
                    : "running"
                  : item.statusType;

              return (
                <tr key={item.id}>
                  {/* # / ID */}
                  <td className="pid">
                    {item.id}
                  </td>

                  {/* Patient */}
                  <td>
                    <div className="patient-cell">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="p-avatar"
                      />

                      <span className="p-name">
                        {item.name}
                      </span>
                    </div>
                  </td>

                  {/* Current Step */}
                  <td className="step-cell">
                    <span
                      className={`step-dot ${displayStatusType}`}
                    ></span>

                    {displayStep}
                  </td>

                  {/* Status */}
                  <td>
                    <span
                      className={`status-pill ${displayStatusType}`}
                    >
                      {displayStatus}
                    </span>
                  </td>

                  {/* Updated */}
                  <td className="updated-cell">
                    {isRunningPatient
                      ? "Just now"
                      : item.updated}
                  </td>

                  {/* Action */}
                  <td className="action-cell">
                    <MoreVertical
                      size={14}
                      className="action-icon"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}