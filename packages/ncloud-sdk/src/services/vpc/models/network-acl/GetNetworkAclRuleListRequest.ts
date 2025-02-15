/**
 * Network ACL Rule 목록 조회 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-networkacl-getnetworkaclrulelist}
 */
export interface GetNetworkAclRuleListRequest {
    /**
     * 리전 코드
     * Network ACL 목록을 조회하려는 리전(Region) 결정
     * @description regionCode는 getRegionList 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * Network ACL 번호
     * @description getNetworkAclList 액션을 통해 획득 가능
     */
    networkAclNo: string;

    /**
     * Network ACL 규칙 유형 코드
     * Options : INBND | OTBND
     * - INBND: Inbound 규칙
     * - OTBND: Outbound 규칙
     * @description Network ACL의 모든 규칙(기본값)
     */
    networkAclRuleTypeCode?: 'INBND' | 'OTBND';

    /**
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
}