export type SetProtectServerTerminationRequest = {
    /**
     * 리전 코드
     * 반납 보호 여부를 설정할 서버 인스턴스의 리전(Region) 결정 가능
     * regionCode는 getRegionList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist
     * @default getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 반납 보호 여부를 설정할 서버 인스턴스 번호
     * serverInstanceNo는 getServerInstanceList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-getserverinstancelist
     */
    serverInstanceNo: string;

    /**
     * 반납 보호 여부
     */
    isProtectServerTermination: boolean;

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
