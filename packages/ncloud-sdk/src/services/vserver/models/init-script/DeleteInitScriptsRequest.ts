/**
 * 초기화 스크립트 삭제 요청 파라미터
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-initscript-deleteinitscripts}
 */
export type DeleteInitScriptsRequest = {
    /**
     * 리전 코드
     * 삭제할 초기화 스크립트의 리전(Region) 결정 가능
     * regionCode는 {@link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist} 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 삭제할 초기화 스크립트 번호 리스트
     * initScriptNo는 {@link https://api.ncloud-docs.com/docs/compute-vserver-initscript-getinitscriptlist} 액션을 통해 획득 가능
     */
    initScriptNoList: string[];

    /**
     * 응답 결과의 포맷 타입
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
};
