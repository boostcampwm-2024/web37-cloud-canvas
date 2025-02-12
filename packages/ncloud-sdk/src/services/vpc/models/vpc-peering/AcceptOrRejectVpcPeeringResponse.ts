/**
 * VPC Peering 수락/거절 응답 타입
 */
export type AcceptOrRejectVpcPeeringResponse = {
    /** 요청 ID */
    requestId: string;

    /** 반환 코드 */
    returnCode: string;

    /** 반환 메시지 */
    returnMessage: string;

    /** 총 행 개수 */
    totalRows: number;

    /** VPC Peering 인스턴스 목록 */
    vpcPeeringInstanceList: {
        vpcPeeringInstance: {
            /** VPC Peering 인스턴스 번호 */
            vpcPeeringInstanceNo: string;

            /** VPC Peering 이름 */
            vpcPeeringName: string;

            /** 리전 코드 */
            regionCode: string;

            /** 생성 일자 */
            createDate: string;

            /** 마지막 수정 일자 */
            lastModifyDate: string;

            /** VPC Peering 인스턴스 상태 */
            vpcPeeringInstanceStatus: {
                code: string;
                codeName: string;
            };

            /** VPC Peering 인스턴스 상태 이름 */
            vpcPeeringInstanceStatusName: string;

            /** VPC Peering 인스턴스 작업 */
            vpcPeeringInstanceOperation: {
                code: string;
                codeName: string;
            };

            /** 요청을 보내는 VPC 번호 */
            sourceVpcNo: string;

            /** 요청을 보내는 VPC 이름 */
            sourceVpcName: string;

            /** 요청을 보내는 VPC IPv4 CIDR 블록 */
            sourceVpcIpv4CidrBlock: string;

            /** 요청을 보내는 계정 ID */
            sourceVpcLoginId: string;

            /** 요청을 받는 VPC 번호 */
            targetVpcNo: string;

            /** 요청을 받는 VPC 이름 */
            targetVpcName: string;

            /** 요청을 받는 VPC IPv4 CIDR 블록 */
            targetVpcIpv4CidrBlock: string;

            /** 요청을 받는 계정 ID */
            targetVpcLoginId: string;

            /** VPC Peering 설명 */
            vpcPeeringDescription: string;

            /** 역방향 VPC Peering 존재 여부 */
            hasReverseVpcPeering: boolean;

            /** 서로 다른 계정 간 VPC Peering 여부 */
            isBetweenAccounts: boolean;

            /** 역방향 VPC Peering 인스턴스 번호 */
            reverseVpcPeeringInstanceNo: string;
        };
    }[];
};
