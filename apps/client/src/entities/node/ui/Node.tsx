import { ReactNode, SVGProps } from 'react';

interface NodeProps extends SVGProps<SVGGElement> {
    children: ReactNode;
}
export const Node = (props: NodeProps) => {
    const { children, ...rest } = props;
    return <g {...rest}>{children}</g>;
};
