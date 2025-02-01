'use client';

import { Canvas } from '@/widgets/canvas/ui/canvas';
import { Header } from '@/widgets/header/ui/header';
import { ResourceNode } from '@/widgets/resource-node/ui/resource-node';

import { useNodeStore } from '@/entities/node/model/node.store';

export default function Page() {
    const nodes = useNodeStore.use.nodes();
    return (
        <div className="h-screen overflow-hidden">
            <div className="h-full">
                <Header />
                <Canvas>
                    {Object.values(nodes).map((node) => (
                        <ResourceNode
                            key={node.id}
                            id={node.id}
                            point={node.point}
                            resourceType={node.properties.type}
                        />
                    ))}
                </Canvas>
            </div>
        </div>
    );
}
