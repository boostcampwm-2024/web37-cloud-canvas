import type { GridPoint } from '@/shared/types/canvas';
import type { Connector, Direction } from '@/shared/types/resource';

export const updateConnectorPosition = (
    connector: Connector,
    newSize: { cols: number; rows: number },
    sizeDiff: { cols: number; rows: number },
): Connector => {
    const updates: Array<{
        condition: boolean;
        directions: Direction[];
        update: (point: GridPoint) => Partial<GridPoint>;
    }> = [
        {
            condition: sizeDiff.cols !== 0,
            directions: ['top', 'right', 'bottom'],
            update: () => ({
                col:
                    connector.direction === 'right'
                        ? newSize.cols
                        : newSize.cols / 2,
            }),
        },
        {
            condition: sizeDiff.rows !== 0,
            directions: ['left', 'right', 'bottom'],
            update: () => ({
                row:
                    connector.direction === 'bottom'
                        ? newSize.rows
                        : newSize.rows / 2,
            }),
        },
    ];

    const applicableUpdates = updates.filter(
        ({ condition, directions }) =>
            condition && directions.includes(connector.direction as Direction),
    );

    if (!applicableUpdates.length) return connector;

    const newPoint = applicableUpdates.reduce(
        (point, { update }) => ({
            ...point,
            ...update(point),
        }),
        connector.point,
    );

    return {
        ...connector,
        point: newPoint,
    };
};
