import { NcloudResponse } from '../subnet-management/NcloudResponse';

/**
 * Network ACL 설명 수정 응답 타입
 */
export interface SetNetworkAclDescriptionResponse extends NcloudResponse {
    /** Network ACL 목록 정보 */
    networkAclList: {
        networkAcl: {
            /** Network ACL 번호 */
            networkAclNo: string;

            /** Network ACL 이름 */
            networkAclName: string;

            /** VPC 번호 */
            vpcNo: string;

            /** Network ACL 상태 */
            networkAclStatus: {
                /** 상태 코드 */
                code: string;
                /** 상태 코드명 */
                codeName: string;
            };

            /** Network ACL 설명 */
            networkAclDescription: string;

            /** 생성 일자 */
            createDate: string;

            /** 기본 Network ACL 여부 */
            isDefault: boolean;
        }[];
    };
}
