import {
    GRID_SIZE_2D,
    GRID_HEIGHT_3D,
    GRID_WIDTH_3D,
} from '@/shared/config/canvas/constants';

import { useCanvasStore } from '../model/canvas.store';

export const GridBackground = () => {
    const { viewbox, viewMode } = useCanvasStore();

    const gridConfig =
        viewMode === '2d'
            ? {
                  width: GRID_SIZE_2D,
                  height: GRID_SIZE_2D,
                  subPath: `M 0 ${GRID_SIZE_2D / 2} h ${GRID_SIZE_2D} M ${GRID_SIZE_2D / 2} 0 v ${GRID_SIZE_2D}`,
                  mainPath: `M 0 0 h ${GRID_SIZE_2D} v ${GRID_SIZE_2D} h ${-GRID_SIZE_2D} v ${-GRID_SIZE_2D}`,
              }
            : {
                  width: GRID_WIDTH_3D,
                  height: GRID_HEIGHT_3D,
                  subPath: `M ${GRID_WIDTH_3D / 2} 0 l ${GRID_WIDTH_3D / 2} ${GRID_HEIGHT_3D / 2} l ${-GRID_WIDTH_3D / 2} ${GRID_HEIGHT_3D / 2} l ${-GRID_WIDTH_3D / 2} ${-GRID_HEIGHT_3D / 2}  z`,
                  mainPath: `M 0 0 l ${GRID_WIDTH_3D} ${GRID_HEIGHT_3D} M ${GRID_WIDTH_3D} 0 l ${-GRID_WIDTH_3D} ${GRID_HEIGHT_3D}`,
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
                        fill="#f8fafc"
                    />
                    <path
                        id="grid-sub"
                        d={gridConfig.subPath}
                        fill="none"
                        stroke="#cbd5e1"
                        strokeWidth="0.5"
                        strokeDasharray={4}
                    />
                    <path
                        id="grid-main"
                        d={gridConfig.mainPath}
                        fill="none"
                        stroke="#64748b"
                        strokeWidth="0.8"
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
};
