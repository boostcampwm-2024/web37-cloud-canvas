export const calc3DGridSizeFrom2D = (
    size: number,
    xFactor: number,
    yFactor: number,
) => {
    return {
        width: Math.round(2 * size * xFactor),
        height: Math.round(2 * size * yFactor),
    };
};
