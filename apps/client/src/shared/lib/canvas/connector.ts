import type { GridPoint } from '@/shared/types/canvas';
import type { Connector } from '@/shared/types/resource';

export const calcDistance = (
    sourcePoint: GridPoint,
    targetPoint: GridPoint,
) => {
    return Math.sqrt(
        Math.pow(sourcePoint.col - targetPoint.col, 2) +
            Math.pow(sourcePoint.row - targetPoint.row, 2),
    );
};

export const findNearestConnector = (
    connectors: Array<Connector>,
    targetPoint: GridPoint,
) => {
    const nearest = connectors.reduce(
        (prev: { distance: number; connector: Connector }, cur: Connector) => {
            const distance = calcDistance(cur.point, targetPoint);
            if (prev.distance > distance) {
                return {
                    distance,
                    connector: cur,
                };
            }
            return prev; // Always return prev if the condition is not met
        },
        {
            distance: Infinity,
            connector: connectors[0],
        },
    );

    return nearest.connector;
};
