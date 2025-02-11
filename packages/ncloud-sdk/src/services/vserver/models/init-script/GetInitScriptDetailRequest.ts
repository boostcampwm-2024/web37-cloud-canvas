/**
 * 초기화 스크립트 상세 정보 조회 요청 파라미터
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-initscript-getinitscriptdetail}
 */
export type GetInitScriptDetailRequest = {
    /**
     * 리전 코드
     * 초기화 스크립트 상세 정보가 조회될 리전(Region) 결정 가능
     * regionCode는 {@link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist} 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 조회할 초기화 스크립트 번호
     * initScriptNo는 {@link https://api.ncloud-docs.com/docs/compute-vserver-initscript-getinitscriptlist} 액션을 통해 획득 가능
     */
    initScriptNo: string;

    /**
     * 응답 결과의 포맷 타입
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
};
