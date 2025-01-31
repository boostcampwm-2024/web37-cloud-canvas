import { useEffect, useRef } from 'react';

type EventMap = WindowEventMap & SVGElementEventMap & HTMLElementEventMap;

export const useEventListener = <
    T extends EventTarget,
    K extends keyof EventMap,
>(
    target: T | null,
    eventType: K,
    handler: (event: EventMap[K]) => void,
    options?: boolean | AddEventListenerOptions,
) => {
    const handlerRef = useRef(handler);

    /** 최신값 참조 */
    useEffect(() => {
        handlerRef.current = handler;
    }, [handler]);

    useEffect(() => {
        if (!target) return;

        const listener = (event: Event) =>
            handlerRef.current(event as EventMap[K]);

        target.addEventListener(eventType, listener, options);
        return () => {
            target.removeEventListener(eventType, listener);
        };
    }, [target, eventType, options]);
};
