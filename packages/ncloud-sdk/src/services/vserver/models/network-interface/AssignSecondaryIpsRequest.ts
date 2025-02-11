/**
 * 네트워크 인터페이스에 보조 IP 할당 요청 파라미터
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-networkinterface-assignsecondaryips}
 */
export type AssignSecondaryIpsRequest = {
    /**
     * 리전 코드
     * 보조 IP를 할당할 네트워크 인터페이스의 리전(Region) 결정 가능
     * regionCode는 {@link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist} 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 보조 IP를 할당할 네트워크 인터페이스 번호
     * networkInterfaceNo는 {@link https://api.ncloud-docs.com/docs/compute-vserver-networkinterface-getnetworkinterfacelist} 액션을 통해 획득 가능
     */
    networkInterfaceNo: string;

    /**
     * 할당할 보조 IP 리스트
     * 선택한 네트워크 인터페이스가 위치한 Subnet의 IP 주소 범위에 포함되는 Private IP를 보조 IP로 추가 가능
     * 네트워크 인터페이스당 최대 5개의 보조 IP 추가 가능
     * secondaryIpList 개수와 secondaryIpCount 개수를 합쳐서 최소 1개의 Secondary IP 지정 필수
     */
    secondaryIpList?: string[];

    /**
     * 보조 IP 자동 할당 개수
     * 지정한 개수만큼의 보조 IP 자동 할당 가능
     * 선택한 네트워크 인터페이스가 위치한 Subnet에서 사용중이지 않은 Private IP가 순차적으로 할당됨
     * 네트워크 인터페이스당 최대 5개의 보조 IP 추가 가능
     * secondaryIpList 개수와 secondaryIpCount 개수를 합쳐서 최소 1개의 Secondary IP 지정 필요
     */
    secondaryIpCount?: number;

    /**
     * 명시적 재할당 허용 여부
     * true로 설정시 다른 네트워크 인터페이스에서 사용하고 있는 보조 IP가 있다면 해제하고 선택된 네트워크 인터페이스에 재할당 필요
     * false로 설정시 다른 네트워크 인터페이스에서 사용중인 보조 IP가 있다면 오류 발생
     * 선택한 모든 보조 IP가 사용중이 아니거나 선택된 네트워크 인터페이스에 이미 할당되어 있는 경우 오류 발생하지 않음
     * secondaryIpList로 지정한 IP에 대해서만 적용됨
     * Default: false
     */
    allowReassign?: boolean;

    /**
     * 응답 결과의 포맷 타입
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
};
