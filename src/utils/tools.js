export const capitalizeFirstLetter = (value) => {
    if (!value) return "";

    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

// step line colors 
export const stepColors = [
  "#60A5FA", // Step 1 - Soft Blue
  "#F472B6", // Step 2 - Soft Pink
  "#FACC15", // Step 3 - Soft Yellow
  "#FB923C", // Step 4 - Soft Orange
];

export const TOTAL_STEPS = 4;

export const STEP_DURATION = 20 * 1000;
