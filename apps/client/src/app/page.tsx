'use client';

import { Canvas } from '@/widgets/canvas/ui/canvas';
import { Header } from '@/widgets/header/ui/header';
import { ResourceNode } from '@/widgets/resource-node/ui/resource-node';
import { Sidebar } from '@/widgets/sidebar/ui/sidebar';

import { useNodeStore } from '@/entities/node/model/node.store';

export default function Page() {
    const nodes = useNodeStore.use.nodes();

    return (
        <div className="flex h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className="relative h-full flex-1">
                <Header />
                <Canvas>
                    {Object.values(nodes).map((node) => (
                        <ResourceNode
                            key={node.id}
                            id={node.id}
                            point={node.point}
                            size={node.size}
                            droppable={node.droppable}
                        />
                    ))}
                </Canvas>
            </div>
        </div>
    );
}
