import React from 'react';
import { ClipboardList, CheckCircle2, Clock, TrendingUp } from 'lucide-react';

import Header from '../components/dashboard/layout/Header';
import StatCard from '../components/dashboard/statcard/StatCard';
import WorkflowVisualization from '../components/dashboard/workflow-visualization/WorkflowVisualization';
import AutomationProgress from '../components/dashboard/automation-progress/AutomationProgress';
import WorkflowControls from '../components/dashboard/workflow-controls/WorkflowControls';
import PatientQueue from '../components/dashboard/patient-queue/PatientQueue';
import MiniSparklineCard from '../components/dashboard/mini-sparklinecard/MiniSparklineCard';
import Footer from '../components/dashboard/layout/Footer';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />

      <main className="dashboard-content">

        {/* Top 4 Stat Cards */}
        <section className="grid-4">
          <StatCard
            icon={<ClipboardList size={20} />}
            value="128"
            label="Patients Processed"
            subtext="Today"
            iconBg="#eff6ff"
            iconColor="#3b82f6"
          />
          <StatCard
            icon={<CheckCircle2 size={20} />}
            value="96"
            label="Completed"
            subtext="Today"
            iconBg="#f0fdf4"
            iconColor="#22c55e"
          />
          <StatCard
            icon={<Clock size={20} />}
            value="24"
            label="In Progress"
            subtext="Today"
            iconBg="#fff7ed"
            iconColor="#f97316"
          />
          <StatCard
            icon={<TrendingUp size={20} />}
            value="72%"
            label="Overall Progress"
            subtext="Today"
            iconBg="#faf5ff"
            iconColor="#a855f7"
          />
        </section>

        {/* Main Grid: Left Flow Diagram | Right Control Panel */}
        <section className="grid-main">
          <div className="grid-left">
            <WorkflowVisualization />
          </div>
          <div className="grid-right">
            <AutomationProgress />
            <WorkflowControls />
            <PatientQueue />
          </div>
        </section>

        {/* Bottom 4 Sparkline Cards */}
        <section className="grid-4">
          <MiniSparklineCard
            title="Claims Submitted"
            value="46"
            subtext="Today"
            change="+12% vs yesterday"
            changeType="positive"
            strokeColor="#3b82f6"
          />
          <MiniSparklineCard
            title="Payments Received"
            value="$72,450"
            subtext="Today"
            change="+8% vs yesterday"
            changeType="positive"
            strokeColor="#22c55e"
          />
          <MiniSparklineCard
            title="Avg. Processing Time"
            value="2h 34m"
            subtext="Today"
            change="-15% vs yesterday"
            changeType="positive"
            strokeColor="#a855f7"
          />
          <MiniSparklineCard
            title="Active Patients"
            value="128"
            subtext="Today"
            change="+5% vs yesterday"
            changeType="positive"
            strokeColor="#06b6d4"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}