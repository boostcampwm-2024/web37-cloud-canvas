import { beforeEach, describe, test, vi } from 'vitest';

import { Zoom } from '../model/zoom.model';

// Mocks
describe('useZoom', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('should zoom out correctly', () => {
        const viewbox = { x: 0, y: 0, width: 100, height: 100 };
        const point = { x: 50, y: 50 };
        const zoomDelta = 1.1;

        const zoomedViewbox = Zoom.calcZoomedViewbox(viewbox, point, zoomDelta);

        expect(zoomedViewbox).toEqual({
            x: expect.closeTo(-5),
            y: expect.closeTo(-5),
            width: expect.closeTo(110),
            height: expect.closeTo(110),
        });
    });

    test('should zoom out correctly', () => {
        const viewbox = { x: 0, y: 0, width: 100, height: 100 };
        const point = { x: 50, y: 50 };
        const zoomDelta = 0.9;

        const zoomedViewbox = Zoom.calcZoomedViewbox(viewbox, point, zoomDelta);

        expect(zoomedViewbox).toEqual({
            x: expect.closeTo(5),
            y: expect.closeTo(5),
            width: expect.closeTo(90),
            height: expect.closeTo(90),
        });
    });
});
