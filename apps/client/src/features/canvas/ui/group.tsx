import type { Group as GroupType } from '@/entities/canvas/model/group.types';

import { GRID_SIZE_2D, IsoMatrixDOM } from '@/shared/canvas/constants';
import { gridToCoordPosition } from '@/shared/canvas/lib/position';
import type { ViewMode } from '@/shared/canvas/types';

interface GroupProps {
    group: GroupType;
    viewMode: ViewMode;
}
export const Group = (props: GroupProps) => {
    const { group, viewMode } = props;

    //INFO: transform을 통해서 변경되는 svg는 3d도 동일하게 2d 포지션을 가지고 있어야 한다.
    const position = gridToCoordPosition(group.position, '2d');
    const transform = viewMode === '3d' ? IsoMatrixDOM?.toString() : undefined;

    return (
        <rect
            x={position.x}
            y={position.y}
            width={group.size.cols * GRID_SIZE_2D}
            height={group.size.rows * GRID_SIZE_2D}
            transform={transform}
            fill="none"
            stroke="green"
            strokeWidth="1"
        />
    );
};
