/**
 * VPC Peering 인스턴스 목록 조회 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-vpcpeering-getvpcpeeringinstancelist}
 */
export type GetVpcPeeringInstanceListRequest = {
    /**
     * 리전 코드
     * VPC Peering 인스턴스 목록을 조회하려는 리전(Region) 결정
     * @description regionCode는 getRegionList 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * VPC Peering 인스턴스 번호 리스트
     * @description getVpcPeeringInstanceList 액션을 통해 획득 가능
     * @example vpcPeeringInstanceNoList.1=1234&vpcPeeringInstanceNoList.2=2345
     */
    vpcPeeringInstanceNoList?: string[];

    /**
     * Peering을 요청한 VPC 이름으로 조회
     */
    sourceVpcName?: string;

    /**
     * Peering을 수락한 VPC 이름으로 조회
     */
    targetVpcName?: string;

    /**
     * VPC Peering 이름으로 조회
     */
    vpcPeeringName?: string;

    /**
     * VPC Peering 인스턴스의 상태 코드로 조회
     * Options : INIT | RUN | TERMTING
     * - INIT: 수락 대기 중
     * - RUN: 운영 중
     * - TERMTING: 종료 중
     */
    vpcPeeringInstanceStatusCode?: 'INIT' | 'RUN' | 'TERMTING';

    /**
     * 페이징된 결과의 페이지 번호
     * @description pageNo, pageSize를 이용하여 결과값을 페이징 처리
     */
    pageNo?: number;

    /**
     * 한 페이지에 보여줄 결과 개수
     * @description pageNo 입력 시 필수
     */
    pageSize?: number;

    /**
     * 조회 결과값 정렬 기준
     * Options : vpcPeeringName | sourceVpcName | targetVpcName
     * - vpcPeeringName: VPC Peering 이름
     * - sourceVpcName: 요청 VPC 이름
     * - targetVpcName: 수락 VPC 이름
     */
    sortedBy?: 'vpcPeeringName' | 'sourceVpcName' | 'targetVpcName';

    /**
     * sortedBy 이용시 오름차순 또는 내림차순 정렬 설정
     * Options : ASC | DESC
     * - ASC: 오름차순 (기본값)
     * - DESC: 내림차순
     */
    sortingOrder?: 'ASC' | 'DESC';

    /**
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
};