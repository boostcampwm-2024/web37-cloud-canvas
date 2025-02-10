import { ApiKeyCredentials } from './types';
import { VpcApi } from './VpcApi';
import * as process from 'node:process';
import * as dotenv from 'dotenv';

dotenv.config();

async function main() {
    if (!process.env.NCLOUD_ACCESS_KEY || !process.env.NCLOUD_SECRET_KEY) {
        throw new Error('API Key not found');
    }

    const apiKey: ApiKeyCredentials = {
        accessKey: process.env.NCLOUD_ACCESS_KEY,
        secretKey: process.env.NCLOUD_SECRET_KEY,
    };

    const vpcApi = new VpcApi(apiKey);

    try {
        const result = await vpcApi.createVpc({
            regionCode: 'KR',
            vpcName: `test-vpc-${Date.now()}`,
            ipv4CidrBlock: '10.0.0.0/16',
        });
        console.log('VPC Created:', result);
    } catch (error) {
        console.error('Failed to create VPC:', error);
    }
}

if (require.main === module) {
    main().catch(console.error);
}
