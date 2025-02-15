/**
 * Network ACL Deny-Allow 그룹 목록 조회 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-networkacl-getnetworkacldentyallowgrouplist}
 */
export interface GetNetworkAclDenyAllowGroupListRequest {
    /**
     * 리전 코드
     * Network ACL Deny-Allow 그룹 목록을 조회하려는 리전(Region) 결정
     * @description regionCode는 getRegionList 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * VPC 번호
     * @description getVpcList 액션을 통해 획득 가능
     */
    vpcNo?: string;

    /**
     * Network ACL Deny-Allow 그룹 이름
     */
    networkAclDenyAllowGroupName?: string;

    /**
     * Network ACL Deny-Allow 그룹 상태 코드
     * Options : SET | RUN
     */
    networkAclDenyAllowGroupStatusCode?: 'SET' | 'RUN';

    /**
     * Network ACL Deny-Allow 그룹 번호 리스트
     * @description networkAclDenyAllowGroupNo는 getNetworkAclDenyAllowGroupList 액션을 통해 획득 가능
     * @example networkAclDenyAllowGroupNoList.1=1234&networkAclDenyAllowGroupNoList.2=2345
     */
    networkAclDenyAllowGroupNoList?: string[];

    /**
     * Network ACL 규칙 적용 여부
     * Options : true | false
     * - true: Network ACL 규칙이 적용됨
     * - false: Network ACL 규칙이 적용되지 않음
     */
    isApplied?: boolean;

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
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
}