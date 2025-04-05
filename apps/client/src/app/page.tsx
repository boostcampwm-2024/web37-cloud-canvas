'use client';

import { Header } from '@/widgets/header/ui/header';
import { Sidebar } from '@/widgets/sidebar/ui/sidebar';

import { useCanvasState } from '@/features/canvas/model/context';
import { useCanvasStore } from '@/features/canvas/model/store';
import { Canvas } from '@/features/canvas/ui/canvas';
import { EdgeRenderer } from '@/features/canvas/ui/edge-renderer';
import { NodeController } from '@/features/canvas/ui/node-controller';
import { NodeRenderer } from '@/features/canvas/ui/node-renderer';

import type { Edge } from '@/entities/canvas/model/edge.types';
import type { Node } from '@/entities/canvas/model/node.types';

export default function Page() {
    const nodes = useCanvasStore.use.nodes();
    const edges = useCanvasStore.use.edges();
    const selectedId = useCanvasStore.use.selectedId();
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
                    {Object.values(nodes).map((node: Node) => (
                        <NodeRenderer
                            key={node.id}
                            node={node}
                            viewMode={viewMode}
                        />
                    ))}

                    {Object.values(edges).map((edge: Edge) => (
                        <EdgeRenderer
                            key={edge.id}
                            edge={edge}
                            viewMode={viewMode}
                        />
                    ))}
                    {selectedId && <NodeController selectedId={selectedId} />}
                </Canvas>
            </div>
        </div>
    );
}
