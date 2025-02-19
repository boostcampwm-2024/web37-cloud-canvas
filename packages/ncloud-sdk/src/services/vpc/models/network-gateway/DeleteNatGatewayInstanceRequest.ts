/**
 * NAT Gateway 인스턴스 삭제 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-natgateway-deletenatgatewayinstance}
 */
export interface DeleteNatGatewayInstanceRequest {
    /**
     * 리전 코드
     * 삭제하려는 NAT Gateway의 리전(Region) 결정
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
     * 공인 IP Instance 삭제 여부
     * true: Public NAT Gateway에 할당된 공인 IP Instance를 함께 삭제
     * false: 공인 IP Instance는 그대로 유지
     * Default : true
     */
    returnPublicIpInstance?: boolean;

    /**
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
}