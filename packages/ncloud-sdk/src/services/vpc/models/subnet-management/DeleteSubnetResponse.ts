import { SubnetList } from './SubnetList';
import { NcloudResponse } from '../../../price';

/**
 * Subnet 삭제 응답 타입
 */
export interface DeleteSubnetResponse extends NcloudResponse {
    /** Subnet 목록 정보 */
    subnetList: SubnetList;
}