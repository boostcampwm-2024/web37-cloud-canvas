import type { ResourceSVGProps } from '@/shared/types/resource';

import { CloudFunctionSVG2D } from './cloud-function-svg-2d';
import { CloudFunctionSVG3D } from './cloud-function-svg-3d';

export const CloudFunctionSVG = (props: ResourceSVGProps) => {
    const { viewMode, size, ...svgProps } = props;

    return viewMode === '2d' ? (
        <CloudFunctionSVG2D size={size[viewMode]} {...svgProps} />
    ) : (
        <CloudFunctionSVG3D size={size[viewMode]} {...svgProps} />
    );
};
