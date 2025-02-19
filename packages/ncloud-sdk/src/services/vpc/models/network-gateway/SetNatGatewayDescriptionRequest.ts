/**
 * NAT Gateway 인스턴스 설명 수정 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-natgateway-setnatgatewaydescription}
 */
export interface SetNatGatewayDescriptionRequest {
    /**
     * 리전 코드
     * 설명을 수정하려는 NAT Gateway 인스턴스의 리전(Region) 결정
     * @description regionCode는 getRegionList 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * NAT Gateway 인스턴스 번호
     * @description getNatGatewayInstanceList 액션을 통해 획득 가능
     */
    natGatewayInstanceNo: string;

    /**
     * NAT Gateway 설명
     * Min : 0, Max : 1000 Bytes
     */
    natGatewayDescription?: string;

    /**
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
}