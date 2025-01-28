'use client';

import type { ReactNode, RefObject } from 'react';
import { createContext, useContext, useLayoutEffect, useRef } from 'react';

import { useCanvasStore } from './canvas.store';
import type { Viewbox } from './canvas.types';

interface CanvasContext {
    canvasRef: RefObject<SVGSVGElement | null>;
    getCanvasEl: () => SVGSVGElement | null;
}

const CanvasContext = createContext<CanvasContext>({
    canvasRef: { current: null },
    getCanvasEl: () => null,
});

interface CanvasProviderProps {
    children: ReactNode;
    initialViewbox?: Viewbox;
}

export const CanvasProvider = (props: CanvasProviderProps) => {
    const { children, initialViewbox } = props;

    const canvasRef = useRef<SVGSVGElement>(null);
    const setViewbox = useCanvasStore.use.setViewbox();

    useLayoutEffect(() => {
        if (!canvasRef.current) return;

        if (initialViewbox) {
            setViewbox(initialViewbox);
            return;
        }

        const { clientWidth, clientHeight } = canvasRef.current;
        setViewbox({
            x: -clientWidth / 2,
            y: -clientHeight / 2,
            width: clientWidth,
            height: clientHeight,
        });
    }, []);

    const getCanvasEl = () => canvasRef.current;

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
            'useCanvasContext must be used within a CanvasProvider',
        );
    }

    return context;
};
