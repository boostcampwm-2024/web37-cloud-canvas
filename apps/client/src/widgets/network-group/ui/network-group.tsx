import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { useGroupStore } from '@/entities/group/model/group.store';
import { Group } from '@/entities/group/ui/group';
import { useNodeStore } from '@/entities/node/model/node.store';
import { Node } from '@/entities/node/model/node.types';
import { useResourceStore } from '@/entities/resource/model/resource.store';
import { ViewMode } from '@/shared/types/canvas';

interface NetworkGroupProps {
    id: string;
    nodeIds: string[];
}

const calcBoundary = (
    nodes: Node[],
    viewMode: ViewMode,
    padding: number = 1,
) => {
    const minCol = Math.min(...nodes.map((node) => node.point.col));
    const maxCol = Math.max(
        ...nodes.map((node) => node.point.col + node.size[viewMode].cols),
    );
    const minRow = Math.min(...nodes.map((node) => node.point.row));
    const maxRow = Math.max(
        ...nodes.map((node) => node.point.row + node.size[viewMode].rows),
    );

    return [
        { col: minCol - padding, row: minRow - padding },
        { col: maxCol + padding, row: minRow - padding },
        { col: maxCol + padding, row: maxRow + padding },
        { col: minCol - padding, row: maxRow + padding },
    ];
};

export const NetworkGroup = (props: NetworkGroupProps) => {
    const { id, nodeIds } = props;
    const { actions } = useNodeStore();

    const viewMode = useCanvasStore.use.viewMode();
    const nodes = actions.getNodes(nodeIds);
    const { getResource } = useResourceStore.use.actions();
    const { getGroups } = useGroupStore.use.actions();

    // 노드가 없는 경우 빈 배열 반환
    if (!nodes || nodes.length === 0) {
        return null;
    }

    // 현재 그룹에 속한 모든 노드 수집
    const allNodes = [...nodes];

    // 현재 그룹에 속한 하위 그룹 찾기
    const childGroups = getGroups(
        nodes
            .filter((node) => node.parentGroup && node.parentGroup !== id)
            .map((node) => node.parentGroup),
    );

    // 하위 그룹에 속한 노드들도 경계 계산에 포함
    childGroups.forEach((group) => {
        if (group && group.nodeIds) {
            const groupNodes = actions.getNodes(group.nodeIds);
            allNodes.push(...groupNodes);
        }
    });

    // 중복 노드 제거 (ID 기준)
    const uniqueNodes = Array.from(
        new Map(allNodes.map((node) => [node.id, node])).values(),
    );

    // 노드들의 경계 계산
    const nodesBoundaryPoints = calcBoundary(uniqueNodes, viewMode, 1);

    // 하위 그룹들의 경계점 계산
    let minCol = nodesBoundaryPoints[0].col;
    let minRow = nodesBoundaryPoints[0].row;
    let maxCol = nodesBoundaryPoints[2].col;
    let maxRow = nodesBoundaryPoints[2].row;

    // 각 하위 그룹의 경계를 고려하여 전체 경계 업데이트
    childGroups.forEach((group) => {
        if (group && group.nodeIds && group.nodeIds.length > 0) {
            // 그룹의 노드들을 가져와서 경계 계산
            const groupNodes = actions.getNodes(group.nodeIds);
            if (groupNodes.length > 0) {
                const groupBoundary = calcBoundary(groupNodes, viewMode, 2);
                console.log(groupBoundary);

                // 그룹 경계에서 최소/최대 좌표 추출
                const groupMinCol = groupBoundary[0].col;
                const groupMinRow = groupBoundary[0].row;
                const groupMaxCol = groupBoundary[2].col;
                const groupMaxRow = groupBoundary[2].row;

                // 전체 경계 업데이트
                minCol = Math.min(minCol, groupMinCol);
                minRow = Math.min(minRow, groupMinRow);
                maxCol = Math.max(maxCol, groupMaxCol);
                maxRow = Math.max(maxRow, groupMaxRow);
            }
        }
    });

    // 최종 경계점 계산
    const finalBoundaryPoints = [
        { col: minCol, row: minRow },
        { col: maxCol, row: minRow },
        { col: maxCol, row: maxRow },
        { col: minCol, row: maxRow },
    ];

    return (
        <Group
            points={finalBoundaryPoints}
            viewMode={viewMode}
            strokeColor={'red'}
        />
    );
};
