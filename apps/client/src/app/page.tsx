'use client';

import { CloudCanvas } from '@/widgets/cloud-canvas/ui/cloud-canvas';
import { ConnectionEdge } from '@/widgets/connection-edge/ui/ConnectionEdge';
import { Header } from '@/widgets/header/ui/header';
import { ResourceControls } from '@/widgets/resource-controls/ui/resource-controls';
import { ResourceNode } from '@/widgets/resource-node/ui/resource-node';
import { Sidebar } from '@/widgets/sidebar/ui/sidebar';

import { useSelectStore } from '@/features/select/model/select.store';

import { Edge } from '@/entities/edge/ui/Edge';
import { useNodeStore } from '@/entities/node/model/node.store';

export default function Page() {
    const nodes = useNodeStore.use.nodes();
    const selectedNodeId = useSelectStore.use.selectedNodeId();

    return (
        <div className="flex h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className="relative h-full flex-1">
                <Header />
                <CloudCanvas>
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
                    <ConnectionEdge />
                </CloudCanvas>
            </div>
        </div>
    );
}
