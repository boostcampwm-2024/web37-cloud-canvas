/**
 * VPC 상세 정보 조회 요청 파라미터
 * @typedef {Object} GetVpcDetailRequest
 * @property {string} [regionCode] - 조회할 리전 코드 (Optional)
 * @property {string} vpcNo - 조회할 VPC 번호 (Required)
 */
export interface GetVpcDetailRequest {
    regionCode: string;
    vpcNo: string;
    responseFormatType?: string;
}
