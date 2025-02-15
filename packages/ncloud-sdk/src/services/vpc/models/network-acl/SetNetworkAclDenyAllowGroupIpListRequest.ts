/**
 * Network ACL Deny-Allow 그룹 IP 리스트 설정 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-networkacl-setnetworkacldentyallowgroupiplist}
 */
export interface SetNetworkAclDenyAllowGroupIpListRequest {
    /**
     * 리전 코드
     * IP 리스트를 설정하려는 Network ACL Deny-Allow 그룹의 리전(Region) 결정
     * @description regionCode는 getRegionList 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * Network ACL Deny-Allow 그룹 번호
     * @description getNetworkAclDenyAllowGroupList 액션을 통해 획득 가능
     */
    networkAclDenyAllowGroupNo: string;

    /**
     * Network ACL Deny-Allow 그룹에 등록할 IP 주소 리스트
     * @description 최대 100개의 IP를 등록할 수 있으며 중복된 IP 주소는 허용하지 않음
     * @description 동일한 VPC 내에서는 중복된 IP 주소를 8개까지 등록할 수 있음
     * @example ipList.1=10.0.0.1&ipList.2=10.0.0.2
     */
    ipList?: string[];

    /**
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
}