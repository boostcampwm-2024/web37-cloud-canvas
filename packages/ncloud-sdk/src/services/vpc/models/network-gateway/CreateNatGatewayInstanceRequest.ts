/**
 * NAT Gateway 인스턴스 생성 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-natgateway-createnatgatewayinstance}
 */
export interface CreateNatGatewayInstanceRequest {
    /**
     * 리전 코드
     * NAT Gateway 인스턴스를 생성하려는 리전(Region) 결정
     * @description regionCode는 getRegionList 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * ZONE 코드
     * NAT Gateway 인스턴스를 생성하려는 존(Zone) 결정
     * @description zoneCode는 getZoneList 액션을 통해 획득 가능
     */
    zoneCode: string;

    /**
     * VPC 번호
     * @description getVpcList 액션을 통해 획득 가능
     */
    vpcNo: string;

    /**
     * NAT Gateway 이름
     * Min : 3, Max : 30
     * 영문 소문자, 숫자, 특수문자 '-'를 허용하며 영문자로 시작해서 영문자 또는 숫자로 끝나야 함
     * Default : NAVER Cloud Platform이 자동으로 부여
     */
    natGatewayName?: string;

    /**
     * NAT Gateway 설명
     * Min : 0, Max : 1000 Bytes
     */
    natGatewayDescription?: string;

    /**
     * 공인 IP Instance 번호
     * Subnet이 PRIVATE 타입인 경우 이 파라미터는 무시됨
     * Subnet이 PUBLIC 타입인 경우:
     * - publicIpInstanceNo가 NULL이면 공인 IP가 자동으로 생성됨
     * - publicIpInstanceNo가 NOT-NULL이면 지정된 공인 IP가 할당됨
     */
    publicIpInstanceNo?: string;

    /**
     * 사설 IP 주소
     * Subnet이 PRIVATE 타입인 경우 이 파라미터는 무시됨
     * Subnet이 PUBLIC 타입인 경우:
     * - privateIp가 NULL이면 공인 IP가 자동으로 할당됨
     * - privateIp가 NOT-NULL이면 지정된 공인 IP가 할당됨
     */
    privateIp?: string;

    /**
     * Subnet 번호
     * subnetNo가 NULL이면 PUBLIC 타입의 NAT Gateway Subnet에 생성됨
     * subnetNo가 NOT-NULL이면 NAT Gateway Subnet의 subnetTypeCode에 따라 NAT Gateway가 생성됨
     */
    subnetNo?: string;

    /**
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
}