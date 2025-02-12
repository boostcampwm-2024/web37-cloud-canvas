/**
 * Subnet 삭제 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-subnetmanagement-deletesubnet}
 */
export interface DeleteSubnetRequest {
    /**
     * 리전 코드
     * 삭제하려는 Subnet의 리전(Region) 결정
     * @description regionCode는 getRegionList 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * Subnet 번호
     * @description subnetNo는 getSubnetList 액션을 통해 획득 가능
     */
    subnetNo: string;

    /**
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
}