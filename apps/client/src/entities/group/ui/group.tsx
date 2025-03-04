import { IsoMatrix } from '@/shared/config/canvas';
import { gridToCoordPoint } from '@/shared/lib/canvas/point';
import { GridPoint, ViewMode } from '@/shared/types/canvas';
import { Polygon } from '@/shared/ui/svg/common/polygon';

interface GroupProps {
    points: Array<GridPoint>;
    viewMode: ViewMode;
    strokeColor: string;
}

export const Group = (props: GroupProps) => {
    const { viewMode, points, strokeColor } = props;
    const transform = viewMode === '3d' ? IsoMatrix?.toString() : undefined;

    const coordPoints = points.map((point) => {
        return gridToCoordPoint(point, '2d');
    });

    return (
        <Polygon
            transform={transform}
            points={coordPoints}
            fill="none"
            stroke={strokeColor}
            strokeWidth={3}
        />
    );
};
