import { GRID_SIZE_2D } from '@/shared/config/canvas';
import { memo } from 'react';
import {
    ISO_TRANSFORM_X_FACTOR,
    ISO_TRANSFORM_Y_FACTOR,
} from '../config/constants';
import { useCanvasState } from '../model/canvas.context';
import { calc3DGridSizeFrom2D } from '../utils/isometric';

interface GridBackgroundProps {
    gridColor?: string;
    size2D?: number;
    gridThickness?: number;
}

export const GridBackground = memo((props: GridBackgroundProps) => {
    const {
        gridColor = '#cbd5e1',
        size2D = GRID_SIZE_2D,
        gridThickness = 0.5,
    } = props;
    const { viewbox, viewMode } = useCanvasState();

    const size3D = calc3DGridSizeFrom2D(
        size2D,
        ISO_TRANSFORM_X_FACTOR,
        ISO_TRANSFORM_Y_FACTOR,
    );

    const gridConfig =
        viewMode === '2d'
            ? {
                  width: size2D,
                  height: size2D,
                  subPath: `M 0 ${size2D / 2} h ${size2D} M ${size2D / 2} 0 v ${size2D}`,
                  mainPath: `M 0 0 h ${size2D} v ${size2D} h ${-size2D} v ${-size2D}`,
              }
            : {
                  width: size3D.width,
                  height: size3D.height,
                  subPath: `M ${size3D.width / 2} 0 l ${size3D.width / 2} ${size3D.height / 2} l ${-size3D.width / 2} ${size3D.height / 2} l ${-size3D.width / 2} ${-size3D.height / 2}  z`,
                  mainPath: `M 0 0 l ${size3D.width} ${size3D.height} M ${size3D.width} 0 l ${-size3D.width} ${size3D.height}`,
              };

    return (
        <g>
            <defs>
                <pattern
                    id="grid"
                    width={gridConfig.width}
                    height={gridConfig.height}
                    patternUnits="userSpaceOnUse"
                >
                    <rect
                        width={gridConfig.width}
                        height={gridConfig.height}
                        fill="transparent" // 배경색을 투명하게 설정
                    />
                    <path
                        id="grid-sub"
                        d={gridConfig.subPath}
                        fill="none"
                        stroke={gridColor}
                        strokeWidth={gridThickness / 2}
                        strokeDasharray={4}
                    />
                    <path
                        id="grid-main"
                        d={gridConfig.mainPath}
                        fill="none"
                        stroke={gridColor}
                        strokeWidth={gridThickness}
                    />
                </pattern>
            </defs>
            <rect
                x={viewbox.x - viewbox.width}
                y={viewbox.y - viewbox.height}
                width={viewbox.width * 3}
                height={viewbox.height * 3}
                fill="url(#grid)"
            />
        </g>
    );
});
