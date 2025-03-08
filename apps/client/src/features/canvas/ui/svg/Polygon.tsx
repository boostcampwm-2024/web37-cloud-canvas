import { CoordPosition } from '@/features/canvas/model/canvas.types';
import { SVGProps } from 'react';

type DefaultPolygonProps = Omit<SVGProps<SVGPolygonElement>, 'points'>;

interface PolygonProps extends DefaultPolygonProps {
    positions: Array<CoordPosition>;
}

export const Polygon = (props: PolygonProps) => {
    const { positions, ...restProps } = props;
    const pointsStr = positions
        .map((position) => `${position.x},${position.y}`)
        .join(' ');

    return <polygon points={pointsStr} {...restProps}></polygon>;
};
