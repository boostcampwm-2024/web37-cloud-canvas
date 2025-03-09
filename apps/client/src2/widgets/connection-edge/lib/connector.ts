import { calcGridDistance } from '@/shared/lib/canvas/distance';
import type { GridPoint } from '@/shared/types/canvas';
import type { Connector } from '@/shared/types/resource';

export const findNearestConnector = (
    connectors: Array<Connector>,
    sourcePoint: GridPoint,
    targetPoint: GridPoint,
) => {
    const absConnectors = adjustConnectorAbsPoints(connectors, sourcePoint);
    const nearest = absConnectors.reduce(
        (prev: { distance: number; connector: Connector }, cur: Connector) => {
            const distance = calcGridDistance(cur.point, targetPoint);
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

export const adjustConnectorAbsPoints = (
    connectors: Array<Connector>,
    nodePoint: GridPoint,
) => {
    const targetConnectorsPoint = connectors.map((connector) => {
        return {
            ...connector,
            point: {
                col: nodePoint.col + connector.point.col,
                row: nodePoint.row + connector.point.row,
            },
        };
    });

    return targetConnectorsPoint;
};
