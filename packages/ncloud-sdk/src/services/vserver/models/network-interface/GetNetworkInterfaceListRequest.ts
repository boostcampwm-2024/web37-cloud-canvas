/**
 * 네트워크 인터페이스 리스트 조회 요청 파라미터
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-networkinterface-getnetworkinterfacelist}
 */
export type GetNetworkInterfaceListRequest = {
    /**
     * 리전 코드
     * 네트워크 인터페이스 리스트가 조회될 리전(Region) 결정 가능
     * regionCode는 {@link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist} 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * Subnet 이름
     * 네트워크 인터페이스 리스트가 조회될 Subnet의 이름으로 필터링하여 검색 가능
     */
    subnetName?: string;

    /**
     * 네트워크 인터페이스 번호 리스트
     * 네트워크 인터페이스 번호로 필터링하여 검색 가능
     * networkInterfaceNo는 {@link https://api.ncloud-docs.com/docs/compute-vserver-networkinterface-getnetworkinterfacelist} 액션을 통해 획득 가능
     */
    networkInterfaceNoList?: string[];

    /**
     * 네트워크 인터페이스 이름
     * 네트워크 인터페이스 이름으로 필터링하여 검색 가능
     */
    networkInterfaceName?: string;

    /**
     * 네트워크 인터페이스 상태 코드
     */
    networkInterfaceStatusCode?: 'SET' | 'UNSET' | 'USED' | 'NOTUSED';

    /**
     * IP 주소
     * 네트워크 인터페이스에 할당된 IP 주소로 필터링하여 검색 가능
     */
    ip?: string;

    /**
     * 보조 IP 리스트
     * 네트워크 인터페이스에 할당된 보조 IP 주소로 필터링하여 검색 가능
     * 네트워크 인터페이스에 할당된 secondaryIp는 {@link https://api.ncloud-docs.com/docs/compute-vserver-networkinterface-getnetworkinterfacelist} 액션을 통해 획득 가능
     */
    secondaryIpList?: string[];

    /**
     * 인스턴스 번호
     * 네트워크 인터페이스가 할당되어 있는 디바이스의 인스턴스 번호로 필터링하여 검색 가능
     */
    instanceNo?: string;

    /**
     * 디폴트 여부
     * 네트워크 인터페이스의 디폴트 여부로 필터링하여 검색 가능
     */
    isDefault?: boolean;

    /**
     * 디바이스 이름
     * 네트워크 인터페이스가 할당된 디바이스에서의 Ethernet 이름으로 필터링하여 검색 가능
     */
    deviceName?: 'eth0' | 'eth1' | 'eth2';

    /**
     * 서버 이름
     * 네트워크 인터페이스가 할당된 서버의 이름으로 필터링하여 검색 가능
     */
    serverName?: string;

    /**
     * 페이징된 결과의 페이지 번호
     * 결과값을 pageNo, pageSize를 이용하여 페이징 처리 가능
     */
    pageNo?: number;

    /**
     * 페이징 시 보여줄 각 페이지 사이즈
     * 결과값을 pageNo, pageSize를 이용하여 페이징 처리 가능
     * pageNo 입력시 반드시 입력 필요
     */
    pageSize?: number;

    /**
     * 응답 결과의 포맷 타입
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
};
