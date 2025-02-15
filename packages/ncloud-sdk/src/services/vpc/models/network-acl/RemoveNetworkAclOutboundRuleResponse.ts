import { NcloudResponse } from '../subnet-management/NcloudResponse';

/**
 * Network ACL Outbound Rule 제거 응답 타입
 */
export interface RemoveNetworkAclOutboundRuleResponse extends NcloudResponse {
    /** Network ACL Rule 목록 정보 */
    networkAclRuleList: Array<any>;
}
