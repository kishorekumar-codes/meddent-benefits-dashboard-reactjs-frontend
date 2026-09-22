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
  /*
   * ==========================================
   * UPDATE EXISTING PATIENT
   * ==========================================
   */

  const queuePatients = QueueData.map(
    (item) => {
      /*
       * Match selected patient
       * with QueueData
       */
      const isRunningPatient =
        runningPatient &&
        String(item.id) ===
          String(runningPatient.value);

      /*
       * Not selected patient
       * → keep original data
       */
      if (!isRunningPatient) {
        return item;
      }

      /*
       * Selected patient
       * → dynamically update
       */

      const isCompleted =
        processStatus === "completed";

      return {
        ...item,

        status: isCompleted
          ? "Completed"
          : "Running",

        statusType: isCompleted
          ? "completed"
          : "running",

        step: isCompleted
          ? `Step ${TOTAL_STEPS}`
          : currentStep > 0
            ? `Step ${currentStep}`
            : "-",

        updated: "Just now",
      };
    }
  );

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

            <span className="queue-step-counter">
              {currentStep || "0"} /{" "}
              {TOTAL_STEPS}
            </span>
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
              <th className="th-sno">
                #
              </th>

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
            {queuePatients.map((item) => (
              <tr key={item.id}>
                {/* ID */}
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
                    className={`step-dot ${item.statusType}`}
                  />

                  {item.step}
                </td>

                {/* Status */}
                <td>
                  <span
                    className={`status-pill ${item.statusType}`}
                  >
                    {item.status}
                  </span>
                </td>

                {/* Updated */}
                <td className="updated-cell">
                  {item.updated}
                </td>

                {/* Action */}
                <td className="action-cell">
                  <MoreVertical
                    size={14}
                    className="action-icon"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}