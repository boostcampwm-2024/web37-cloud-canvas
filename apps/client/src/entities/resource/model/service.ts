import type { ResourceType } from './types';

export class Resource {
    static create(type: ResourceType) {
        switch (type) {
            case 'server': {
                return {
                    type: 'server',
                    networks: {
                        region: '',
                        vpc: '',
                        subnet: '',
                        securityGroup: '',
                    },
                    properties: {},
                };
            }
        }

        throw new Error('Resource type is not supported');
    }
}
