'use client';

import Link from 'next/link';

import { SwitchViewModeButton } from '@/features/switch-view-mode/ui/switch-view-mode-button';

import { cn } from '@/shared/lib/shadcn/utils';

export const Header = () => {
    return (
        <header
            className={cn(
                'absolute',
                'top-0 left-0 z-10',
                'flex items-center justify-between',
                'h-[60px] w-full px-4',
                'backdrop-blur-sm',
            )}
        >
            <Link href="/" className="flex items-center space-x-2">
                <span className="inline-block text-xl font-bold">
                    Cloud Canvas
                </span>
            </Link>
            <div className="flex items-center">
                <SwitchViewModeButton />
            </div>
        </header>
    );
};
