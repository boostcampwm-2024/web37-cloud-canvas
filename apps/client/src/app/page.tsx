import { Canvas } from '@/widgets/canvas/canvas/ui/canvas';

export default function Page() {
    return (
        <div className="h-screen">
            <Canvas>
                <rect x="10" y="10" width="100" height="100" fill="red" />
            </Canvas>
        </div>
    );
}
