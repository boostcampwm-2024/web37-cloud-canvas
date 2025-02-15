/**
 * Network ACL Deny-Allow 그룹 삭제 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-networkacl-deletenetworkacldenyallowgroup}
 */
export interface DeleteNetworkAclDenyAllowGroupRequest {
    /**
     * 리전 코드
     * 삭제하려는 Network ACL Deny-Allow 그룹의 리전(Region) 결정
     * @description regionCode는 getRegionList 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * Network ACL Deny-Allow 그룹 번호
     * @description networkAclDenyAllowGroupNo는 getNetworkAclDenyAllowGroupList 액션을 통해 획득 가능
     */
    networkAclDenyAllowGroupNo: string;

    /**
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
}