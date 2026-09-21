import { useEffect, useState } from "react";

import Header from "../components/dashboard/layout/Header";
import WorkflowVisualization from "../components/dashboard/workflow-visualization/WorkflowVisualization";
import AutomationProgress from "../components/dashboard/automation-progress/AutomationProgress";
import WorkflowControls from "../components/dashboard/workflow-controls/WorkflowControls";
import PatientQueue from "../components/dashboard/patient-queue/PatientQueue";
import Footer from "../components/dashboard/layout/Footer";
import BenefitsCheckForm from "../components/dashboard/BenefitsCheckForm/BenefitsCheckForm";
import { STEP_DURATION, TOTAL_STEPS } from "../utils/tools";


export default function Dashboard() {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const [runId, setRunId] = useState(0);

  // 0 = not started
  // 1 = Step 1
  // 2 = Step 2
  // 3 = Step 3
  // 4 = Step 4
  const [currentStep, setCurrentStep] = useState(0);

  // waiting | running | completed
  const [processStatus, setProcessStatus] = useState("waiting");

  const handleRunBenefitsCheck = (patient) => {
    if (!patient) {
      console.log("Please select or enter a patient.");
      return;
    }

    console.log("Running Benefits Check for:", patient);

    setSelectedPatient(patient);

    // Start a new run
    setRunId((prev) => prev + 1);

    // Start from Step 1
    setCurrentStep(1);
    setProcessStatus("running");
  };

  /*
   * ==========================================
   * WORKFLOW STEP CONTROLLER
   * ==========================================
   *
   * Each step = 20 seconds
   *
   * Step 1 → 20s
   * Step 2 → 20s
   * Step 3 → 20s
   * Step 4 → 20s
   *
   * Total = 80 seconds
   */
  useEffect(() => {
    if (runId === 0 || !selectedPatient) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep >= TOTAL_STEPS) {
          return prevStep;
        }

        const nextStep = prevStep + 1;

        if (nextStep > TOTAL_STEPS) {
          setProcessStatus("completed");
        }

        return nextStep;
      });
    }, STEP_DURATION);

    return () => {
      clearInterval(timer);
    };
  }, [runId, selectedPatient]);

  /*
   * When Step 4 finishes, mark entire patient process
   * as completed.
   */
  useEffect(() => {
    if (
      runId > 0 &&
      currentStep === TOTAL_STEPS
    ) {
      const completionTimer = setTimeout(() => {
        setProcessStatus("completed");
      }, STEP_DURATION);

      return () => {
        clearTimeout(completionTimer);
      };
    }
  }, [currentStep, runId]);

  return (
    <div className="dashboard-container">
      <Header />

      <main className="dashboard-content">
        {/* Benefits Check */}
        <section className="benefits-card">
          <AutomationProgress runId={runId} />

          <BenefitsCheckForm
            selectedPatient={selectedPatient}
            onRunBenefitsCheck={handleRunBenefitsCheck}
          />
        </section>

        {/* Main Grid */}
        <section className="grid-main">
          <div className="grid-left">
            <WorkflowVisualization
              patientName={selectedPatient?.label}
              runId={runId}
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