import type { ResourceSVG2DProps } from '@/shared/types/resource';

export const AutoScalingSVG2D = (props: ResourceSVG2DProps) => {
    const { size, ...svgProps } = props;

    return (
        <svg x="0" y="0" overflow="visible">
            <polygon points="0 0, 180 0, 180 90, 0 90" fill="#f5b720"></polygon>
            <polygon
                points="0 0, 180 0, 180 90, 0 90"
                fill="none"
                stroke-width="45"
                stroke="#f5b720"
                opacity="1"
            ></polygon>
            <g cursor="nwse-resize">
                <polygon
                    points="0 0, -45 0, -45 -45, -90 45, -45 135, -45 90, 0 90"
                    fill="#f5b720"
                ></polygon>
                <polygon
                    points="180 0, 225 0, 225 -45, 270 45, 225 135, 225 90, 180 90"
                    fill="#f5b720"
                ></polygon>
            </g>
        </svg>
    );
};
