import { ContainerSVGConfig } from '@/shared/config/resource-svg';
import type { ResourceSVGProps } from '@/shared/types/resource';

import { ContainerSVG2D } from './container-svg-2d';
import { ContainerSVG3D } from './container-svg-3d';

export const ContainerSVG = (props: ResourceSVGProps) => {
    const { viewMode, ...svgProps } = props;

    const { size } = ContainerSVGConfig;

    return viewMode === '2d' ? (
        <ContainerSVG2D size={size[viewMode]} {...svgProps} />
    ) : (
        <ContainerSVG3D size={size[viewMode]} {...svgProps} />
    );
};
