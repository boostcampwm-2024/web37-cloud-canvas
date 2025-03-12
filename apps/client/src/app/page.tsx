'use client';

import { Canvas } from '@/widgets/canvas/ui/canvas';
import { Sidebar } from '@/widgets/sidebar/ui/sidebar';

import { useCanvasState } from '@/features/canvas/model/context';
import { useCanvasStore } from '@/features/canvas/model/store';

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
                {/* <Header /> */}
                <Canvas>
                    {Object.values(nodes).map((node: Node) => (
                        <g key={node.id}>
                            {viewMode === '3d' && (
                                <node.svg3D size={node.size} />
                            )}
                            {viewMode === '2d' && (
                                <node.svg2D size={node.size} />
                            )}
                        </g>
                    ))}
                </Canvas>
            </div>
        </div>
    );
}
