import { useEffect, useMemo, useRef, useState } from 'react';

import type { Group as GroupType } from '@/entities/canvas/model/group.types';

import { GRID_SIZE_2D, IsoMatrixDOM } from '@/shared/canvas/constants';
import { gridToCoordPosition } from '@/shared/canvas/lib/position';
import type { ViewMode } from '@/shared/canvas/types';

import { getGridBounds } from '../lib/group';
import { useCanvasStore } from '../model/store';

interface GroupProps {
    group: GroupType;
    viewMode: ViewMode;
}

const TEXTBOX_PADDING = 10;
const FONT_SIZE = 30;

export const Group = (props: GroupProps) => {
    const { group, viewMode } = props;
    const { getNodes } = useCanvasStore.use.nodeActions();

    const transform = viewMode === '3d' ? IsoMatrixDOM?.toString() : undefined;

    const bounds = useMemo(() => {
        const childNodes = getNodes(group.childNodeIds);
        return getGridBounds(childNodes, viewMode, 1);
    }, [getNodes, group.childNodeIds, viewMode]);

    //INFO: transform을 통해서 변경되는 svg는 3d도 동일하게 2d 포지션
    const position = gridToCoordPosition(
        { col: bounds.col, row: bounds.row },
        '2d',
    );

    const textRef = useRef<SVGTextElement>(null);
    const [textBox, setTextBox] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (textRef.current) {
            const bbox = textRef.current.getBBox();
            setTextBox({
                width: bbox.width + TEXTBOX_PADDING * 2,
                height: bbox.height + TEXTBOX_PADDING * 2,
            });
        }
    }, [group.properties.title]);

    return (
        <g id={group.id} transform={transform}>
            <g>
                <rect
                    x={position.x}
                    y={position.y - textBox.height}
                    width={textBox.width}
                    height={textBox.height}
                    fill="white"
                    stroke="green"
                    strokeWidth="3"
                />
                <text
                    ref={textRef}
                    x={position.x + TEXTBOX_PADDING}
                    y={position.y - textBox.height / 2}
                    dominantBaseline="middle"
                    fontSize={FONT_SIZE}
                >
                    {group.properties.title}
                </text>
            </g>
            <rect
                x={position.x}
                y={position.y}
                width={bounds.cols * GRID_SIZE_2D}
                height={bounds.rows * GRID_SIZE_2D}
                fill="none"
                stroke="green"
                strokeWidth="3"
            />
        </g>
    );
};
