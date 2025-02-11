export type GetMemberServerImageInstanceDetailRequest = {
    /**
     * 리전 코드
     * 회원 서버 이미지 인스턴스 상세 정보가 조회될 리전(Region) 결정 가능
     * regionCode는 getRegionList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist
     * @default getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 조회할 회원 서버 이미지 인스턴스 번호
     * memberServerImageInstanceNo는 getMemberServerImageInstanceList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-serverimage-getmemberserverimageinstancelist
     */
    memberServerImageInstanceNo: string;

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
