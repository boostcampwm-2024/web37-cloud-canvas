'use client';

import { Header } from '@/widgets/header/ui/header';

import { Canvas } from '@/features/canvas/components/Canvas';
import { useCanvasStore } from '@/features/canvas/model/canvas.store';
import { ResourceNode } from '@/features/canvas/ui/ResourceNode';
import { Sidebar } from '@/features/canvas/ui/Sidebar';

export default function Page() {
    const nodes = useCanvasStore.use.nodes();
    return (
        <div
            className="flex h-screen w-screen overflow-hidden"
            onContextMenu={(e) => e.preventDefault()}
        >
            <Sidebar />
            <div className="relative h-full flex-1">
                <Header />
                <Canvas>
                    {Object.values(nodes).map((node) => (
                        <ResourceNode key={node.id} node={node} />
                    ))}
                </Canvas>
            </div>
        </div>
    );
}
