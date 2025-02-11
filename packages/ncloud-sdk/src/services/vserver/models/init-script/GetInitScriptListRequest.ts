/**
 * 사용자가 생성한 초기화 스크립트 리스트를 조회하는 요청 파라미터
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-initscript-getinitscriptlist}
 */
export type GetInitScriptListRequest = {
    /**
     * 리전 코드
     * 초기화 스크립트 리스트가 조회될 리전(Region) 결정 가능
     * regionCode는 {@link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist} 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 초기화 스크립트 번호 리스트
     * 초기화 스크립트 번호로 필터링하여 검색 가능
     * initScriptNo는 {@link https://api.ncloud-docs.com/docs/compute-vserver-initscript-getinitscriptlist} 액션을 통해 획득 가능
     */
    initScriptNoList?: string[];

    /**
     * 초기화 스크립트 이름
     * 초기화 스크립트 이름으로 필터링하여 검색 가능
     */
    initScriptName?: string;

    /**
     * OS 유형 코드
     * 초기화 스크립트 생성시 지정한 OS 유형으로 필터링하여 검색 가능
     */
    osTypeCode?: 'LNX' | 'WND';

    /**
     * 페이징된 결과의 페이지 번호
     * 결과값을 pageNo, pageSize를 이용하여 페이징 처리 가능
     */
    pageNo?: number;

    /**
     * 페이징 시 보여줄 각 페이지 사이즈
     * 결과값을 pageNo, pageSize를 이용하여 페이징 처리 가능
     * pageNo 입력시 반드시 입력 필수
     */
    pageSize?: number;

    /**
     * 정렬 대상
     * 결과값을 초기화 스크립트 이름으로 정렬 가능
     */
    sortedBy?: 'initScriptName';

    /**
     * 정렬 순서
     * sortedBy 이용시 오름차순/내림차순 정렬 설정
     * Default : ASC
     */
    sortingOrder?: 'ASC' | 'DESC';

    /**
     * 응답 결과의 포맷 타입
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
};
