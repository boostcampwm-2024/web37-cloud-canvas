/**
 * VPC Peering 인스턴스 생성 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/networking-vpc-vpcpeering-createvpcpeeringinstance}
 */
export type CreateVpcPeeringInstanceRequest = {
    /**
     * 리전 코드
     * VPC Peering 인스턴스를 생성하려는 리전(Region) 결정
     * @description regionCode는 getRegionList 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * VPC Peering 이름
     * Min : 3, Max : 30
     * 영문자, 숫자, 특수문자 '-'를 허용하며 영문자로 시작해서 영문자 또는 숫자로 끝나야 함
     * Default : NAVER Cloud Platform이 자동으로 부여
     */
    vpcPeeringName?: string;

    /**
     * Peering 요청을 보내는 VPC 번호
     * @description getVpcList 액션을 통해 획득 가능
     */
    sourceVpcNo: string;

    /**
     * Peering 요청을 받는 VPC 번호
     * @description 요청을 받는 계정에서 getVpcList 액션을 통해 획득 가능
     * @description Peering 요청을 보내는 VPC와 요청을 받는 VPC의 IPv4 CIDR 블록이 겹치면 VPC Peering으로 연결할 수 없음
     */
    targetVpcNo: string;

    /**
     * Peering 요청을 받는 VPC 이름
     * @description Peering 요청을 받는 계정이 보내는 계정과 다른 경우에 요청을 받는 VPC의 이름을 입력해야 함
     */
    targetVpcName?: string;

    /**
     * Peering 요청을 받는 VPC 소유자 ID (이메일 형식)
     * @description 요청을 받는 계정이 보내는 계정과 다른 경우에 요청을 받는 계정을 입력해야 함
     */
    targetVpcLoginId?: string;

    /**
     * VPC Peering 설명
     * Min : 0, Max : 1000 Bytes
     */
    vpcPeeringDescription?: string;

    /**
     * 응답 결과의 포맷 타입
     * Options : xml | json
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
};

