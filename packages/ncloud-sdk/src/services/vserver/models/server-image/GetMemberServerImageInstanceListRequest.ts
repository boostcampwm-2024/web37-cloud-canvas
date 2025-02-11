export type GetMemberServerImageInstanceListRequest = {
    /**
     * 리전 코드
     * 회원 서버 이미지 인스턴스 리스트가 조회될 리전(Region) 결정 가능
     * regionCode는 getRegionList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist
     * @default getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 회원 서버 이미지 인스턴스 번호 리스트
     * memberServerImageInstanceNo는 getMemberServerImageInstanceList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-serverimage-getmemberserverimageinstancelist
     * ex) memberServerImageInstanceNoList.1=1234&memberServerImageInstanceNoList.2=2345
     */
    memberServerImageInstanceNoList?: string[];

    /**
     * 회원 서버 이미지 이름
     */
    memberServerImageName?: string;

    /**
     * 회원 서버 이미지 인스턴스 상태 코드
     */
    memberServerImageInstanceStatusCode?: 'INIT' | 'CREAT';

    /**
     * 플랫폼 유형 코드 리스트
     * ex) platformTypeCodeList.1=LNX32&platformTypeCodeList.2=LNX64
     */
    platformTypeCodeList?: Array<
        'LNX32' | 'LNX64' | 'WND32' | 'WND64' | 'UBD64' | 'UBS64'
    >;

    /**
     * 페이지 번호
     */
    pageNo?: number;

    /**
     * 페이지 사이즈
     * pageNo 입력시 반드시 입력 필요
     */
    pageSize?: number;

    /**
     * 정렬 대상
     */
    sortedBy?: 'memberServerImageName';

    /**
     * 정렬 순서
     * @default ASC
     */
    sortingOrder?: 'ASC' | 'DESC';

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
