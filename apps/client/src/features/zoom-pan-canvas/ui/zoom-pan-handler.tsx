import { usePan } from '../hooks/use-pan';
import { useZoom } from '../hooks/use-zoom';

export const ZoomPanHandler = () => {
    useZoom();
    usePan();

    return null;
};
