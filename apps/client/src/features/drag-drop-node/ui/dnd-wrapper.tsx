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

    if (droppable) {
        return (
            <Droppable nodeId={children.props.id}>
                <Draggable nodeId={children.props.id}>{children}</Draggable>
            </Droppable>
        );
    }

    return <Draggable nodeId={children.props.id}>{children}</Draggable>;
};
