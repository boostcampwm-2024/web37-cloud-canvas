import type { CoordPosition } from '../types';

const getScreenCTM = (svg: SVGSVGElement): DOMMatrix => {
    const screenCTM = svg.getScreenCTM();
    if (!screenCTM) {
        throw new Error('getScreenCTM: screenCTM이 존재하지 않습니다.');
    }
    return screenCTM;
};

const createSvgPosition = (svg: SVGSVGElement, position: CoordPosition) => {
    const svgPosition = svg.createSVGPoint();
    svgPosition.x = position.x;
    svgPosition.y = position.y;
    return svgPosition;
};

const transformPoint = (position: SVGPoint, matrix: DOMMatrix) => ({
    x: position.matrixTransform(matrix).x,
    y: position.matrixTransform(matrix).y,
});

export const screenToSvgPosition = (
    svg: SVGSVGElement,
    position: CoordPosition,
) => {
    const svgPosition = createSvgPosition(svg, position);
    const screenCTM = getScreenCTM(svg);
    return transformPoint(svgPosition, screenCTM.inverse());
};
