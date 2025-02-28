'use client';

import { CloudCanvas } from '@/widgets/cloud-canvas/ui/cloud-canvas';
import { ConnectionDraftEdge } from '@/widgets/connection-edge/ui/connection-draft-edge';
import { ConnectionEdge } from '@/widgets/connection-edge/ui/connection-edge';
import { Header } from '@/widgets/header/ui/header';
import { NetworkConfig } from '@/widgets/network-config/ui/network-config';
import { ResourceControls } from '@/widgets/resource-controls/ui/resource-controls';
import { ResourceNode } from '@/widgets/resource-node/ui/resource-node';
import { Sidebar } from '@/widgets/sidebar/ui/sidebar';

import { useSelectStore } from '@/features/select/model/select.store';

import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { useEdgeStore } from '@/entities/edge/model/edge.store';
import { useGroupStore } from '@/entities/group/model/group.store';
import { Group } from '@/entities/group/ui/group';
import { useNodeStore } from '@/entities/node/model/node.store';

export default function Page() {
    const nodes = useNodeStore.use.nodes();
    const draftEdge = useEdgeStore.use.draftEdge();
    const edges = useEdgeStore.use.edges();
    const groups = useGroupStore.use.groups();
    const selectedNodeId = useSelectStore.use.selectedNodeId();

    const viewMode = useCanvasStore.use.viewMode();
    return (
        <div
            className="flex h-screen w-screen overflow-hidden"
            onContextMenu={(e) => e.preventDefault()}
        >
            <Sidebar />
            <div className="relative h-full flex-1">
                <Header />
                <CloudCanvas>
                    {draftEdge && <ConnectionDraftEdge />}
                    {edges &&
                        Object.values(edges).map((edge) => (
                            <ConnectionEdge key={edge.id} {...edge} />
                        ))}
                    {Object.values(nodes).map((node) => (
                        <ResourceNode
                            key={node.id}
                            id={node.id}
                            point={node.point}
                            size={node.size}
                            droppable={node.droppable}
                        />
                    ))}
                    {selectedNodeId && (
                        <ResourceControls selectedId={selectedNodeId} />
                    )}

                    {Object.values(groups).map((group) => (
                        <Group key={group.id} points={[]} viewMode={viewMode} />
                    ))}
                </CloudCanvas>
                <NetworkConfig />
            </div>
        </div>
    );
}
