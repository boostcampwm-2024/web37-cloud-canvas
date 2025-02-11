export type CreateServerInstancesRequest = {
    /**
     * 리전 코드
     * 서버 인스턴스가 생성될 리전(Region) 결정 가능
     * regionCode는 getRegionList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist
     * @default getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 회원 서버 이미지 인스턴스 번호
     * 직접 생성한 서버 이미지로부터 서버를 생성시 입력
     * 회원 서버 이미지 인스턴스 번호와 서버 이미지 상품 코드 중 반드시 한 개를 필수로 입력
     * memberServerImageInstanceNo는 getMemberServerImageInstanceList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-serverimage-getmemberserverimageinstancelist
     */
    memberServerImageInstanceNo?: string;

    /**
     * 서버 이미지 상품 코드
     * 새로운 서버 이미지를 이용하여 서버를 생성시 입력
     * 회원 서버 이미지 인스턴스 번호와 서버 이미지 상품 코드 중 반드시 한개를 필수로 입력
     * serverImageProductCode는 getServerImageProductList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getserverimageproductlist
     */
    serverImageProductCode?: string;

    /**
     * VPC 번호
     * 서버 인스턴스가 생성될 VPC 결정
     * vpcNo는 getVpcList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/networking-vpc-vpcmanagement-getvpclist
     */
    vpcNo: string;

    /**
     * Subnet 번호
     * 생성할 서버 인스턴스에서 기본 네트워크 인터페이스의 Subnet을 결정
     * subnetNo는 getSubnetList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/networking-vpc-subnetmanagement-getsubnetlist
     */
    subnetNo: string;

    /**
     * 서버 이름
     * @default NAVER Cloud Platform가 자동으로 부여
     */
    serverName?: string;

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
