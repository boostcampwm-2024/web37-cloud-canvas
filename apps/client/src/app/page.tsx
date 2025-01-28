import { Canvas } from '@/widgets/canvas/ui/canvas';
import { Header } from '@/widgets/header/ui/header';

export default function Page() {
    return (
        <div className="h-screen overflow-hidden">
            <div>
                <Header />
                <Canvas>
                    <rect x="10" y="10" width="100" height="100" fill="red" />
                </Canvas>
            </div>
        </div>
    );
}
