import { GRID_HEIGHT_3D, GRID_WIDTH_3D } from '@/shared/config/canvas';
import { cn } from '@/shared/lib/shadcn/utils';
import type { ResourceSVG3DProps } from '@/shared/types/resource';

export const CloudFunctionSVG3D = (props: ResourceSVG3DProps) => {
    const { size, className, ...svgProps } = props;

    const width = GRID_WIDTH_3D * size.cols;
    const height = GRID_HEIGHT_3D * size.rows;

    return (
        <svg
            width={width}
            height={height}
            x={364}
            y={-136}
            className={cn('overflow-visible', className)}
            {...svgProps}
        >
            <path
                fill="#3c3c3c"
                d="M-411.594 145.123v18.088l31.33 18.089h31.33l31.33-18.089v-18.088l-31.33-18.089h-31.33z"
                fillRule="evenodd"
            ></path>
            <path
                fill="#090909"
                d="m-348.934 181.3 31.33-18.089V181.3l-31.33 18.088z"
                fillRule="evenodd"
            ></path>
            <path
                fill="#232323"
                d="M-380.264 181.3h31.33v18.088h-31.33zm-31.33-18.089V181.3l31.33 18.088V181.3z"
                fillRule="evenodd"
            ></path>
            <path
                fill="none"
                stroke="#000"
                d="m-411.594 163.211 31.33 18.089h31.33l31.33-18.089m-62.66 18.089v18.088m31.33-18.088v18.088"
                strokeWidth="1.005"
            ></path>
            <path
                fill="none"
                stroke="#000000"
                d="M-411.594 145.123V181.3l31.33 18.088h31.33l31.33-18.088v-36.177l-31.33-18.089h-31.33z"
                strokeWidth="2.01"
            ></path>
            <path
                fill="#3c3c3c"
                d="M-411.594 125.588v18.088l31.33 18.089h31.33l31.33-18.089v-18.088l-31.33-18.089h-31.33z"
                fillRule="evenodd"
            ></path>
            <path
                fill="#090909"
                d="m-348.934 161.765 31.33-18.089v18.089l-31.33 18.088z"
                fillRule="evenodd"
            ></path>
            <path
                fill="#232323"
                d="M-380.264 161.765h31.33v18.088h-31.33zm-31.33-18.089v18.089l31.33 18.088v-18.088z"
                fillRule="evenodd"
            ></path>
            <path
                fill="none"
                stroke="#000"
                d="m-411.594 143.676 31.33 18.089h31.33l31.33-18.089m-62.66 18.089v18.088m31.33-18.088v18.088"
                strokeWidth="1.005"
            ></path>
            <path
                fill="none"
                stroke="#000000"
                d="M-411.594 125.588v36.177l31.33 18.088h31.33l31.33-18.088v-36.177l-31.33-18.089h-31.33z"
                strokeWidth="2.01"
            ></path>
            <path
                fill="#3c3c3c"
                d="M-411.594 106.05v18.09l31.33 18.088h31.33l31.33-18.089v-18.088l-31.33-18.089h-31.33z"
                fillRule="evenodd"
            ></path>
            <path
                fill="#090909"
                d="m-348.934 142.228 31.33-18.089v18.089l-31.33 18.088z"
                fillRule="evenodd"
            ></path>
            <path
                fill="#232323"
                d="M-380.264 142.228h31.33v18.088h-31.33zm-31.33-18.088v18.088l31.33 18.088v-18.088z"
                fillRule="evenodd"
            ></path>
            <path
                fill="none"
                stroke="#000"
                d="m-411.594 124.14 31.33 18.088h31.33l31.33-18.089m-62.66 18.089v18.088m31.33-18.088v18.088"
                strokeWidth="1.005"
            ></path>
            <path
                fill="none"
                stroke="#000000"
                d="M-411.594 106.05v36.178l31.33 18.088h31.33l31.33-18.088V106.05l-31.33-18.089h-31.33z"
                strokeWidth="2.01"
            ></path>
            <circle
                cx="-95.405"
                cy="325.596"
                r="21.926"
                fill="#f4b934"
                transform="scale(1.22475 .7071) rotate(45)"
            ></circle>
            <g>
                <path
                    fill="#ffffff"
                    d="m-127.434 301.586-.302-.818q-.136-.375-.321-.512-.18-.136-.638-.136h-.545v-1.144h1.007q.887 0 1.364.375.482.375.813 1.26l2.23 5.94h-1.744l-1.085-2.862-1.144 2.862h-1.743z"
                    transform="matrix(3.51718 2.03071 -3.51718 2.03071 1146.824 -241.7)"
                    fontFamily="Droid Serif"
                    fontSize="9.971"
                ></path>
            </g>
        </svg>
    );
};
