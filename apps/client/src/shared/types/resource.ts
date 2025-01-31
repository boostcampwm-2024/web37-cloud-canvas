import { SVGProps } from 'react';
import { ViewMode } from './canvas';

export type ResourceType = 'server';

export interface ResourceSVGProps extends SVGProps<SVGSVGElement> {
    viewMode: ViewMode;
}
