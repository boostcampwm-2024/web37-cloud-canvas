export type CreatePlacementGroupRequest = {
    /**
     * 리전 코드
     * 물리 배치 그룹이 생성될 리전(Region) 결정 가능
     * regionCode는 getRegionList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist
     * @default getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 생성할 물리 배치 그룹 이름
     * Min : 3, Max : 30
     * 소문자, 숫자, "-"의 특수문자만 허용하며 알파벳 문자로 시작함
     * @default NAVER Cloud Platform가 자동으로 부여
     */
    placementGroupName?: string;

    /**
     * 물리 배치 그룹 유형 코드
     * @default AA
     */
    placementGroupTypeCode?: 'AA';

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
