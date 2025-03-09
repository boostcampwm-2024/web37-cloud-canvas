import type { LucideIcon } from 'lucide-react';

import { cn } from '@/shared/lib/shadcn/utils';

interface ActionButtonProps {
    icon: LucideIcon;
    label: string;
    y?: number;
    onAction?: (e: React.MouseEvent) => void;
}

export const ActionButton = (props: ActionButtonProps) => {
    const { icon: Icon, label, y = 0, onAction } = props;

    const iconProps = {
        size: 20,
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        e.stopPropagation();
        onAction?.(e);
    };

    return (
        <g
            transform={`translate(0, ${y})`}
            className="pointer-events-auto cursor-pointer"
            role="button"
            aria-label={label}
            onMouseDown={handleMouseDown}
        >
            <circle
                r="20"
                className="fill-black  stroke-black hover:fill-black/80 "
                strokeWidth="1"
            />
            <g
                transform={`translate(${-iconProps.size / 2}, ${-iconProps.size / 2})`}
                className="stroke-white"
            >
                <Icon {...iconProps} className={cn('stroke-white')} />
            </g>
        </g>
    );
};
