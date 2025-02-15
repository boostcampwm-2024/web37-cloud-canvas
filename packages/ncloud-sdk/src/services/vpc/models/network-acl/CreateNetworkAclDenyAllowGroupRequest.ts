/**
 * Network ACL Deny-Allow 그룹 생성 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-networkacl-createnetworkaclDenyAllowGroup}
 */
export interface CreateNetworkAclDenyAllowGroupRequest {
    /**
     * 리전 코드
     * Network ACL Deny-Allow 그룹을 생성하려는 리전(Region) 결정
     * @description regionCode는 getRegionList 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * Network ACL Deny-Allow 그룹을 생성하려는 VPC 번호
     * @description getVpcList 액션을 통해 획득 가능
     */
    vpcNo: string;

    /**
     * Network ACL Deny-Allow 그룹 이름
     * Min : 3, Max : 30
     * 영문 소문자, 숫자, 특수문자 '-'를 허용하며 영문자로 시작해서 영문자 또는 숫자로 끝나야 함
     * Default : NAVER Cloud Platform이 자동으로 부여
     */
    networkAclDenyAllowGroupName?: string;

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