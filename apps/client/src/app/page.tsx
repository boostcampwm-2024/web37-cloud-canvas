'use client';

import { Canvas } from '@/widgets/canvas/ui/canvas';
import { Sidebar } from '@/widgets/sidebar/ui/sidebar';

export default function Page() {
    // const nodes = useCanvasStore.use.nodes();
    return (
        <div
            className="flex h-screen w-screen overflow-hidden"
            onContextMenu={(e) => e.preventDefault()}
        >
            <Sidebar />
            <div className="relative h-full flex-1">
                {/* <Header /> */}
                <Canvas>
                    <rect x={0} y={0} width={100} height={100} fill="red" />
                    {/*     {Object.values(nodes).map((node) => ( */}
                    {/*         <ResourceNode key={node.id} node={node} /> */}
                    {/*     ))} */}
                </Canvas>
            </div>
        </div>
    );
}
