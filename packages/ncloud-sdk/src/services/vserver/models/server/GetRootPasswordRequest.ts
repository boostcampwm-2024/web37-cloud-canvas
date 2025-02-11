export type GetRootPasswordRequest = {
    /**
     * 리전 코드
     * root 계정의 비밀번호를 조회할 서버 인스턴스의 리전(Region) 결정
     * regionCode는 getRegionList 액션을 통해서 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist
     * @default getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 서버 인스턴스 번호
     * serverInstanceNo는 getServerInstanceList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-getserverinstancelist
     */
    serverInstanceNo: string;

    /**
     * 서버 인스턴스에 할당된 로그인 키
     * 생성하거나 import한 로그인 키의 개인 키 텍스트 입력
     * 서버의 로그인 키 파일(.pem)을 통해 획득 가능
     * 로그인 키 내용이 그대로 들어와야 하므로 '\n'을 붙여주고, GET 방식을 이용시 URL 인코딩 필요
     */
    privateKey?: string;

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
