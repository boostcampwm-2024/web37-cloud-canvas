'use client';

import { Header } from '@/widgets/header/ui/header';
import { Sidebar } from '@/widgets/sidebar/ui/sidebar';

import { Canvas } from '@/features/canvas/components/Canvas';
import { useCanvasStore } from '@/features/canvas/model/canvas.store';

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
                    <rect x="10" y="10" width="100" height="100" fill="red" />
                </Canvas>
            </div>
        </div>
    );
}
