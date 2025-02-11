/**
 * 네트워크 인터페이스 해제 요청 파라미터
 * 서버 인스턴스에 할당된 네트워크 인터페이스를 해제합니다. 서버 인스턴스의 기본 네트워크 인터페이스는 해제할 수 없습니다.
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-networkinterface-detachnetworkinterface}
 */
export type DetachNetworkInterfaceRequest = {
    /**
     * 리전 코드
     * 해제할 네트워크 인터페이스의 리전(Region) 결정 가능
     * regionCode는 {@link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist} 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * Subnet 번호
     * 해제할 네트워크 인터페이스의 Subnet 결정
     * subnetNo는 {@link https://api.ncloud-docs.com/docs/networking-vpc-subnetmanagement-getsubnetlist} 액션을 통해 획득 가능
     */
    subnetNo: string;

    /**
     * 해제할 네트워크 인터페이스 번호
     * networkInterfaceNo는 {@link https://api.ncloud-docs.com/docs/compute-vserver-networkinterface-getnetworkinterfacelist} 액션을 통해 획득 가능
     */
    networkInterfaceNo: string;

    /**
     * 서버 인스턴스 번호
     * 네트워크 인터페이스가 해제될 서버 인스턴스 결정
     * serverInstanceNo는 {@link https://api.ncloud-docs.com/docs/compute-vserver-server-getserverinstancelist} 액션을 통해 획득 가능
     */
    serverInstanceNo: string;

    /**
     * 응답 결과의 포맷 타입
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
};
