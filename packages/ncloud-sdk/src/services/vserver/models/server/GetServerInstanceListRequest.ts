export type GetServerInstanceListRequest = {
    /**
     * 리전 코드
     * 서버 인스턴스 리스트가 조회될 리전(Region) 결정 가능
     * regionCode는 getRegionList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist
     * @default getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * VPC 번호
     * VPC 번호로 필터링하여 검색 가능
     * vpcNo는 getVpcList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/networking-vpc-vpcmanagement-getvpclist
     */
    vpcNo?: string;

    /**
     * 서버 인스턴스 번호 리스트
     * 서버 인스턴스 번호로 필터링하여 검색 가능
     * serverInstanceNo는 getServerInstanceList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-getserverinstancelist
     * ex) serverInstanceNoList.1=1234&serverInstanceNoList.2=2345
     */
    serverInstanceNoList?: string[];

    /**
     * 서버 이름
     * 서버 이름으로 필터링하여 검색 가능
     */
    serverName?: string;

    /**
     * 서버 인스턴스 상태 코드
     */
    serverInstanceStatusCode?: 'INIT' | 'CREAT' | 'RUN' | 'NSTOP';

    /**
     * IP 주소
     * 서버 인스턴스의 IP 주소로 필터링하여 검색 가능
     * 비공인 IP와 공인 IP 모두 필터링 대상이 됨
     */
    ip?: string;

    /**
     * 물리 배치 그룹 번호 리스트
     * 서버 인스턴스가 소속되는 물리 배치 그룹 번호로 필터링하여 검색 가능
     * placementGroupNo는 getPlacementGroupList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-placementgroup-getplacementgrouplist
     * ex) placementGroupNoList.1=1234&placementGroupNoList.2=2345
     */
    placementGroupNoList?: string[];

    /**
     * 페이징 번호
     * 페이징된 결과의 페이지 번호
     * 결과값을 pageNo, pageSize를 이용하여 페이징 처리 가능
     */
    pageNo?: number;

    /**
     * 페이지 사이즈
     * 페이징 시 보여줄 각 페이지 사이즈
     * pageNo 입력시 반드시 입력 필요
     */
    pageSize?: number;

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
