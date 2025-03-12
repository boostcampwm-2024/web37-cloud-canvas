import { Suspense } from 'react';

import type { ViewMode } from '@/entities/canvas/model/types';
import type { Node } from '@/entities/node/model/types';

import type { GridSize } from '@/shared/canvas/types';

interface NodeRendererProps {
    node: Node;
    viewMode: ViewMode;
    size: Node['size'];
}

const isSingleSize = (
    size: GridSize | { '2d': GridSize; '3d': GridSize },
): size is GridSize => {
    return !('2d' in size && '3d' in size);
};

export const NodeRenderer = (props: NodeRendererProps) => {
    const { node, viewMode, size } = props;
    const Svg2D = node.svg2D;
    const Svg3D = node.svg3D;

    const sizeByViewMode = isSingleSize(size) ? size : size[viewMode];

    return (
        <g>
            {viewMode === '3d' && Svg3D && (
                <Suspense fallback={null}>
                    <Svg3D size={sizeByViewMode} />
                </Suspense>
            )}
            {viewMode === '2d' && Svg2D && (
                <Suspense fallback={null}>
                    <Svg2D size={sizeByViewMode} />
                </Suspense>
            )}
        </g>
    );
};
