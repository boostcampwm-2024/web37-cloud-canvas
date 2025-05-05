'use client';

import { Header } from '@/widgets/header/ui/header';
import { Sidebar } from '@/widgets/sidebar/ui/sidebar';

import { useCanvasState } from '@/features/canvas/model/context';
import { useCanvasStore } from '@/features/canvas/model/store';
import { Canvas } from '@/features/canvas/ui/canvas';
import { DraftEdge } from '@/features/canvas/ui/draft-edge';
import { Edge } from '@/features/canvas/ui/edge';
import { Group } from '@/features/canvas/ui/group';
import { Node } from '@/features/canvas/ui/node';
import { NodeController } from '@/features/canvas/ui/node-controller';

import type { Edge as EdgeType } from '@/entities/canvas/model/edge.types';
import type { Node as NodeType } from '@/entities/canvas/model/node.types';

//TODO:
//- remove edge
//- move bezier point
//- node drop zone
export default function Page() {
    const nodes = useCanvasStore.use.nodes();
    const edges = useCanvasStore.use.edges();
    const groups = useCanvasStore.use.groups();
    const draftEdge = useCanvasStore.use.draftEdge();
    const selectedNodeId = useCanvasStore.use.selectedNodeId();
    const { viewMode } = useCanvasState();

    return (
        <div
            className="flex h-screen w-screen overflow-hidden"
            onContextMenu={(e) => e.preventDefault()}
        >
            <Sidebar />
            <div className="relative h-full flex-1">
                <Header />
                <Canvas>
                    {Object.values(nodes).map((node: NodeType) => (
                        <Node key={node.id} node={node} viewMode={viewMode} />
                    ))}

                    {Object.values(edges).map((edge: EdgeType) => (
                        <Edge key={edge.id} edge={edge} viewMode={viewMode} />
                    ))}

                    {Object.values(groups).map((group) => (
                        <Group
                            key={group.id}
                            group={group}
                            viewMode={viewMode}
                        />
                    ))}

                    {draftEdge && (
                        <DraftEdge draftEdge={draftEdge} viewMode={viewMode} />
                    )}
                    {selectedNodeId && (
                        <NodeController selectedNodeId={selectedNodeId} />
                    )}
                </Canvas>
            </div>
        </div>
    );
}
