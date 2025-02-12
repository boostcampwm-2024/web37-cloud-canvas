import { CommonResponse } from '../CommonResponse';

/**
 * VPC 삭제 API 응답
 * @interface DeleteVpcResponse
 * @extends {CommonResponse}
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-vpcmanagement-deletevpc}
 *
 * @example
 * {
 *   "requestId": "f6d32d67-ab92-4096-b240-ed2e96d8d265",
 *   "returnCode": "0",
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "vpcList": [
 *     {
 *       "vpcNo": "1234",
 *       "vpcName": "test-vpc",
 *       "ipv4CidrBlock": "10.0.0.0/16",
 *       "vpcStatus": {
 *         "code": "TERMTING",
 *         "codeName": "terminating"
 *       },
 *       "regionCode": "KR",
 *       "createDate": "2020-07-27T17:17:05+0900"
 *     }
 *   ]
 * }
 */
export interface DeleteVpcResponse extends CommonResponse {}
