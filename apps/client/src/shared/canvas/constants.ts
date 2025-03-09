export const GRID_SIZE_2D = 90;

export const ISO_TRANSFORM_X_FACTOR = 0.707;
export const ISO_TRANSFORM_Y_FACTOR = 0.409;

//INFO: Not used but useful for reference
export const ISO_TRANSFORM_MATRIX = [
    ISO_TRANSFORM_X_FACTOR,
    ISO_TRANSFORM_Y_FACTOR,
    -ISO_TRANSFORM_X_FACTOR,
    ISO_TRANSFORM_Y_FACTOR,
    0,
    0,
];

//INFO: Not used but useful for reference
export const GRID_WIDTH_3D = Math.round(
    2 * GRID_SIZE_2D * ISO_TRANSFORM_X_FACTOR,
); // 128

//INFO: Not used but useful for reference
export const GRID_HEIGHT_3D = Math.round(
    2 * GRID_SIZE_2D * ISO_TRANSFORM_Y_FACTOR,
); // 74
