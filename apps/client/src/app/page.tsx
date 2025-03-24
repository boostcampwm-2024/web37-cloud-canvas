'use client';

import { Header } from '@/widgets/header/ui/header';
import { Sidebar } from '@/widgets/sidebar/ui/sidebar';

import { useCanvasState } from '@/features/canvas/model/context';
import { useCanvasStore } from '@/features/canvas/model/store';
import { Canvas } from '@/features/canvas/ui/canvas';
import { NodeController } from '@/features/canvas/ui/node-controller';
import { NodeRenderer } from '@/features/canvas/ui/node-renderer';

import type { Node } from '@/entities/node/model/types';

export default function Page() {
    const nodes = useCanvasStore.use.nodes();
    const selectedId = useCanvasStore.use.selectedId();
    const { viewMode } = useCanvasState();

    console.log(selectedId);
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

                    {selectedId && <NodeController selectedId={selectedId} />}
                </Canvas>
            </div>
        </div>
    );
}
