import type { Node } from '@/entities/canvas/model/node.types';

import { isSingleSize } from '@/shared/canvas/lib/size';
import type { ViewMode } from '@/shared/canvas/types';

export const getGridBounds = (
    childNodes: Node[],
    viewMode: ViewMode,
    padding: number = 0,
) => {
    const minCol = Math.min(...childNodes.map((node) => node.position.col));
    const minRow = Math.min(...childNodes.map((node) => node.position.row));
    const maxCol = Math.max(
        ...childNodes.map((node) => {
            const size = isSingleSize(node.size)
                ? node.size
                : node.size[viewMode];
            return node.position.col + size.cols;
        }),
    );
    const maxRow = Math.max(
        ...childNodes.map((node) => {
            const size = isSingleSize(node.size)
                ? node.size
                : node.size[viewMode];
            return node.position.row + size.rows;
        }),
    );

    return {
        col: minCol - padding,
        row: minRow - padding,
        cols: maxCol - minCol + padding * 2,
        rows: maxRow - minRow + padding * 2,
    };
};
