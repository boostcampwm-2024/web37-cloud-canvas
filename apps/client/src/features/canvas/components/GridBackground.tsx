import { memo, useMemo } from 'react';
import { useCanvasState } from '../model/canvas.context';

interface GridBackgroundProps {
    gridColor?: string;
    gridSize?: number;
    gridThickness?: number;
}

export const GridBackground = memo((props: GridBackgroundProps) => {
    const { gridColor = '#cbd5e1', gridSize = 50, gridThickness = 0.5 } = props;
    const { viewbox, viewMode } = useCanvasState();

    const gridConfig = useMemo(() => {
        return viewMode === '2d'
            ? {
                  width: gridSize,
                  height: gridSize,
                  subPath: `M 0 ${gridSize / 2} h ${gridSize} M ${gridSize / 2} 0 v ${gridSize}`,
                  mainPath: `M 0 0 h ${gridSize} v ${gridSize} h ${-gridSize} v ${-gridSize}`,
              }
            : {
                  width: gridSize * 2, // Isometric Grid Width
                  height: gridSize, // Isometric Grid Height
                  subPath: `M ${gridSize} 0 l ${gridSize} ${gridSize / 2} l ${-gridSize} ${gridSize / 2} l ${-gridSize} ${-gridSize / 2}  z`,
                  mainPath: `M 0 0 l ${gridSize * 2} ${gridSize} M ${gridSize * 2} 0 l ${-gridSize * 2} ${gridSize}`,
              };
    }, [gridSize, viewMode]);

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
