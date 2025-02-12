/**
 * VPC Peering 인스턴스 삭제 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-vpcpeering-deletevpcpeeringinstance}
 */
export type DeleteVpcPeeringInstanceRequest = {
    /**
     * 리전 코드
     * 삭제하려는 VPC Peering 인스턴스의 리전(Region) 결정
     * @description regionCode는 getRegionList 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * VPC Peering 인스턴스 번호
     * @description getVpcPeeringInstanceList 액션을 통해 획득 가능
     */
    vpcPeeringInstanceNo: string;

    /**
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
};