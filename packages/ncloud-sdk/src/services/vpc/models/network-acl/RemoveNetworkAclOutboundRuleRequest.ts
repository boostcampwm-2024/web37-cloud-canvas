/**
 * Network ACL Outbound Rule 제거 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-networkacl-removenetworkacloutboundrule}
 */
export interface RemoveNetworkAclOutboundRuleRequest {
    /**
     * 리전 코드
     * Outbound 규칙을 제거하려는 Network ACL의 리전(Region) 결정
     * @description regionCode는 getRegionList 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * Network ACL 번호
     * @description getNetworkAclList 액션을 통해 획득 가능
     */
    networkAclNo: string;

    /**
     * Network ACL Rule 목록
     */
    networkAclRuleList: Array<{
        /**
         * 제거하려는 Network ACL Outbound 규칙의 우선순위
         * Min : 0, Max : 199
         * @description 다른 Outbound 규칙의 우선순위와 중복될 수 없음
         */
        priority: number;

        /**
         * 제거하려는 Network ACL Outbound 규칙의 프로토콜 유형 코드
         * Options : TCP | UDP | ICMP
         */
        protocolTypeCode: 'TCP' | 'UDP' | 'ICMP';

        /**
         * 제거하려는 Network ACL Outbound 규칙에서 허용할 IP 주소 범위
         * @example 0.0.0.0/0, 100.10.20.0/24, 192.168.0.10/32
         */
        ipBlock?: string;

        /**
         * 제거하려는 Network ACL Outbound 규칙의 Deny-Allow 그룹 번호
         * @description IP 주소 범위 대신 지정 가능
         * @description getNetworkAclDenyAllowGroupList 액션을 통해 획득 가능
         */
        denyAllowGroupNo?: string;

        /**
         * 제거하려는 Network ACL Outbound 규칙의 포트 범위
         * @example 단일 포트: 22, 범위 지정: 1-65535
         * @description protocolTypeCode가 ICMP일 경우 입력하지 않음
         */
        portRange?: string;

        /**
         * 제거하려는 Network ACL Outbound 규칙의 트래픽의 허용 여부
         * Options : ALLOW | DROP
         */
        ruleActionCode: 'ALLOW' | 'DROP';
    }>;

    /**
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
}