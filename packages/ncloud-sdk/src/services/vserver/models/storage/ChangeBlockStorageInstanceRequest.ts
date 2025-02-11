/**
 * 블록 스토리지 속성 변경 요청 타입
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-storage-changeblockstorageinstance}
 */
export type ChangeBlockStorageInstanceRequest = {
    /**
     * 리전 코드
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 볼륨 사이즈를 변경할 블록 스토리지 인스턴스 번호
     * @link https://api.ncloud-docs.com/docs/compute-vserver-storage-getblockstorageinstancelist 액션을 통해 획득 가능
     */
    blockStorageInstanceNo: string;

    /**
     * 변경할 블록 스토리지 사이즈
     * XEN : Min 10, Max 2000 GB
     * KVM : Min 10, Max 16380 GB
     * 10GB 단위 입력
     * 볼륨 사이즈는 확대만 가능하며, 축소 기능은 제공하지 않음
     */
    blockStorageSize: number;

    /** 응답 포맷 */
    responseFormatType?: 'xml' | 'json';
};