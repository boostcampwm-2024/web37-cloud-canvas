/**
 * VPC 삭제 요청 파라미터
 * @typedef {Object} DeleteVpcRequest
 * @property {string} [regionCode] - 삭제할 VPC의 리전 코드 (Optional)
 * @property {string} vpcNo - 삭제할 VPC 번호 (Required)
 */
export interface DeleteVpcRequest {
    regionCode: string;
    vpcNo: string;
    responseFormatType: string;
}
