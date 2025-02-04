import { nanoid } from 'nanoid';

import type { Node } from '@/entities/node/model/node.types';
import type { Resource } from '@/entities/resource/model/resource.types';

import {
    DefaultCloudFunctionSVGSize,
    DefaultContainerSVGSize,
    DefaultServerSVGSize,
    DefaultAutoScalingSVGSize,
} from '@/shared/config/resource-svg';
import type { ResourceType } from '@/shared/types/resource';

export const createNodeFactory = (type: ResourceType): Node => {
    const id = `node-${nanoid()}`;
    const defaultPoint = {
        col: 0,
        row: 0,
    };
    switch (type) {
        case 'server':
            return {
                id,
                point: defaultPoint,
                size: DefaultServerSVGSize,
            };
        case 'container':
            return {
                id,
                point: defaultPoint,
                size: DefaultContainerSVGSize,
                droppable: true,
            };
        case 'cloud-function':
            return {
                id,
                point: defaultPoint,
                size: DefaultCloudFunctionSVGSize,
            };
        case 'auto-scaling':
            return {
                id,
                point: defaultPoint,
                size: DefaultAutoScalingSVGSize,
                droppable: true,
            };
    }
};

export const createResourceFactory = (
    type: ResourceType,
    id: string,
): Resource => {
    switch (type) {
        case 'server':
            return {
                id,
                networks: {
                    region: '',
                    vpc: '',
                    subnet: '',
                    securityGroup: '',
                },
                properties: {
                    type: 'server',
                },
            };

        case 'container':
            return {
                id,
                networks: {
                    region: '',
                    vpc: '',
                    subnet: '',
                    securityGroup: '',
                },
                properties: {
                    type: 'container',
                },
            };
        case 'cloud-function':
            return {
                id,
                networks: {
                    region: '',
                    vpc: '',
                    subnet: '',
                    securityGroup: '',
                },
                properties: {
                    type: 'cloud-function',
                },
            };
        case 'auto-scaling':
            return {
                id,
                networks: {
                    region: '',
                    vpc: '',
                    subnet: '',
                    securityGroup: '',
                },
                properties: {
                    type: 'auto-scaling',
                },
            };
    }
};
