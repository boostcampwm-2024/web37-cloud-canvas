import _ from 'lodash';

import type { GridPoint, GridSize2D, GridSize3D } from '@/shared/types/canvas';

import { GAP, PADDING } from '../config/layout';
import type { Node } from '../model/node.types';

export const calcChildrenLayout = (
    parent: Node,
    children: Node[],
): { point: GridPoint }[] => {
    if (!children.length) return [];

    return children.map((child, idx) => {
        const centerRows =
            parent.point.row +
            (parent.size['2d'].rows - child.size['2d'].rows) / 2;

        return {
            point: {
                col:
                    PADDING +
                    parent.point.col +
                    (child.size['2d'].cols + GAP) * idx,
                row: centerRows,
            },
        };
    });
};

export const calcParentSizeByChildren = (
    children: Node[],
): GridSize2D | GridSize3D => {
    const totalChildrenWidth = _.sumBy(
        children,
        (child) => child.size['2d'].cols,
    );
    const totalGaps = GAP * (children.length - 1);
    const totalPadding = PADDING * 2;

    return {
        rows: children[0].size['2d'].rows + totalPadding,
        cols: totalChildrenWidth + totalGaps + totalPadding,
    };
};
