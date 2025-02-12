/**
 * Subnet 생성 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-subnetmanagement-createsubnet}
 */
export type CreateSubnetRequest = {
    /**
     * 리전 코드
     * Subnet이 생성될 리전(Region) 결정
     * @description regionCode는 getRegionList 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * ZONE 코드
     * Subnet이 생성될 ZONE 결정
     * @description zoneCode는 getZoneList 액션을 통해 획득 가능
     */
    zoneCode: string;

    /**
     * VPC 번호
     * Subnet을 포함할 VPC의 고유 식별 번호
     * @description getVpcList 액션을 통해 획득 가능
     */
    vpcNo: string;

    /**
     * Subnet 이름
     * Min : 3, Max : 30
     * 영문 소문자, 숫자, 특수문자 '-'를 허용하며 영문자로 시작해서 영문자 또는 숫자로 끝나야 함
     * Default : NAVER Cloud Platform이 자동으로 부여
     */
    subnetName?: string;

    /**
     * Subnet의 IP 주소 범위
     * - /16~/28
     * - Private 대역(10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) 사용
     */
    subnet: string;

    /**
     * 네트워크 ACL 번호
     * @description getNetworkAclList 액션을 통해 획득 가능
     */
    networkAclNo: string;

    /**
     * Subnet의 유형 코드
     * Options : PUBLIC | PRIVATE
     * - PUBLIC: 인터넷 게이트웨이 허용
     * - PRIVATE: 인터넷 게이트웨이 비허용
     */
    subnetTypeCode: 'PUBLIC' | 'PRIVATE';

    /**
     * Subnet의 용도 유형 코드
     * Options : GEN | LOADB | BM | NATGW
     * - GEN: 일반
     * - LOADB: 로드밸런서 전용
     * - BM: 베어메탈 전용
     * - NATGW: NAT 게이트웨이
     */
    usageTypeCode?: 'GEN' | 'LOADB' | 'BM' | 'NATGW';

    /**
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
};

