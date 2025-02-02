import type { ResourceSVGProps } from '@/shared/types/resource';

import { ServerSVG2D } from './server-svg-2d';
import { ServerSVG3D } from './server-svg-3d';

export const ServerSVG = (props: ResourceSVGProps) => {
    const { viewMode, size, ...svgProps } = props;

    return viewMode === '2d' ? (
        <ServerSVG2D size={size[viewMode]} {...svgProps} />
    ) : (
        <ServerSVG3D size={size[viewMode]} {...svgProps} />
    );
};
