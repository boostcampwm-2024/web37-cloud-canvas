import { Point } from '@/shared/types/canvas';
import { SVGProps } from 'react';

type DefaultPolygonProps = Omit<SVGProps<SVGPolygonElement>, 'points'>;

interface PolygonProps extends DefaultPolygonProps {
    points: Array<Point>;
}

export const Polygon = (props: PolygonProps) => {
    const { points, ...restProps } = props;
    const pointsStr = points.map((p) => `${p.x},${p.y}`).join(' ');

    return <polygon points={pointsStr} {...restProps}></polygon>;
};
