/**
 * VPC 생성 요청 파라미터
 * @typedef {Object} CreateVpcRequest
 * @property {string} [regionCode] - VPC를 생성할 리전 코드 (Optional)
 * @property {string} [vpcName] - VPC 이름 (Optional, 3~30자 영문 소문자/숫자/'-')
 * @property {string} ipv4CidrBlock - VPC의 사설 IPv4 주소 범위 (Required)
 */
export interface CreateVpcRequest {
    regionCode: string;
    vpcName: string;
    ipv4CidrBlock: string;
    responseFormatType?: string;
}
