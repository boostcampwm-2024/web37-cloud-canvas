/**
 * Subnet Network ACL 설정 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-networkacl-setsubnetnetworkacl}
 */
export interface SetSubnetNetworkAclRequest {
    /**
     * 리전 코드
     * Network ACL을 설정하려는 Subnet의 리전(Region) 결정
     * @description regionCode는 getRegionList 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * Subnet 번호
     * @description getSubnetList 액션을 통해 획득 가능
     */
    subnetNo: string;

    /**
     * Network ACL 번호
     * @description getNetworkAclList 액션을 통해 획득 가능
     */
    networkAclNo: string;

    /**
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
}