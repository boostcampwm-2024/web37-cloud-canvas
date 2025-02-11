export type ChangeServerInstanceSpecRequest = {
    /**
     * 리전 코드
     * 스펙을 변경할 서버 인스턴스의 리전(Region) 결정 가능
     * regionCode는 getRegionList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist
     * @default getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 스펙을 변경할 서버 인스턴스 번호
     * serverInstanceNo는 getServerInstanceList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-getserverinstancelist
     */
    serverInstanceNo: string;

    /**
     * 서버 상품 코드
     * 변경할 서버의 스펙 결정
     * 서버 상품 중 동일한 상품 유형(productType), 동일한 디스크 상세 유형(diskDetailType[HDD, SSD]) 내에서만 변경 가능
     * serverProductCode는 getServerProductList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getserverproductlist
     */
    serverProductCode?: string;

    /**
     * 서버 스펙 코드
     * 변경할 서버의 스펙 결정
     * 서버 상품 중 동일한 상품 유형(productType), 동일한 디스크 상세 유형(diskDetailType[HDD, SSD]) 내에서만 변경 가능
     * serverSpecCode는 getServerSpecList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getserverspeclist
     * serverProductCode와 serverSpecCode는 둘 중 하나의 값은 필수
     */
    serverSpecCode?: string;

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
