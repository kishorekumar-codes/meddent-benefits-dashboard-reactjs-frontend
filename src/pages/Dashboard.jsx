import { ClipboardList, CheckCircle2, Clock, TrendingUp } from "lucide-react";

import Header from "../components/dashboard/layout/Header";
import StatCard from "../components/dashboard/statcard/StatCard";
import WorkflowVisualization from "../components/dashboard/workflow-visualization/WorkflowVisualization";
import AutomationProgress from "../components/dashboard/automation-progress/AutomationProgress";
import WorkflowControls from "../components/dashboard/workflow-controls/WorkflowControls";
import PatientQueue from "../components/dashboard/patient-queue/PatientQueue";
// import MiniSparklineCard from "../components/dashboard/mini-sparklinecard/MiniSparklineCard";
import Footer from "../components/dashboard/layout/Footer";
import BenefitsCheckForm from "../components/dashboard/BenefitsCheckForm/BenefitsCheckForm";
import ErrorLog from "../components/dashboard/ErrorLog/ErrorLog";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />

      <main className="dashboard-content">

        {/* meddent form */}
        <section className="benefits-card">
          <AutomationProgress />
          <BenefitsCheckForm />
        </section>

        {/* Main Grid: Left Flow Diagram | Right Control Panel */}
        <section className="grid-main">
          <div className="grid-left">
            <WorkflowVisualization />
          </div>
          <div className="grid-right">
            {/* <AutomationProgress /> */}
            <WorkflowControls />
            <PatientQueue />
          </div>
        </section>

        {/* Error Log Section */}
        {/* <section className="benefits-card">
          <ErrorLog />
        </section> */}

        {/* Top 4 Stat Cards */}
        <section className="grid-4">
          <StatCard
            icon={<ClipboardList size={20} />}
            value="128"
            label="Patients Processed"
            iconBg="#eff6ff"
            iconColor="#3b82f6"
          />
          <StatCard
            icon={<CheckCircle2 size={20} />}
            value="96"
            label="Completed"
            iconBg="#f0fdf4"
            iconColor="#22c55e"
          />
          <StatCard
            icon={<Clock size={20} />}
            value="24"
            label="In Progress"
            iconBg="#fff7ed"
            iconColor="#f97316"
          />
          <StatCard
            icon={<TrendingUp size={20} />}
            value="72%"
            label="Overall Progress"
            iconBg="#faf5ff"
            iconColor="#a855f7"
          />
        </section>

        {/* Bottom 4 Sparkline Cards */}
        {/* <section className="grid-4">
          <MiniSparklineCard
            title="Claims Submitted"
            value="46"
            change="+12% vs yesterday"
            changeType="positive"
            strokeColor="#3b82f6"
          />
          <MiniSparklineCard
            title="Payments Received"
            value="$72,450"
            change="+8% vs yesterday"
            changeType="positive"
            strokeColor="#22c55e"
          />
          <MiniSparklineCard
            title="Avg. Processing Time"
            value="2h 34m"
            change="-15% vs yesterday"
            changeType="positive"
            strokeColor="#a855f7"
          />
          <MiniSparklineCard
            title="Active Patients"
            value="128"
            change="+5% vs yesterday"
            changeType="positive"
            strokeColor="#06b6d4"
          />
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
