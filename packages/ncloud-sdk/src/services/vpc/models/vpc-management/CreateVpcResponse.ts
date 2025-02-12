import { CommonResponse } from '../CommonResponse';

/**
 * VPC 생성 API 응답
 * @interface CreateVpcResponse
 * @extends {CommonResponse}
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-vpcmanagement-createvpc}
 *
 * @example
 * {
 *   "requestId": "21a29c59-3139-4c23-9f92-10c1fddafef6",
 *   "returnCode": "0",
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "vpcList": [
 *     {
 *       "vpcNo": "1234",
 *       "vpcName": "test-vpc",
 *       "ipv4CidrBlock": "10.0.0.0/16",
 *       "vpcStatus": {
 *         "code": "INIT",
 *         "codeName": "init"
 *       },
 *       "regionCode": "KR",
 *       "createDate": "2020-07-27T17:17:05+0900"
 *     }
 *   ]
 * }
 */
export interface CreateVpcResponse extends CommonResponse {}
