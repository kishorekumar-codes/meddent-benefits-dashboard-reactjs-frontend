const WorkFlowSteps = [
  {
    id: 1,
    stepNumber: "01",
    name: "Benefits data intake from PMS",
    status: "completed",
    startTime: "10:43:37",
    endTime: "10:43:47",
    duration: "10.0s",
  },
  {
    id: 2,
    stepNumber: "02",
    name: "Benefits & Verification data capture from payer portals",
    status: "in-query",
    startTime: "10:43:47",
    endTime: "10:44:22",
    duration: "35.0s",
  },
  {
    id: 3,
    stepNumber: "03",
    name: "Calculate coverage and coordination of benefits",
    status: "running",
    startTime: "10:44:22",
    activeTask: "Processing...",
  },
  {
    id: 4,
    stepNumber: "04",
    name: "Update ECS and Benefits Verification report in PMS",
    status: "waiting",
  },
];

export default WorkFlowSteps;