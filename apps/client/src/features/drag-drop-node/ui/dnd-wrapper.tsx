import type { ReactElement } from 'react';

import type { NodeProps } from '@/entities/node/ui/Node';

import { Draggable } from './draggable';
import { Droppable } from './droppable';

interface DnDWrapperProps {
    children: ReactElement<NodeProps>;
    droppable?: boolean;
}
export const DnDWrapper = (props: DnDWrapperProps) => {
    const { children, droppable } = props;

    const id = children.props.id;
    if (droppable) {
        return (
            <Droppable nodeId={id}>
                <Draggable nodeId={id}>{children}</Draggable>
            </Droppable>
        );
    }

    return <Draggable nodeId={id}>{children}</Draggable>;
};
