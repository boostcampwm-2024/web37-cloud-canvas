import { NcloudResponse } from '../subnet-management/NcloudResponse';

/**
 * Network ACL Deny-Allow 그룹 생성 응답 타입
 */
export interface CreateNetworkAclDenyAllowGroupResponse extends NcloudResponse {
    /** Network ACL Deny-Allow 그룹 목록 정보 */
    networkAclDenyAllowGroupList: {
        networkAclDenyAllowGroup: {
            /** Network ACL Deny-Allow 그룹 번호 */
            networkAclDenyAllowGroupNo: string;

            /** Network ACL Deny-Allow 그룹 이름 */
            networkAclDenyAllowGroupName: string;

            /** Network ACL Deny-Allow 그룹 상태 */
            networkAclDenyAllowGroupStatus: {
                /** 상태 코드 */
                code: string;
                /** 상태 코드명 */
                codeName: string;
            };

            /** VPC 번호 */
            vpcNo: string;

            /** Network ACL Deny-Allow 그룹 설명 */
            networkAclDenyAllowGroupDescription: string;

            /** 생성 일자 */
            createDate: string;

            /** 적용 여부 */
            isApplied: boolean;
        }[];
    };
}
