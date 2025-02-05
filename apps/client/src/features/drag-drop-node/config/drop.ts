import type { DropLayoutType } from '@/shared/types/resource';

export interface DropOptions {
    accepts: string[];
    layoutType: DropLayoutType;
    padding: number;
}
export const DROP_OPTIONS: Record<string, DropOptions> = {
    container: {
        accepts: ['server'],
        layoutType: 'square',
        padding: 1,
    },
    'auto-scaling': {
        accepts: ['server'],
        layoutType: 'horizontal',
        padding: 0.5,
    },
};
