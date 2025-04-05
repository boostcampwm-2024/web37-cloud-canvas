import type { Connector, Node } from '@/entities/canvas/model/node.types';

import type { GridPosition, ViewMode } from '@/shared/canvas/types';

const getGridDistance = (
    sourcePosition: GridPosition,
    targetPosition: GridPosition,
) => {
    return Math.sqrt(
        Math.pow(sourcePosition.col - targetPosition.col, 2) +
            Math.pow(sourcePosition.row - targetPosition.row, 2),
    );
};

export const getNeaerestConnector = (
    node: Node,
    position: GridPosition,
    viewMode: ViewMode,
) => {
    const connectors = node.connectors[viewMode];
    const nearestConnector = connectors.reduce(
        (nearestConnector, curConnector) => {
            const absPosition = {
                col: curConnector.position.col + node.position.col,
                row: curConnector.position.row + node.position.row,
            };
            const distance = getGridDistance(position, absPosition);

            if (distance < nearestConnector.distance) {
                return {
                    distance,
                    connector: curConnector,
                };
            }

            return nearestConnector;
        },
        {
            distance: Infinity,
            connector: connectors[0],
        } as { distance: number; connector: Connector },
    );

    return nearestConnector.connector;
};
