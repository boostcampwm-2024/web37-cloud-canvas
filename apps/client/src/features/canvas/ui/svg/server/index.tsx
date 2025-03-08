import type { ResourceSVGProps } from '@/features/canvas/model/resource.types';

import { ServerSVG2D } from './ServerSVG2D';
import { ServerSVG3D } from './ServerSVG3D';

export const ServerSVG = (props: ResourceSVGProps) => {
    const { viewMode, size, ...svgProps } = props;

    return viewMode === '2d' ? (
        <ServerSVG2D size={size[viewMode]} {...svgProps} />
    ) : (
        <ServerSVG3D size={size[viewMode]} {...svgProps} />
    );
};
