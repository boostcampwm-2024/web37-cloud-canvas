/**
 * 네트워크 인터페이스에 할당된 보조 IP 해제 요청 파라미터
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-networkinterface-unassignsecondaryips}
 */
export type UnassignSecondaryIpsRequest = {
    /**
     * 리전 코드
     * 보조 IP를 할당 해제할 네트워크 인터페이스의 리전(Region) 결정 가능
     * regionCode는 {@link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist} 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 보조 IP를 할당 해제할 네트워크 인터페이스 번호
     * networkInterfaceNo는 {@link https://api.ncloud-docs.com/docs/compute-vserver-networkinterface-getnetworkinterfacelist} 액션을 통해 획득 가능
     */
    networkInterfaceNo: string;

    /**
     * 할당 해제할 보조 IP 리스트
     * 네트워크 인터페이스에 할당되어 있는 secondaryIp는 {@link https://api.ncloud-docs.com/docs/compute-vserver-networkinterface-getnetworkinterfacelist} 액션을 통해 획득 가능
     * 할당되어 있지 않은 IP 해제시 오류 발생하지 않음
     */
    secondaryIpList: string[];

    /**
     * 응답 결과의 포맷 타입
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
};
