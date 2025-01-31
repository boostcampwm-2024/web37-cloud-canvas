'use client';

import { Canvas } from '@/widgets/canvas/ui/canvas';
import { Header } from '@/widgets/header/ui/header';

import { useCanvasStore } from '@/entities/canvas/model/canvas.store';
import { Node } from '@/entities/node/ui/Node';

import { ServerSVG } from '@/shared/ui/svg/server';

export default function Page() {
    const viewMode = useCanvasStore.use.viewMode();

    return (
        <div className="h-screen overflow-hidden">
            <div className="h-full">
                <Header />
                <Canvas>
                    <Node>
                        <ServerSVG viewMode={viewMode} />
                    </Node>
                </Canvas>
            </div>
        </div>
    );
}
