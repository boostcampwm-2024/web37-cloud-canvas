'use client';

import type { ReactNode, RefObject } from 'react';
import {
    createContext,
    useCallback,
    useContext,
    useState,
    useRef,
    useEffect,
    useMemo,
} from 'react';

import type { Viewbox, ViewMode } from '@/entities/canvas/model/canvas.types';

interface CanvasStateContextProps {
    canvasRef: RefObject<SVGSVGElement | null>;
    viewbox: Viewbox;
    viewMode: ViewMode;
    zoomFactor: number;
}

const CanvasStateContext = createContext<CanvasStateContextProps | null>(null);

interface CanvasActionContextProps {
    updateViewbox: (viewbox: Partial<Viewbox>) => void;
    updateViewMode: (viewMode: ViewMode) => void;
    updateZoomFactor: (zoomFactor: number) => void;
}

const CanvasActionContext = createContext<CanvasActionContextProps | null>(
    null,
);

interface CanvasProviderProps {
    children: ReactNode;
    initialViewbox?: Viewbox;
}

export const CanvasProvider = (props: CanvasProviderProps) => {
    const { children, initialViewbox } = props;

    const canvasRef = useRef<SVGSVGElement>(null);
    const [viewMode, setViewMode] = useState<ViewMode>('3d');
    const [viewbox, setViewbox] = useState<Viewbox>(
        initialViewbox ?? {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        },
    );
    const [zoomFactor, setZoomFactor] = useState<number>(1);

    const updateViewbox = useCallback(
        (viewbox: Partial<Viewbox>) => {
            setViewbox((prevState) => ({
                ...prevState,
                ...viewbox,
            }));
        },
        [setViewbox],
    );

    const updateViewMode = useCallback(
        (viewMode: ViewMode) => {
            setViewMode(viewMode);
        },
        [setViewMode],
    );

    const updateZoomFactor = useCallback(
        (zoomFactor: number) => {
            setZoomFactor(zoomFactor);
        },
        [setZoomFactor],
    );

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setViewbox({
                x: -width / 2,
                y: -height / 2,
                width,
                height,
            });
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const stateContextValue = useMemo<CanvasStateContextProps>(
        () => ({
            canvasRef,
            viewMode,
            viewbox,
            zoomFactor,
        }),
        [canvasRef, viewMode, viewbox],
    );

    const actionContextValue = useMemo<CanvasActionContextProps>(
        () => ({
            updateViewMode,
            updateViewbox,
            updateZoomFactor,
        }),
        [updateViewMode, updateViewbox, updateZoomFactor],
    );

    return (
        <CanvasStateContext.Provider value={stateContextValue}>
            <CanvasActionContext.Provider value={actionContextValue}>
                {children}
            </CanvasActionContext.Provider>
        </CanvasStateContext.Provider>
    );
};

export const useCanvasState = () => {
    const context = useContext(CanvasStateContext);

    if (!context) {
        throw new Error(
            'useCanvasState: CanvasProvider가 제공되지 않았습니다.',
        );
    }

    return context;
};

export const useCanvasActions = () => {
    const context = useContext(CanvasActionContext);

    if (!context) {
        throw new Error(
            'useCanvasActions: CanvasProvider가 제공되지 않았습니다.',
        );
    }

    return context;
};
