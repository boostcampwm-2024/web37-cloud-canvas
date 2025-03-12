'use client';

import { Canvas } from '@/widgets/canvas/ui/canvas';
import { Header } from '@/widgets/header/ui/header';
import { Sidebar } from '@/widgets/sidebar/ui/sidebar';

import { useCanvasState } from '@/features/canvas/model/context';
import { useCanvasStore } from '@/features/canvas/model/store';
import { NodeRenderer } from '@/features/canvas/ui/node-renderer';

import type { Node } from '@/entities/node/model/types';

export default function Page() {
    const nodes = useCanvasStore.use.nodes();
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
                            size={node.size}
                        />
                    ))}
                </Canvas>
            </div>
        </div>
    );
}
