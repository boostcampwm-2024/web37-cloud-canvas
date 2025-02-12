import { SubnetList } from './SubnetList';
import { NcloudResponse } from '../../../price';

/**
 * Subnet 목록 조회 응답 타입
 */
export interface GetSubnetListResponse extends NcloudResponse {
    /** Subnet 목록 정보 */
    subnetList: SubnetList;
}