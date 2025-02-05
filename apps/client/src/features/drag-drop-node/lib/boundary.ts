import type { Node } from '@/entities/node/model/node.types';

import type { GridBoundary, ViewMode } from '@/shared/types/canvas';

export const getNodeGridBoundary = ({
    node,
    viewMode,
}: {
    node: Node;
    viewMode: ViewMode;
}) => {
    return {
        col: node.point.col,
        row: node.point.row,
        cols: node.size[viewMode].cols,
        rows: node.size[viewMode].rows,
    };
};

export const isOutsideBoundary = ({
    itemBoundary,
    containerBoundary,
}: {
    itemBoundary: GridBoundary;
    containerBoundary: GridBoundary;
}) => {
    const srcCenterPoint = {
        col: itemBoundary.col + itemBoundary.cols / 2,
        row: itemBoundary.row + itemBoundary.rows / 2,
    };

    return (
        srcCenterPoint.col < containerBoundary.col ||
        srcCenterPoint.col > containerBoundary.col + containerBoundary.cols ||
        srcCenterPoint.row < containerBoundary.row ||
        srcCenterPoint.row > containerBoundary.row + containerBoundary.rows
    );
};
