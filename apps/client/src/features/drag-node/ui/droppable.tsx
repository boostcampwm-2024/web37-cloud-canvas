import { ReactElement } from 'react';
import { useDragNodeStore } from '../model/drag-node.store';

interface DroppableProps {
    children: ReactElement<{ id: string }>;
}

export const Droppable = (props: DroppableProps) => {
    const { children } = props;

    const { setHoverDropZoneId } = useDragNodeStore();

    const handleMouseEnter = (event: React.MouseEvent) => {
        setHoverDropZoneId(children.props.id);
    };

    const handleMouseLeave = (event: React.MouseEvent) => {
        setHoverDropZoneId(null);
    };

    return (
        <g onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
        </g>
    );
};
