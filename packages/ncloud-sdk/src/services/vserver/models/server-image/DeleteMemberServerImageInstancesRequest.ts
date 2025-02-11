export type DeleteMemberServerImageInstancesRequest = {
    /**
     * 리전 코드
     * 삭제할 회원 서버 이미지 인스턴스의 리전(Region) 결정 가능
     * regionCode는 getRegionList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist
     * @default getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 삭제할 회원 서버 이미지 인스턴스 번호 리스트
     * memberServerImageInstanceNo는 getMemberServerImageInstanceList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-serverimage-getmemberserverimageinstancelist
     * ex) memberServerImageInstanceNoList.1=1234&memberServerImageInstanceNoList.2=2345
     */
    memberServerImageInstanceNoList: string[];

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
