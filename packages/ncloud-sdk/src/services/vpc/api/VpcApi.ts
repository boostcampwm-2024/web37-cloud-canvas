import { VpcApiClient } from '../VpcApiClient';
import { ApiKeyCredentials } from '../../../types';
import { CreateVpcRequest } from '../models/CreateVpcRequest';
import { CreateVpcResponse } from '../models/CreateVpcResponse';
import { DeleteVpcRequest } from '../models/DeleteVpcRequest';
import { DeleteVpcResponse } from '../models/DeleteVpcResponse';
import { GetVpcListRequest } from '../models/GetVpcListRequest';
import { GetVpcListResponse } from '../models/GetVpcListResponse';
import { GetVpcDetailRequest } from '../models/GetVpcDetailRequest';
import { GetVpcDetailResponse } from '../models/GetVpcDetailResponse';
import { CreateVpcPeeringInstanceRequest } from '../models/vpc-peering/CreateVpcPeeringInstanceRequest';
import { CreateVpcPeeringInstanceResponse } from '../models/vpc-peering/CreateVpcPeeringResponse';
import { AcceptOrRejectVpcPeeringRequest } from '../models/vpc-peering/AcceptOrRejetVpcPeeringRequest';
import { AcceptOrRejectVpcPeeringResponse } from '../models/vpc-peering/AcceptOrRejectVpcPeeringResponse';
import { GetVpcPeeringInstanceListRequest } from '../models/vpc-peering/GetVpcPeeringInstanceListRequest';
import { GetVpcPeeringInstanceListResponse } from '../models/vpc-peering/GetVpcPeeringInstanceListResponse';
import { GetVpcPeeringInstanceDetailRequest } from '../models/vpc-peering/GetVpcPeeringInstanceDetailRequest';
import { GetVpcPeeringInstanceDetailResponse } from '../models/vpc-peering/GetVpcPeeringInstanceDetailResponse';
import { DeleteVpcPeeringInstanceRequest } from '../models/vpc-peering/DeleteVpcPeeringInstanceRequest';
import { DeleteVpcPeeringInstanceResponse } from '../models/vpc-peering/DeleteVpcPeeringInstanceResponse';
import { SetVpcPeeringDescriptionRequest } from '../models/vpc-peering/SetVpcPeeringDescriptionRequest';
import { SetVpcPeeringDescriptionResponse } from '../models/vpc-peering/SetVpcPeeringDescriptionResponse';

/**
 * 네이버 클라우드 플랫폼의 VPC(Virtual Private Cloud) API를 처리하는 클래스
 * @class VpcApi
 */
export class VpcApi {
    private client: VpcApiClient;
    private readonly resourcePath: string;

    /**
     * VpcApi 클래스의 새 인스턴스를 생성합니다.
     * @param {ApiKeyCredentials} [apiKey] - 네이버 클라우드 플랫폼 API 인증 정보
     * @example
     * const vpcApi = new VpcApi({
     *   accessKey: 'access-key',
     *   secretKey: 'secret-key'
     * });
     */
    constructor(apiKey?: ApiKeyCredentials) {
        this.resourcePath = '/vpc/v2';
        this.client = new VpcApiClient(apiKey);
    }

    /**
     * 새로운 VPC를 생성합니다.
     * @param {CreateVpcRequest} params - VPC 생성 요청 파라미터
     * @returns {Promise<CreateVpcResponse>} VPC 생성 결과
     *
     * @example
     * const response = await vpcApi.createVpc({
     *   regionCode: 'KR',
     *   vpcName: 'boost-vpc',
     *   ipv4CidrBlock: '10.0.0.0/16'
     * });
     *
     */
    async createVpc(params: CreateVpcRequest): Promise<CreateVpcResponse> {
        return await this.client.request({
            method: 'POST',
            url: `${this.resourcePath}/createVpc`,
            params,
        });
    }

    /**
     * VPC를 삭제합니다.
     * @param {DeleteVpcRequest} params - VPC 삭제 요청 파라미터
     * @returns {Promise<DeleteVpcResponse>} VPC 삭제 결과
     *
     * @example
     * const response = await vpcApi.deleteVpc({
     *   regionCode: 'KR',
     *   vpcNo: 'vpc-123'
     * });
     *
     */
    async deleteVpc(params: DeleteVpcRequest): Promise<DeleteVpcResponse> {
        return await this.client.request({
            method: 'POST',
            url: `${this.resourcePath}/deleteVpc`,
            params,
        });
    }

    /**
     * VPC 목록을 조회합니다.
     * @param {GetVpcListRequest} params - VPC 목록 조회 요청 파라미터
     * @returns {Promise<GetVpcListResponse>} VPC 목록 조회 결과
     *
     * @example
     * const response = await vpcApi.getVpcList({
     *   regionCode: 'KR',
     *   vpcStatusCode: 'RUN'
     * });
     *
     */
    async getVpcList(params: GetVpcListRequest): Promise<GetVpcListResponse> {
        return await this.client.request({
            method: 'GET',
            url: `${this.resourcePath}/getVpcList`,
            params,
        });
    }

