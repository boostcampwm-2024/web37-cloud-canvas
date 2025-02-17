'use client';

import { CloudCanvas } from '@/widgets/cloud-canvas/ui/cloud-canvas';
import { ConnectionDraftEdge } from '@/widgets/connection-edge/ui/connection-draft-edge';
import { ConnectionEdge } from '@/widgets/connection-edge/ui/connection-edge';
import { Header } from '@/widgets/header/ui/header';
import { ResourceControls } from '@/widgets/resource-controls/ui/resource-controls';
import { ResourceNode } from '@/widgets/resource-node/ui/resource-node';
import { Sidebar } from '@/widgets/sidebar/ui/sidebar';

import { useSelectStore } from '@/features/select/model/select.store';

import { useEdgeStore } from '@/entities/edge/model/edge.store';
import { useNodeStore } from '@/entities/node/model/node.store';

export default function Page() {
    const nodes = useNodeStore.use.nodes();
    const draftEdge = useEdgeStore.use.draftEdge();
    const edges = useEdgeStore.use.edges();
    const selectedNodeId = useSelectStore.use.selectedNodeId();

    return (
        <div className="flex h-screen w-screen overflow-hidden">
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
                            connectors={node.connectors}
                        />
                    ))}
                    {selectedNodeId && (
                        <ResourceControls selectedId={selectedNodeId} />
                    )}
                </CloudCanvas>
            </div>
        </div>
    );
}
