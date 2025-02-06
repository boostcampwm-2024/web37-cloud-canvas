import type { SVGProps } from 'react';

import type { GridSize3D } from '@/shared/types/canvas';

import { Block } from '../common/block';

interface ServerSVG3DProps extends SVGProps<SVGSVGElement> {
    size: GridSize3D;
}

export const ServerSVG3D = (props: ServerSVG3DProps) => {
    const { size, ...svgProps } = props;

    return <Block size={size} {...svgProps} />;
};
