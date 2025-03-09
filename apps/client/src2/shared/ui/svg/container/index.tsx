import type { ResourceSVGProps } from '@/shared/types/resource';

import { ContainerSVG2D } from './container-svg-2d';
import { ContainerSVG3D } from './container-svg-3d';

export const ContainerSVG = (props: ResourceSVGProps) => {
    const { viewMode, size, ...svgProps } = props;

    return viewMode === '2d' ? (
        <ContainerSVG2D size={size[viewMode]} {...svgProps} />
    ) : (
        <ContainerSVG3D size={size[viewMode]} {...svgProps} />
    );
};
