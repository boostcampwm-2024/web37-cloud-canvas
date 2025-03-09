import { useCanvasState } from '../model/canvas.context';
import { Node } from '../model/canvas.types';

interface ResourceNodeProps {
    node: Node;
}

export const ResourceNode = (args: ResourceNodeProps) => {
    const { node } = args;
    const { svg2D: Svg2D, svg3D: Svg3D, size } = node;

    const { viewMode } = useCanvasState();

    return (
        <g>
            {viewMode === '2d' && <Svg2D size={size[viewMode]} />}
            {viewMode === '3d' && <Svg3D size={size[viewMode]} />}
        </g>
    );
};
