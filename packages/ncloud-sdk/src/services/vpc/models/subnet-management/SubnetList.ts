import { Subnet } from './Subnet';

/**
 * 서브넷 리스트 객체
 * @see {@link https://api.ncloud-docs.com/docs/common-vapidatatype-subnetlist}
 */
export interface SubnetList {
    /**
     * 조회된 목록의 총 개수.
     * 페이징 처리 요청의 경우 전체 개수.
     *
     * Required
     */
    totalRows: number;

    /**
     * List<Subnet> 데이터 타입.
     * @see {@link Subnet}<br>
     *
     * Required
     */
    subnetList: Subnet[];
}
