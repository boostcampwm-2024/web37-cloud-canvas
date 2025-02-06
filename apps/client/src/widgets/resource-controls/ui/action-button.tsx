import type { LucideIcon } from 'lucide-react';

import { cn } from '@/shared/lib/shadcn/utils';

interface ActionButtonProps {
    icon: LucideIcon;
    label: string;
    y?: number;
    onClick?: (e: React.MouseEvent) => void;
}

export const ActionButton = (props: ActionButtonProps) => {
    const { icon: Icon, label, y = 0, onClick = () => {} } = props;

    const iconProps = {
        size: 20,
    };
    return (
        <g
            transform={`translate(0, ${y})`}
            className="cursor-pointer"
            onClick={onClick}
            role="button"
            aria-label={label}
        >
            <circle
                r="20"
                className="fill-black stroke-black  hover:fill-black/80"
                strokeWidth="1"
            />
            <g
                transform={`translate(${-iconProps.size / 2}, ${-iconProps.size / 2})`}
                className="pointer-events-none stroke-white"
            >
                <Icon {...iconProps} className={cn('stroke-white')} />
            </g>
        </g>
    );
};
