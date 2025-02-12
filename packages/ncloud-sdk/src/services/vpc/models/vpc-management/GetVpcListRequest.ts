/**
 * VPC 목록 조회 요청 파라미터
 * @typedef {Object} GetVpcListRequest
 * @property {string} [regionCode] - 조회할 리전 코드 (Optional)
 * @property {string} [vpcStatusCode] - VPC 상태 코드 (Optional, INIT|CREATING|RUN|TERMTING)
 * @property {string} [vpcName] - VPC 이름으로 검색 (Optional)
 * @property {string[]} [vpcNoList] - VPC 번호 목록으로 검색 (Optional)
 */
export interface GetVpcListRequest {
    regionCode: string;
    vpcStatusCode?: string;
    vpcName?: string;
    vpcNoList?: string[];
    responseFormatType?: string;
}
