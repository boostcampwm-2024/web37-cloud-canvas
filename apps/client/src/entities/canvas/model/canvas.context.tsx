'use client';

import type { ReactNode, RefObject } from 'react';
import {
    createContext,
    useCallback,
    useContext,
    useLayoutEffect,
    useRef,
} from 'react';

import { useCanvasStore } from './canvas.store';
import type { Viewbox } from './canvas.types';

interface CanvasContext {
    canvasRef: RefObject<SVGSVGElement | null>;
    getCanvasEl: () => SVGSVGElement;
}

const CanvasContext = createContext<CanvasContext | null>(null);

interface CanvasProviderProps {
    children: ReactNode;
    initialViewbox?: Viewbox;
}

export const CanvasProvider = (props: CanvasProviderProps) => {
    const { children, initialViewbox } = props;

    const canvasRef = useRef<SVGSVGElement>(null);
    const setViewbox = useCanvasStore.use.setViewbox();

    const getCanvasEl = useCallback(
        () => canvasRef.current as SVGSVGElement,
        [],
    );

    const initializeViewbox = useCallback(
        ($canvas: SVGSVGElement) => {
            if (initialViewbox) {
                setViewbox(initialViewbox);
                return;
            }

            const { clientWidth, clientHeight } = $canvas;
            setViewbox({
                x: -clientWidth / 2,
                y: -clientHeight / 2,
                width: clientWidth,
                height: clientHeight,
            });
        },
        [initialViewbox, setViewbox],
    );

    useLayoutEffect(() => {
        if (!canvasRef.current)
            throw new Error('CanvasProvider: canvas element이 없습니다.');

        initializeViewbox(canvasRef.current);
    }, [getCanvasEl, initializeViewbox]);

    return (
        <CanvasContext.Provider
            value={{
                canvasRef,
                getCanvasEl,
            }}
        >
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
