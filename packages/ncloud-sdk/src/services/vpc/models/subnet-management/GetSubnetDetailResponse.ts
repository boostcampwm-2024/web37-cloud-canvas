import { NcloudResponse } from '../../../price';
import { SubnetList } from './SubnetList';

/**
 * Subnet 상세 정보 조회 응답 타입
 */
export interface GetSubnetDetailResponse extends NcloudResponse {
    /** Subnet 목록 정보 */
    subnetList: SubnetList;
}
