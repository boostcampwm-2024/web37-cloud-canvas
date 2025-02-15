/**
 * Network ACL Deny-Allow 그룹 설명 수정 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-networkacl-setnetworkacldentyallowgroupdescription}
 */
export interface SetNetworkAclDenyAllowGroupDescriptionRequest {
    /**
     * 리전 코드
     * 설명을 수정하려는 Network ACL Deny-Allow 그룹의 리전(Region) 결정
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
     * Network ACL Deny-Allow 그룹 설명
     * Min : 0, Max : 1000 Bytes
     */
    networkAclDenyAllowGroupDescription?: string;

    /**
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
}
