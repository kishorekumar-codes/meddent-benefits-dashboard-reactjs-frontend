export const STEP_DURATIONS = [
  2 * 60 * 1000 + 13 * 1000, // Step 1 - 2:13
  2 * 60 * 1000 + 41 * 1000, // Step 2 - 2:41
  1 * 60 * 1000 + 2 * 1000,  // Step 3 - 1:02
  1 * 60 * 1000,              // Step 4 - 1:00
];

export const TOTAL_WORKFLOW_TIME =
  STEP_DURATIONS.reduce(
    (total, duration) => total + duration,
    0
  );

export const TOTAL_STEPS = STEP_DURATIONS.length;

/*
 * Step colors
 */
export const stepColors = [
  "#60A5FA", // Step 1 - Soft Blue
  "#F472B6", // Step 2 - Soft Pink
  "#FACC15", // Step 3 - Soft Yellow
  "#FB923C", // Step 4 - Soft Orange
];


/*
 * Get current step from elapsed time
 */
export const getCurrentWorkflowStep = (
  elapsedTime
) => {
  let accumulatedTime = 0;

  for (
    let index = 0;
    index < STEP_DURATIONS.length;
    index++
  ) {
    accumulatedTime += STEP_DURATIONS[index];

    if (elapsedTime < accumulatedTime) {
      return index + 1;
    }
  }

  return TOTAL_STEPS;
};

/*
 * Overall percentage
 */
export const getWorkflowPercentage = (
  elapsedTime
) => {
  if (elapsedTime <= 0) {
    return 0;
  }

  return Math.min(
    Math.round(
      (elapsedTime / TOTAL_WORKFLOW_TIME) * 100
    ),
    100
  );
};

/*
 * Remaining workflow time
 */
export const getRemainingWorkflowTime = (
  elapsedTime
) => {
  return Math.max(
    TOTAL_WORKFLOW_TIME - elapsedTime,
    0
  );
};

/*
 * Capitalize first letter
 */
export const capitalizeFirstLetter = (value) => {
  if (!value) return "";

  return (
    value.charAt(0).toUpperCase() +
    value.slice(1)
  );
};