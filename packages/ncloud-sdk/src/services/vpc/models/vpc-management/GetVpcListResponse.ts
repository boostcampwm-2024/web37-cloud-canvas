import { CommonResponse } from '../CommonResponse';

/**
 * VPC 목록 조회 API 응답
 * @interface GetVpcListResponse
 * @extends {CommonResponse}
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-vpcmanagement-getvpclist}
 *
 * @example
 * {
 *   "requestId": "9b37ea3e-3ca9-462f-abad-6e23a35fcb76",
 *   "returnCode": "0",
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "vpcList": [
 *     {
 *       "vpcNo": "1234",
 *       "vpcName": "test-vpc",
 *       "ipv4CidrBlock": "10.0.0.0/16",
 *       "vpcStatus": {
 *         "code": "RUN",
 *         "codeName": "run"
 *       },
 *       "regionCode": "KR",
 *       "createDate": "2020-07-16T22:23:50+0900"
 *     }
 *   ]
 * }
 */
export interface GetVpcListResponse extends CommonResponse {}
