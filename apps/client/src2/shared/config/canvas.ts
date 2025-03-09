export const GRID_SIZE_2D = 90;

export const GRID_WIDTH_3D = 128;

export const GRID_HEIGHT_3D = 74;

export const GRID_RATIO_3D = GRID_WIDTH_3D / GRID_HEIGHT_3D;

/**
 * transform matrix for isomentric
 * [a, b, c, d, e, f]:
 * | a c e |
 * | b d f |
 */
export const ISO_TRANSFORM_MATRIX = [0.707, 0.409, -0.707, 0.409, 0, 0];

export const IsoMatrix =
    typeof window === 'undefined'
        ? null
        : new DOMMatrixReadOnly(ISO_TRANSFORM_MATRIX);
