export type CreateMemberServerImageInstanceRequest = {
    /**
     * 리전 코드
     * 회원 서버 이미지 인스턴스가 생성될 리전(Region) 결정 가능
     * regionCode는 getRegionList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist
     * @default getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 서버 인스턴스 번호
     * 회원 서버 이미지를 생성할 대상이 되는 서버 인스턴스 결정
     * serverInstanceNo는 getServerInstanceList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-getserverinstancelist
     */
    serverInstanceNo: string;

    /**
     * 생성할 회원 서버 이미지 이름
     * Min : 3, Max : 30
     * @default NAVER Cloud Platform가 자동으로 부여
     */
    memberServerImageName?: string;

    /**
     * 생성할 회원 서버 이미지에 대한 설명
     * Min : 0, Max : 1000 Bytes
     */
    memberServerImageDescription?: string;

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
