import type { Group as GroupType } from '@/entities/canvas/model/group.types';

import { GRID_SIZE_2D, IsoMatrixDOM } from '@/shared/canvas/constants';
import { gridToCoordPosition } from '@/shared/canvas/lib/position';
import type { ViewMode } from '@/shared/canvas/types';

import { getGridBounds } from '../lib/group';
import { useCanvasStore } from '../model/store';

interface GroupProps {
    group: GroupType;
    viewMode: ViewMode;
}
export const Group = (props: GroupProps) => {
    const { group, viewMode } = props;
    const { getNodes } = useCanvasStore.use.nodeActions();

    const transform = viewMode === '3d' ? IsoMatrixDOM?.toString() : undefined;
    const bounds = getGridBounds(getNodes(group.childNodeIds), viewMode, 1);

    //INFO: transform을 통해서 변경되는 svg는 3d도 동일하게 2d 포지션
    const position = gridToCoordPosition(
        { col: bounds.col, row: bounds.row },
        '2d',
    );

    return (
        <rect
            x={position.x}
            y={position.y}
            width={bounds.cols * GRID_SIZE_2D}
            height={bounds.rows * GRID_SIZE_2D}
            transform={transform}
            fill="none"
            stroke="green"
            strokeWidth="1"
        />
    );
};
