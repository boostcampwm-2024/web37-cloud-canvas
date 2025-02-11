/**
 * 네트워크 인터페이스 생성 요청 파라미터
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-networkinterface-createnetworkinterface}
 */
export type CreateNetworkInterfaceRequest = {
    /**
     * 리전 코드
     * 네트워크 인터페이스가 생성될 리전(Region) 결정 가능
     * regionCode는 {@link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist} 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * VPC 번호
     * 네트워크 인터페이스가 생성될 VPC 결정
     * vpcNo는 {@link https://api.ncloud-docs.com/docs/networking-vpc-vpcmanagement-getvpclist} 액션을 통해 획득 가능
     */
    vpcNo: string;

    /**
     * Subnet 번호
     * 네트워크 인터페이스가 생성될 Subnet 결정
     * subnetNo는 {@link https://api.ncloud-docs.com/docs/networking-vpc-subnetmanagement-getsubnetlist} 액션을 통해 획득 가능
     */
    subnetNo: string;

    /**
     * 생성할 네트워크 인터페이스 이름
     * Min : 3, Max : 30
     * 소문자, 숫자, "-"의 특수문자만 허용하며 알파벳 문자로 시작해야 함
     * 영어 또는 숫자로 끝나야 함
     * Default : NAVER Cloud Platform가 자동으로 부여
     */
    networkInterfaceName?: string;

    /**
     * 네트워크 인터페이스에 적용할 ACG 번호 리스트
     * 최대 3개의 ACG 적용 가능
     * accessControlGroupNo는 {@link https://api.ncloud-docs.com/docs/compute-vserver-acg-getaccesscontrolgrouplist} 액션을 통해 획득 가능
     */
    accessControlGroupNoList: string[];

    /**
     * 네트워크 인터페이스를 할당할 서버 인스턴스 번호
     * 생성하는 네트워크 인터페이스가 Private Subnet의 네트워크 인터페이스인 경우에만 서버에 할당 가능
     * serverInstanceNo는 {@link https://api.ncloud-docs.com/docs/compute-vserver-server-getserverinstancelist} 액션을 통해 획득 가능
     */
    serverInstanceNo?: string;

    /**
     * IP 주소
     * 네트워크 인터페이스에 할당할 IP 주소를 직접 입력 가능
     * 네트워크 인터페이스가 생성되는 Subnet의 IP 주소 범위에 포함되어야 함
     * Subnet의 0~5번째, 마지막 IP 주소는 사용할 수 없으며 Subnet 범위에서 중복된 IP 주소 사용 불가
     * Default : 조건을 만족하는 IP 주소가 순차적으로 할당됨
     */
    ip?: string;

    /**
     * 베어메탈용 네트워크 인터페이스 여부
     * true로 설정시 베어메탈용 네트워크 인터페이스를 생성하고 이 경우 서버를 명시해야만 생성 가능
     * false로 설정시 일반 네트워크 인터페이스 생성
     * 일반 서브넷에서는 베어메탈용 네트워크 인터페이스 생성 불가능
     * Default : 일반 네트워크 인터페이스 생성
     */
    isBareMetal?: boolean;

    /**
     * 보조 IP 리스트
     * 선택한 Subnet의 IP 주소 범위에 포함되는 Private IP를 보조 IP로 추가 가능
     * secondaryIpCount의 개수와 합쳐서 최대 5개의 보조 IP 추가 가능
     */
    secondaryIpList?: string[];

    /**
     * 보조 IP 자동 할당 개수
     * 지정한 개수만큼 보조 IP를 자동 할당 가능
     * 선택한 Subnet에서 사용중이지 않은 Private IP가 순차적으로 할당됨
     * secondaryIpList의 개수와 함쳐서 최대 5개의 보조 IP 추가 가능
     */
    secondaryIpCount?: number;

    /**
     * 생성할 네트워크 인터페이스에 대한 설명
     */
    networkInterfaceDescription?: string;

    /**
     * 응답 결과의 포맷 타입
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
};
