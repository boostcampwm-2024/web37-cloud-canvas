import { Toggle } from '@/shared/shadcn/ui/toggle';

import { useCanvasActions, useCanvasState } from '../model/context';

export const SwitchViewMode = () => {
    const { viewMode } = useCanvasState();
    const { updateViewMode } = useCanvasActions();

    const handleClick = () => updateViewMode(viewMode === '2d' ? '3d' : '2d');

    return (
        <Toggle variant="outline" onClick={handleClick} pressed={false}>
            {viewMode}
        </Toggle>
    );
};
