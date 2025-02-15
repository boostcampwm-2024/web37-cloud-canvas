import { NcloudResponse } from '../subnet-management/NcloudResponse';

/**
 * Network ACL Outbound Rule 추가 응답 타입
 */
export interface AddNetworkAclOutboundRuleResponse extends NcloudResponse {
    /** Network ACL Rule 목록 정보 */
    networkAclRuleList: {
        networkAclRule: {
            /** Network ACL 번호 */
            networkAclNo: string;

            /** 우선순위 */
            priority: number;

            /** 프로토콜 타입 */
            protocolType: {
                /** 코드 */
                code: string;
                /** 코드명 */
                codeName: string;
            };

            /** 포트 범위 */
            portRange: string;

            /** Rule Action */
            ruleAction: {
                /** 코드 */
                code: string;
                /** 코드명 */
                codeName: string;
            };

            /** 생성 일자 */
            createDate: string;

            /** IP 블록 */
            ipBlock: string;

            /** Deny Allow 그룹 번호 */
            denyAllowGroupNo: string;

            /** Network ACL Rule 타입 */
            networkAclRuleType: {
                /** 코드 */
                code: string;
                /** 코드명 */
                codeName: string;
            };

            /** Network ACL Rule 설명 */
            networkAclRuleDescription: string;
        }[];
    };
}
