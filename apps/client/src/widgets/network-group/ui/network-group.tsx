import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { Group } from '@/entities/group/ui/group';
import { useNodeStore } from '@/entities/node/model/node.store';
import { useResourceStore } from '@/entities/resource/model/resource.store';

interface NetworkGroupProps {
    nodeIds: string[];
}

export const NetworkGroup = (props: NetworkGroupProps) => {
    const { actions } = useNodeStore();
    const { nodeIds } = props;

    const viewMode = useCanvasStore.use.viewMode();
    const nodes = actions.getNodes(nodeIds);
    const { getResource } = useResourceStore.use.actions();

    const minCol = Math.min(...nodes.map((node) => node.point.col));
    const maxCol = Math.max(
        ...nodes.map((node) => node.point.col + node.size[viewMode].cols),
    );
    const minRow = Math.min(...nodes.map((node) => node.point.row));
    const maxRow = Math.max(
        ...nodes.map((node) => node.point.row + node.size[viewMode].rows),
    );

    const padding = 1;
    return (
        <Group
            points={[
                { col: minCol - padding, row: minRow - padding },
                { col: maxCol + padding, row: minRow - padding },
                { col: maxCol + padding, row: maxRow + padding },
                { col: minCol - padding, row: maxRow + padding },
            ]}
            viewMode={viewMode}
            strokeColor={'red'}
        />
    );
};
