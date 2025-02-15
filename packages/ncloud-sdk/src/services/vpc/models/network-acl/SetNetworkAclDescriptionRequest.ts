/**
 * Network ACL 설명 수정 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-networkacl-setnetworkacldescription}
 */
export interface SetNetworkAclDescriptionRequest {
    /**
     * 리전 코드
     * 설명을 수정하려는 Network ACL의 리전(Region) 결정
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
     * Network ACL 설명
     * Min : 0, Max : 1000 Bytes
     */
    networkAclDescription?: string;

    /**
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
}