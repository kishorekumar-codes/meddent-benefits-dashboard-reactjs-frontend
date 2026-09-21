export const capitalizeFirstLetter = (value) => {
    if (!value) return "";

    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

// step line colors 
export const stepColors = [
    "#2563eb", // Step 1 - Blue
    "#db2777", // Step 2 - Pink
    "#9333ea", // Step 3 - Purple
    "#f97316", // Step 4 - Orange
];