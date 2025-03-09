import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

export const applyCursorStyle = (selector: string, style: string) => {
    const element = document.querySelector(selector);
    (element as HTMLElement)?.style.setProperty('cursor', style);
};
