export type GetPlacementGroupDetailRequest = {
    /**
     * 리전 코드
     * 물리 배치 그룹 상세 정보가 조회될 리전(Region) 결정 가능
     * regionCode는 getRegionList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist
     * @default getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 물리 배치 그룹 번호
     * placementGroupNo는 getPlacementGroupList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-placementgroup-getplacementgrouplist
     */
    placementGroupNo: string;

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
