import { ServerSVGConfig } from '@/shared/config/resource-svg';
import { ViewMode } from '@/shared/types/canvas';
import { SVGProps } from 'react';
import { ServerSVG2D } from './server-svg-2d';
import { ServerSVG3D } from './server-svg-3d';

interface ServerSVGProps extends SVGProps<SVGSVGElement> {
    viewMode: ViewMode;
}
export const ServerSVG = (props: ServerSVGProps) => {
    const { viewMode, ...svgProps } = props;

    const { size } = ServerSVGConfig;

    return viewMode === '2d' ? (
        <ServerSVG2D size={size[viewMode]} {...svgProps} />
    ) : (
        <ServerSVG3D size={size[viewMode]} {...svgProps} />
    );
};