    /**
     * 특정 VPC의 상세 정보를 조회합니다.
     * @param {GetVpcDetailRequest} params - VPC 상세 정보 조회 요청 파라미터
     * @returns {Promise<GetVpcDetailResponse>} VPC 상세 정보 조회 결과
     *
     * @example
     * const response = await vpcApi.getVpcDetail({
     *   regionCode: 'KR',
     *   vpcNo: 'vpc-123'
     * });
     *
     */
    async getVpcDetail(
        params: GetVpcDetailRequest,
    ): Promise<GetVpcDetailResponse> {
        return await this.client.request({
            method: 'GET',
            url: `${this.resourcePath}/getVpcDetail`,
            params,
        });
    }

    /**
     * VPC Peering 인스턴스를 생성합니다.
     * @param {CreateVpcPeeringInstanceRequest} params - VPC Peering 생성 요청 파라미터
     * @returns {Promise<CreateVpcPeeringInstanceResponse>} VPC Peering 생성 결과
     *
     * @example
     * const response = await vpcApi.createVpcPeeringInstance({
     *   regionCode: 'KR',
     *   sourceVpcNo: 'vpc-123',
     *   targetVpcNo: 'vpc-456'
     * });
     */
    async createVpcPeeringInstance(
        params: CreateVpcPeeringInstanceRequest
    ): Promise<CreateVpcPeeringInstanceResponse> {
        return await this.client.request({
            method: 'POST',
            url: `${this.resourcePath}/createVpcPeeringInstance`,
            params,
        });
    }

    /**
     * VPC Peering 요청을 수락하거나 거절합니다.
     * @param {AcceptOrRejectVpcPeeringRequest} params - VPC Peering 수락/거절 요청 파라미터
     * @returns {Promise<AcceptOrRejectVpcPeeringResponse>} VPC Peering 수락/거절 결과
     *
     * @example
     * const response = await vpcApi.acceptOrRejectVpcPeering({
     *   regionCode: 'KR',
     *   vpcPeeringInstanceNo: 'peer-123',
     *   isAccept: true
     * });
     */
    async acceptOrRejectVpcPeering(
        params: AcceptOrRejectVpcPeeringRequest
    ): Promise<AcceptOrRejectVpcPeeringResponse> {
        return await this.client.request({
            method: 'POST',
            url: `${this.resourcePath}/acceptOrRejectVpcPeering`,
            params,
        });
    }

    /**
     * VPC Peering 인스턴스 목록을 조회합니다.
     * @param {GetVpcPeeringInstanceListRequest} params - VPC Peering 목록 조회 요청 파라미터
     * @returns {Promise<GetVpcPeeringInstanceListResponse>} VPC Peering 목록 조회 결과
     *
     * @example
     * const response = await vpcApi.getVpcPeeringInstanceList({
     *   regionCode: 'KR'
     * });
     */
    async getVpcPeeringInstanceList(
        params: GetVpcPeeringInstanceListRequest
    ): Promise<GetVpcPeeringInstanceListResponse> {
        return await this.client.request({
            method: 'GET',
            url: `${this.resourcePath}/getVpcPeeringInstanceList`,
            params,
        });
    }

    /**
     * VPC Peering 인스턴스의 상세 정보를 조회합니다.
     * @param {GetVpcPeeringInstanceDetailRequest} params - VPC Peering 상세 정보 조회 요청 파라미터
     * @returns {Promise<GetVpcPeeringInstanceDetailResponse>} VPC Peering 상세 정보 조회 결과
     *
     * @example
     * const response = await vpcApi.getVpcPeeringInstanceDetail({
     *   regionCode: 'KR',
     *   vpcPeeringInstanceNo: 'peer-123'
     * });
     */
    async getVpcPeeringInstanceDetail(
        params: GetVpcPeeringInstanceDetailRequest
    ): Promise<GetVpcPeeringInstanceDetailResponse> {
        return await this.client.request({
            method: 'GET',
            url: `${this.resourcePath}/getVpcPeeringInstanceDetail`,
            params,
        });
    }

    /**
     * VPC Peering 인스턴스를 삭제합니다.
     * @param {DeleteVpcPeeringInstanceRequest} params - VPC Peering 삭제 요청 파라미터
     * @returns {Promise<DeleteVpcPeeringInstanceResponse>} VPC Peering 삭제 결과
     *
     * @example
     * const response = await vpcApi.deleteVpcPeeringInstance({
     *   regionCode: 'KR',
     *   vpcPeeringInstanceNo: 'peer-123'
     * });
     */
    async deleteVpcPeeringInstance(
        params: DeleteVpcPeeringInstanceRequest
    ): Promise<DeleteVpcPeeringInstanceResponse> {
        return await this.client.request({
            method: 'POST',
            url: `${this.resourcePath}/deleteVpcPeeringInstance`,
            params,
        });
    }

    /**
     * VPC Peering 인스턴스의 설명을 수정합니다.
     * @param {SetVpcPeeringDescriptionRequest} params - VPC Peering 설명 수정 요청 파라미터
     * @returns {Promise<SetVpcPeeringDescriptionResponse>} VPC Peering 설명 수정 결과
     *
     * @example
     * const response = await vpcApi.setVpcPeeringDescription({
     *   regionCode: 'KR',
     *   vpcPeeringInstanceNo: 'peer-123',
     *   vpcPeeringDescription: 'New description'
     * });
     */
    async setVpcPeeringDescription(
        params: SetVpcPeeringDescriptionRequest
    ): Promise<SetVpcPeeringDescriptionResponse> {
        return await this.client.request({
            method: 'POST',
            url: `${this.resourcePath}/setVpcPeeringDescription`,
            params,
        });
    }
}
