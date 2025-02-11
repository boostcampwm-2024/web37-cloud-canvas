/**
 * 블록 스토리지 속성 변경 응답 타입
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-storage-changeblockstorageinstance}
 */
export type ChangeBlockStorageInstanceResponse = {
    /** 요청 ID */
    requestId: string;

    /** 반환 코드 */
    returnCode: string;

    /** 반환 메시지 */
    returnMessage: string;

    /** 총 행 개수 */
    totalRows: number;

    /** 블록 스토리지 인스턴스 목록 */
    blockStorageInstanceList: {
        /** 블록 스토리지 인스턴스 정보 */
        blockStorageInstance: {
            /** 블록 스토리지 인스턴스 번호 */
            blockStorageInstanceNo: string;

            /** 서버 인스턴스 번호 */
            serverInstanceNo: string;

            /** 블록 스토리지 이름 */
            blockStorageName: string;

            /** 블록 스토리지 타입 */
            blockStorageType: {
                code: string;
                codeName: string;
            };

            /** 블록 스토리지 크기 (바이트) */
            blockStorageSize: number;

            /** 디바이스 이름 */
            deviceName: string;

            /** 블록 스토리지 상품 코드 */
            blockStorageProductCode: string;

            /** 블록 스토리지 인스턴스 상태 */
            blockStorageInstanceStatus: {
                code: string;
                codeName: string;
            };

            /** 블록 스토리지 인스턴스 작업 */
            blockStorageInstanceOperation: {
                code: string;
                codeName: string;
            };

            /** 블록 스토리지 인스턴스 상태 이름 */
            blockStorageInstanceStatusName: string;

            /** 생성 일자 */
            createDate: string;

            /** 블록 스토리지 설명 */
            blockStorageDescription: string;

            /** 블록 스토리지 디스크 타입 */
            blockStorageDiskType: {
                code: string;
                codeName: string;
            };

            /** 블록 스토리지 디스크 상세 타입 */
            blockStorageDiskDetailType: {
                code: string;
                codeName: string;
            };

            /** 최대 IOPS 처리량 */
            maxIopsThroughput: number;

            /** 볼륨 암호화 여부 */
            isEncryptedVolume: boolean;

            /** ZONE 코드 */
            zoneCode: string;

            /** 리전 코드 */
            regionCode: string;
        };
    }[];
};