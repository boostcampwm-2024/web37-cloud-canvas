export type RemovePlacementGroupServerInstanceRequest = {
    /**
     * 리전 코드
     * 서버 인스턴스가 제거될 물리 배치 그룹의 리전(Region) 결정 가능
     * regionCode는 getRegionList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist
     * @default getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 서버 인스턴스를 제거할 물리 배치 그룹 번호
     * placementGroupNo는 getPlacementGroupList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-placementgroup-getplacementgrouplist
     */
    placementGroupNo: string;

    /**
     * 제거할 서버 인스턴스 번호
     * serverInstanceNo는 getServerInstanceList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-getserverinstancelist
     */
    serverInstanceNo: string;

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
