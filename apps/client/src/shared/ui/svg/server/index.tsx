import { ServerSVGConfig } from '@/shared/config/resource-svg';
import type { ResourceSVGProps } from '@/shared/types/resource';

import { ServerSVG2D } from './server-svg-2d';
import { ServerSVG3D } from './server-svg-3d';

export const ServerSVG = (props: ResourceSVGProps) => {
    const { viewMode, ...svgProps } = props;

    const { size } = ServerSVGConfig;

    return viewMode === '2d' ? (
        <ServerSVG2D size={size[viewMode]} {...svgProps} />
    ) : (
        <ServerSVG3D size={size[viewMode]} {...svgProps} />
    );
};
