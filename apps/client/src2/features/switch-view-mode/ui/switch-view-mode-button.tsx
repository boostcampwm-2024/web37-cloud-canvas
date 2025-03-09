import { useCanvasStore } from '@/entities/canvas/model/canvas.store';

import { Toggle } from '@/shared/ui/shadcn/toggle';

export const SwitchViewModeButton = () => {
    const viewMode = useCanvasStore.use.viewMode();
    const { setViewMode } = useCanvasStore.use.actions();

    const handleClick = () => setViewMode(viewMode === '2d' ? '3d' : '2d');

    return (
        <Toggle variant="outline" onClick={handleClick} pressed={false}>
            {viewMode}
        </Toggle>
    );
};
