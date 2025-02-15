import { SubnetNoList } from './SubnetNoList';

/**
 * Subnet 목록 조회 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-subnetmanagement-getsubnetlist}
 */
export interface GetSubnetListRequest {
    /**
     * 리전 코드
     * Subnet 목록을 조회하려는 리전(Region) 결정
     * @description regionCode는 getRegionList 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * Subnet 번호 리스트로 목록 조회
     * @description subnetNo는 getSubnetList 액션을 통해 획득 가능
     * @example subnetNoList.1=1234&subnetNoList.2=2345
     */
    subnetNoList?: SubnetNoList;

    /**
     * Subnet 이름으로 목록 조회
     */
    subnetName?: string;

    /**
     * Subnet IP 주소 범위로 목록 조회
     * @example subnet=10.0.0.0/24
     */
    subnet?: string;

    /**
     * Subnet 유형 코드로 목록 조회
     * Options : PUBLIC | PRIVATE
     */
    subnetTypeCode?: 'PUBLIC' | 'PRIVATE';

    /**
     * Subnet 용도 유형 코드로 목록 조회
     * Options : GEN | LOADB | BM | NATGW
     * - GEN: 일반
     * - LOADB: 로드밸런서 전용
     * - BM: 베어메탈 전용
     * - NATGW: NAT Gateway 전용
     */
    usageTypeCode?: 'GEN' | 'LOADB' | 'BM' | 'NATGW';

    /**
     * Network ACL 번호로 Subnet 목록 조회
     * @description networkAclNo는 getNetworkAclList 액션을 통해 획득 가능
     */
    networkAclNo?: string;

    /**
     * 페이징된 결과의 페이지 번호
     * @description pageNo, pageSize를 이용하여 결과값을 페이징 처리
     */
    pageNo?: number;

    /**
     * 페이징 시 보여줄 각 페이지 크기
     * @description pageNo 입력 시 필수
     */
    pageSize?: number;

    /**
     * Subnet 상태 코드로 목록 조회
     * Options : INIT | CREATING | RUN | TERMTING
     */
    subnetStatusCode?: 'INIT' | 'CREATING' | 'RUN' | 'TERMTING';

    /**
     * VPC 번호로 Subnet 목록 조회
     * @description vpcNo는 getVpcList 액션을 통해 획득 가능
     */
    vpcNo?: string;

    /**
     * 존 코드로 Subnet 목록 조회
     * @description zoneCode는 getZoneList 액션을 통해 획득 가능
     */
    zoneCode?: string;

    /**
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
}
