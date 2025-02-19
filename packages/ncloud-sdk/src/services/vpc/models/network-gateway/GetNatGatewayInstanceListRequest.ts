/**
 * NAT Gateway 인스턴스 목록 조회 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-natgateway-getnatgatewayinstancelist}
 */
export interface GetNatGatewayInstanceListRequest {
    /**
     * 리전 코드
     * NAT Gateway 인스턴스 목록을 조회하려는 리전(Region) 결정
     * @description regionCode는 getRegionList 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * ZONE 코드
     * NAT Gateway 인스턴스 목록을 조회하려는 존(Zone) 결정
     * @description zoneCode는 getZoneList 액션을 통해 획득 가능
     */
    zoneCode?: string;

    /**
     * NAT Gateway 인스턴스 번호 리스트
     * @description getNatGatewayInstanceList 액션을 통해 획득 가능
     * @example natGatewayInstanceNoList.1=1234&natGatewayInstanceNoList.2=2345
     */
    natGatewayInstanceNoList?: string[];

    /**
     * NAT Gateway에 할당된 공인 IP 주소
     */
    publicIp?: string;

    /**
     * VPC 이름
     */
    vpcName?: string;

    /**
     * NAT Gateway 이름
     */
    natGatewayName?: string;

    /**
     * NAT Gateway 인스턴스 상태 코드
     * Options: INIT | RUN | TERMTING
     */
    natGatewayInstanceStatusCode?: 'INIT' | 'RUN' | 'TERMTING';

    /**
     * 페이지 번호
     * @description pageNo, pageSize를 이용하여 결과값을 페이징 처리
     */
    pageNo?: number;

    /**
     * 페이지 크기
     * @description pageNo 입력 시 필수
     */
    pageSize?: number;

    /**
     * Subnet 이름
     */
    subnetName?: string;

    /**
     * 사설 IP 주소
     */
    privateIp?: string;

    /**
     * NAT Gateway 유형 코드
     * PRVT: Private NAT Gateway
     * PBLIP: Public NAT Gateway
     */
    natGatewayTypeCode?: 'PRVT' | 'PBLIP';

    /**
     * Subnet 번호
     */
    subnetNo?: string;

    /**
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
}