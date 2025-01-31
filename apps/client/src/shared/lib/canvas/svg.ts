import type { CoordPoint } from '@/shared/types/canvas';

const createSvgPoint = (svg: SVGSVGElement, point: CoordPoint): SVGPoint => {
    const svgPoint = svg.createSVGPoint();
    svgPoint.x = point.x;
    svgPoint.y = point.y;
    return svgPoint;
};

const getScreenCTM = (svg: SVGSVGElement): DOMMatrix => {
    const screenCTM = svg.getScreenCTM();
    if (!screenCTM) {
        throw new Error('getScreenCTM: screenCTM이 존재하지 않습니다.');
    }
    return screenCTM;
};

const transformPoint = (point: SVGPoint, matrix: DOMMatrix): CoordPoint => ({
    x: point.matrixTransform(matrix).x,
    y: point.matrixTransform(matrix).y,
});

export const screenToSvgPoint = (
    svg: SVGSVGElement,
    point: CoordPoint,
): CoordPoint => {
    const svgPoint = createSvgPoint(svg, point);
    const screenCTM = getScreenCTM(svg);
    return transformPoint(svgPoint, screenCTM.inverse());
};

export const svgToScreenPoint = (
    svg: SVGSVGElement,
    point: CoordPoint,
): CoordPoint => {
    const svgPoint = createSvgPoint(svg, point);
    const screenCTM = getScreenCTM(svg);
    return transformPoint(svgPoint, screenCTM);
};
