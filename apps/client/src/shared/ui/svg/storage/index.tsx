import type { ResourceSVGProps } from '@/shared/types/resource';

import { ObjectStorageSVG2D } from './object-storage-svg-2d';
import { ObjectStorageSVG3D } from './object-storage-svg-3d';

export const ObjectStorageSVG = (props: ResourceSVGProps) => {
    const { size, viewMode } = props;

    return viewMode === '3d' ? (
        <ObjectStorageSVG3D size={size[viewMode]} />
    ) : (
        <ObjectStorageSVG2D size={size[viewMode]} />
    );
};
