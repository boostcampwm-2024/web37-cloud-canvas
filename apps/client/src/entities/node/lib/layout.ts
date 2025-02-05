import type { GridPoint, GridSize2D, GridSize3D } from '@/shared/types/canvas';
import type { DropLayoutType } from '@/shared/types/resource';

import type { Node } from '../model/node.types';

const calcSquareLayout = (parent: Node, children: Node[], padding: number) => {
    const numChildren = children.length;
    const cols = Math.ceil(Math.sqrt(numChildren));

    return children.map((child, idx) => {
        const row = Math.floor(idx / cols);
        const col = idx % cols;

        const childWidth = child.size['2d'].cols;
        const childHeight = child.size['2d'].rows;

        const colOffset = col * childWidth;
        const rowOffset = row * childHeight;

        const centerCol = parent.point.col + padding + colOffset;

        const centerRow = parent.point.row + padding + rowOffset;

        return {
            col: centerCol,
            row: centerRow,
        };
    });
};

const calcHorizontalLayout = (
    parent: Node,
    children: Node[],
    padding: number,
) => {
    return children.map((child, idx) => {
        const colOffset = idx * child.size['2d'].cols;

        return {
            col: parent.point.col + padding + colOffset,
            row: parent.point.row,
        };
    });
};

const calcChildrenBoundary = (children: Node[]) => {
    return children.reduce(
        (boundary, node) => {
            const { col, row } = node.point;
            const { cols, rows } = node.size['2d'];

            return {
                minCol: Math.min(boundary.minCol, col),
                maxCol: Math.max(boundary.maxCol, col + cols),
                minRow: Math.min(boundary.minRow, row),
                maxRow: Math.max(boundary.maxRow, row + rows),
            };
        },
        {
            minCol: Infinity,
            maxCol: -Infinity,
            minRow: Infinity,
            maxRow: -Infinity,
        },
    );
};

export const calcChildrenPoints = (
    parent: Node,
    children: Node[],
    layoutType: DropLayoutType,
    padding: number = 1,
): Array<GridPoint> => {
    if (!children.length) return [];

    switch (layoutType) {
        case 'square':
            return calcSquareLayout(parent, children, padding);
        case 'horizontal':
            return calcHorizontalLayout(parent, children, padding);
    }
};

export const calcParentSizeByChildren = (
    children: Node[],
    layoutType: DropLayoutType,
    padding: number = 1,
): GridSize2D | GridSize3D => {
    const childrenBoundary = calcChildrenBoundary(children);

    switch (layoutType) {
        case 'square':
            return {
                rows:
                    childrenBoundary.maxRow -
                    childrenBoundary.minRow +
                    padding * 2,
                cols:
                    childrenBoundary.maxCol -
                    childrenBoundary.minCol +
                    padding * 2,
            };
        case 'horizontal':
            return {
                rows: childrenBoundary.maxRow - childrenBoundary.minRow,
                cols:
                    childrenBoundary.maxCol -
                    childrenBoundary.minCol +
                    padding * 2,
            };
    }
};
