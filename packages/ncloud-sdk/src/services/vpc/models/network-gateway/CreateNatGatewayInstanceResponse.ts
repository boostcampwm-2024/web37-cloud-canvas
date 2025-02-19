import { NcloudResponse } from '../subnet-management/NcloudResponse';

/**
 * NAT Gateway 인스턴스 생성 응답 타입
 */
export interface CreateNatGatewayInstanceResponse extends NcloudResponse {
    /** NAT Gateway 인스턴스 목록 정보 */
    natGatewayInstanceList: {
        natGatewayInstance: {
            /** VPC 번호 */
            vpcNo: string;

            /** VPC 이름 */
            vpcName: string;

            /** NAT Gateway 인스턴스 번호 */
            natGatewayInstanceNo: string;

            /** NAT Gateway 이름 */
            natGatewayName: string;

            /** 공인 IP */
            publicIp: string;

            /** NAT Gateway 인스턴스 상태 */
            natGatewayInstanceStatus: {
                /** 상태 코드 */
                code: string;
                /** 상태 코드명 */
                codeName: string;
            };

            /** NAT Gateway 인스턴스 상태 이름 */
            natGatewayInstanceStatusName: string;

            /** NAT Gateway 인스턴스 작업 */
            natGatewayInstanceOperation: {
                /** 작업 코드 */
                code: string;
                /** 코드명 */
                codeName: string;
            };

            /** 생성 일자 */
            createDate: string;

            /** NAT Gateway 설명 */
            natGatewayDescription: string;

            /** ZONE 코드 */
            zoneCode: string;

            /** NAT Gateway 타입 */
            natGatewayType: {
                /** 타입 코드 */
                code: string;
                /** 타입 코드명 */
                codeName: string;
            };

            /** Subnet 이름 */
            subnetName: string;

            /** Subnet 번호 */
            subnetNo: string;

            /** 사설 IP */
            privateIp: string;

            /** 공인 IP Instance 번호 */
            publicIpInstanceNo: string;
        }[];
    };
}