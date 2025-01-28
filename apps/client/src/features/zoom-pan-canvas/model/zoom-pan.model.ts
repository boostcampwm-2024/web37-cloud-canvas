import type { Viewbox } from '@/entities/canvas/model/canvas.types';

import type { Point } from '@/shared/types/canvas';

export class Zoom {
    static readonly SCALE_STEP = 0.2;
    static readonly MIN_ZOOM = 0.1;
    static readonly MAX_ZOOM = 8;

    static validateZoomFactor(zoomFactor: number): boolean {
        if (zoomFactor < 1 && zoomFactor <= this.MIN_ZOOM) return false;
        if (zoomFactor > 1 && zoomFactor >= this.MAX_ZOOM) return false;

        return true;
    }

    static calcZoomFactor(currentZoom: number, zoomDelta: number): number {
        const newZoom = currentZoom * zoomDelta;
        return Math.min(Math.max(newZoom, this.MIN_ZOOM), this.MAX_ZOOM);
    }

    static calcZoomedViewbox(
        viewbox: Viewbox,
        point: Point,
        zoomDelta: number,
    ): Viewbox {
        return {
            x: viewbox.x + (point.x - viewbox.x) * (1 - zoomDelta),
            y: viewbox.y + (point.y - viewbox.y) * (1 - zoomDelta),
            width: viewbox.width * zoomDelta,
            height: viewbox.height * zoomDelta,
        };
    }

    static zoom(viewbox: Viewbox, point: Point, zoomDelta: number): Viewbox {
        return this.calcZoomedViewbox(viewbox, point, zoomDelta);
    }
}
