'use client';

import Link from 'next/link';

import { SwitchViewMode } from '@/features/canvas/ui/switch-viewmode';

import { cn } from '@/shared/shadcn/lib/utils';

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
            <SwitchViewMode />
        </header>
    );
};
