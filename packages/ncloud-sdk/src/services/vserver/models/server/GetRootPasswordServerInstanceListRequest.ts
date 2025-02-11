export type GetRootPasswordServerInstanceList = {
    /**
     * 리전 코드
     * root 계정의 비밀번호를 조회할 서버 인스턴스 리스트의 리전(Region) 결정
     * regionCode는 getRegionList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist
     * @default getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 서버 인스턴스 정보 목록
     * serverInstanceNo는 getServerInstanceList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-getserverinstancelist
     * ex) rootPasswordServerInstanceList.1.serverInstanceNo=1234&rootPasswordServerInstanceList.2.serverInstanceNo=2345
     */
    rootPasswordServerInstanceList: Array<{
        serverInstanceNo: string;
        privateKey?: string;
    }>;

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
