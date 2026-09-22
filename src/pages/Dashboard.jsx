import { useEffect, useState } from "react";

import Header from "../components/dashboard/layout/Header";
import WorkflowVisualization from "../components/dashboard/workflow-visualization/WorkflowVisualization";
import AutomationProgress from "../components/dashboard/automation-progress/AutomationProgress";
import WorkflowControls from "../components/dashboard/workflow-controls/WorkflowControls";
import PatientQueue from "../components/dashboard/patient-queue/PatientQueue";
import Footer from "../components/dashboard/layout/Footer";
import BenefitsCheckForm from "../components/dashboard/BenefitsCheckForm/BenefitsCheckForm";

import {
  TOTAL_WORKFLOW_TIME,
  getCurrentWorkflowStep,
} from "../utils/tools";

export default function Dashboard() {
  const [selectedPatient, setSelectedPatient] =
    useState(null);

  const [runId, setRunId] = useState(0);

  const [elapsedTime, setElapsedTime] = useState(0);

  const [currentStep, setCurrentStep] = useState(0);

  const [processStatus, setProcessStatus] =
    useState("waiting");

  /*
   * ==========================================
   * RUN BENEFITS CHECK
   * ==========================================
   */

  const handleRunBenefitsCheck = (patient) => {
    if (!patient) {
      console.log(
        "Please select or enter a patient."
      );
      return;
    }

    console.log(
      "Running Benefits Check for:",
      patient
    );

    setSelectedPatient(patient);

    // Start new run
    setRunId((prev) => prev + 1);

    // Reset workflow
    setElapsedTime(0);
    setCurrentStep(1);
    setProcessStatus("running");
  };

  /*
   * ==========================================
   * SINGLE WORKFLOW TIMER
   * ==========================================
   */

  useEffect(() => {
    if (runId === 0 || !selectedPatient) {
      return;
    }

    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed =
        Date.now() - startTime;

      const actualElapsed = Math.min(
        elapsed,
        TOTAL_WORKFLOW_TIME
      );

      setElapsedTime(actualElapsed);

      const step =
        getCurrentWorkflowStep(
          actualElapsed
        );

      setCurrentStep(step);

      /*
       * Workflow completed
       */
      if (
        actualElapsed >=
        TOTAL_WORKFLOW_TIME
      ) {
        setProcessStatus("completed");

        clearInterval(timer);
      }
    }, 250);

    return () => {
      clearInterval(timer);
    };
  }, [runId, selectedPatient]);

  return (
    <div className="dashboard-container">
      <Header />

      <main className="dashboard-content">
        {/* Benefits Check */}
        <section className="benefits-card">
          <AutomationProgress
            runId={runId}
            elapsedTime={elapsedTime}
          />

          <BenefitsCheckForm
            selectedPatient={selectedPatient}
            onRunBenefitsCheck={
              handleRunBenefitsCheck
            }
          />
        </section>

        {/* Main Grid */}
        <section className="grid-main">
          <div className="grid-left">
            <WorkflowVisualization
              patientName={
                selectedPatient?.label
              }
              runId={runId}
              elapsedTime={elapsedTime}
              processStatus={processStatus}
            />
          </div>

          <div className="grid-right">
            <WorkflowControls />

            <PatientQueue
              runningPatient={selectedPatient}
              currentStep={currentStep}
              processStatus={processStatus}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}