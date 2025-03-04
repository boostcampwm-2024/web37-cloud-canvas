'use client';

import type { ReactNode, RefObject } from 'react';
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';

import { useCanvasStore } from './canvas.store';
import type { Viewbox } from './canvas.types';

interface CanvasContext {
    canvasRef: RefObject<SVGSVGElement | null>;
}

const CanvasContext = createContext<CanvasContext | null>(null);

interface CanvasProviderProps {
    children: ReactNode;
    initialViewbox?: Viewbox;
}

export const CanvasProvider = (props: CanvasProviderProps) => {
    const { children, initialViewbox } = props;

    const canvasRef = useRef<SVGSVGElement>(null); // 초기값을 null로 유지
    const { setViewbox } = useCanvasStore.use.actions();
    const [isInitialized, setIsInitialized] = useState(false);

    const initializeViewbox = useCallback(
        ($canvas: SVGSVGElement) => {
            const { clientWidth, clientHeight } = $canvas;
            const initialWidth = initialViewbox?.width || clientWidth;
            const initialHeight = initialViewbox?.height || clientHeight;
            const initialX = initialViewbox?.x || -initialWidth / 2;
            const initialY = initialViewbox?.y || -initialHeight / 2;

            setViewbox({
                x: initialX,
                y: initialY,
                width: initialWidth,
                height: initialHeight,
            });
            setIsInitialized(true);
        },
        [initialViewbox, setViewbox],
    );

    useLayoutEffect(() => {
        if (!canvasRef.current) {
            console.error('Canvas element is not available yet.');
            return;
        }

        initializeViewbox(canvasRef.current);
    }, [initializeViewbox, canvasRef.current]);

    useLayoutEffect(() => {
        if (!canvasRef.current) return;

        const resizeObserver = new ResizeObserver((entries) => {
            if (!entries || !entries.length) {
                return;
            }

            const { clientWidth, clientHeight } = entries[0]
                .target as SVGSVGElement;
            if (
                canvasRef.current?.clientWidth !== clientWidth ||
                canvasRef.current?.clientHeight !== clientHeight
            ) {
                setViewbox({
                    x: -clientWidth / 2,
                    y: -clientHeight / 2,
                    width: clientWidth,
                    height: clientHeight,
                });
            }
        });

        resizeObserver.observe(canvasRef.current);

        return () => resizeObserver.disconnect();
    }, [setViewbox]);

    return (
        <CanvasContext.Provider value={{ canvasRef }}>
            {children}
        </CanvasContext.Provider>
    );
};

export const useCanvasContext = () => {
    const context = useContext(CanvasContext);

    if (!context) {
        throw new Error(
            'useCanvasContext: CanvasProvider가 제공되지 않았습니다.',
        );
    }

    return context;
};
