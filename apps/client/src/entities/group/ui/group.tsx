import { IsoMatrix } from '@/shared/config/canvas';
import { GridPoint, ViewMode } from '@/shared/types/canvas';
import { Polygon } from '@/shared/ui/svg/common/polygon';

interface GroupProps {
    points: GridPoint[];
    viewMode: ViewMode;
}

export const Group = (props: GroupProps) => {
    const { viewMode, points } = props;
    const transform = viewMode === '3d' ? IsoMatrix?.toString() : undefined;

    return (
        <Polygon
            transform={transform}
            points={[
                { x: 0, y: 0 },
                { x: 90, y: 0 },
                { x: 90, y: 90 },
                { x: 0, y: 90 },
            ]}
            fill="none"
            stroke="black"
            strokeWidth={3}
        />
    );
};
