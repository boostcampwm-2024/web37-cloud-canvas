export type GetServerImageListRequest = {
    /**
     * 리전 코드
     * 서버 이미지 리스트가 조회될 리전(Region) 결정 가능
     * regionCode는 getRegionList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist
     * @default getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 서버 이미지 번호 리스트
     * 서버 이미지 번호로 필터링하여 검색 가능
     * serverImageNo는 getServerImageList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-serverimage-getserverimagelist
     * ex) serverImageNoList.1=1234&serverImageNoList.2=2345
     */
    serverImageNoList?: string[];

    /**
     * 서버 이미지 이름
     * 서버 이미지 이름으로 필터링하여 검색 가능
     */
    serverImageName?: string;

    /**
     * 서버 이미지 상태 코드
     */
    serverImageStatusCode?: 'INIT' | 'CREAT';

    /**
     * 플랫폼 타입 코드 리스트
     * 플랫폼 타입으로 필터링하여 검색 가능
     * ex) platformTypeCodeList.1=LNX32&platformTypeCodeList.2=LNX64
     */
    platformTypeCodeList?: Array<'LNX32' | 'LNX64' | 'WND32' | 'WND64'>;

    /**
     * 페이징 번호
     */
    pageNo?: number;

    /**
     * 페이지 사이즈
     * pageNo 입력시 반드시 입력 필요
     */
    pageSize?: number;

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
