export type CreateServerImageRequest = {
    /**
     * 리전 코드
     * 서버 이미지가 생성될 리전(Region) 결정 가능
     * regionCode는 getRegionList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist
     * @default getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 서버 인스턴스 번호
     * 원본 서버의 인스턴스 번호
     */
    serverInstanceNo?: string;

    /**
     * 서버 이미지 이름
     * Min : 3, Max : 30
     * 영어, 숫자, "-"의 특수문자만 허용하며 알파벳 문자로 시작함
     * 영어 또는 숫자로 끝남
     */
    serverImageName: string;

    /**
     * 생성할 서버 이미지에 대한 설명
     * Min : 0, Max : 1000 Bytes
     */
    serverImageDescription?: string;

    /**
     * 블록 스토리지 순서
     * Min : 1, Max : 20
     */
    'blockStorageList.N.order'?: number;

    /**
     * 블록 스토리지 스냅샷 인스턴스 번호
     * 서버 이미지를 생성할 대상이 되는 스냅샷 인스턴스 결정
     * snapshotInstanceNo는 getBlockStorageSnapshotInstanceList 액션을 통해 획득 가능
     * @link https://api.ncloud-docs.com/docs/compute-vserver-snapshot-getblockstoragesnapshotinstancelist
     */
    'blockStorageList.N.snapshotInstanceNo'?: string;

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
