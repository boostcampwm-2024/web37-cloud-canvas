import { CommonResponse } from '../CommonResponse';

/**
 * VPC 상세 정보 조회 API 응답
 * @interface GetVpcDetailResponse
 * @extends {CommonResponse}
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-vpcmanagement-getvpcdetail}
 *
 * @example
 * {
 *   "requestId": "13f37a8e-780f-4f32-9115-503a2026cf6d",
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
export interface GetVpcDetailResponse extends CommonResponse {}
