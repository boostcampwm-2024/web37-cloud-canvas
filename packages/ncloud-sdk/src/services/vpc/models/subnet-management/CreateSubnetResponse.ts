import { NcloudResponse } from '../../../price';
import { SubnetList } from './SubnetList';

/**
 * Subnet 생성 응답 타입
 */
export interface CreateSubnetResponse extends NcloudResponse {
    /** Subnet 목록 정보 */
    subnetList: SubnetList;
}
