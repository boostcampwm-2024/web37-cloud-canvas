/**
 * Network ACL 목록 조회 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-networkacl-getnetworkacllist}
 */
export interface GetNetworkAclListRequest {
    /**
     * 리전 코드
     * Network ACL 목록을 조회하려는 리전(Region) 결정
     * @description regionCode는 getRegionList 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * Network ACL 이름으로 목록 조회
     */
    networkAclName?: string;

    /**
     * Network ACL 상태 코드로 목록 조회
     * Options : INIT | SET | RUN | TERMTING
     */
    networkAclStatusCode?: 'INIT' | 'SET' | 'RUN' | 'TERMTING';

    /**
     * Network ACL 번호 리스트로 목록 조회
     * @description networkAclNo는 getNetworkAclList 액션을 통해 획득 가능
     * @example networkAclNoList.1=1234&networkAclNoList.2=2345
     */
    networkAclNoList?: string[];

    /**
     * 페이징된 결과의 페이지 번호
     * @description pageNo, pageSize를 이용하여 결과값을 페이징 처리
     */
    pageNo?: number;

    /**
     * 페이징 시 보여줄 각 페이지 크기
     * @description pageNo 입력 시 필수
     */
    pageSize?: number;

    /**
     * VPC 번호로 목록 조회
     * @description getVpcList 액션을 통해 획득 가능
     */
    vpcNo?: string;

    /**
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
}
