const WorkFlowSteps = [
  {
    id: 1,
    stepNumber: "01",
    name: "Data Validation",
    status: "completed",
    startTime: "10:43:37",
    endTime: "10:43:47",
    duration: "10.0s",
  },
  {
    id: 2,
    stepNumber: "02",
    name: "Carrier Verification",
    status: "completed",
    startTime: "10:43:47",
    endTime: "10:44:22",
    duration: "35.0s",
  },
  {
    id: 3,
    stepNumber: "03",
    name: "Dental Carrier Verification",
    status: "running",
    startTime: "10:44:22",
    activeTask: "Processing...",
  },
  {
    id: 4,
    stepNumber: "04",
    name: "Secondary Insurance Check",
    status: "waiting",
  },
  {
    id: 5,
    stepNumber: "05",
    name: "Medicaid Authorization",
    status: "waiting",
  },
  {
    id: 6,
    stepNumber: "06",
    name: "Aggregate Responses",
    status: "waiting",
  },
  {
    id: 7,
    stepNumber: "07",
    name: "Generate Benefits PDF",
    status: "waiting",
  },
  {
    id: 8,
    stepNumber: "08",
    name: "Final Verification Complete",
    status: "waiting",
  },
];

export default WorkFlowSteps;
