export type DeleteLoginKeysRequest = {
    /**
     * 삭제할 키 이름 리스트
     * keyName은 getLoginKeyList 액션을 통해 획득 가능
     * ex) keyNameList.1=key1&keyNameList.2=key2
     * @link https://api.ncloud-docs.com/docs/compute-vserver-server-loginkey-getloginkeylist
     */
    keyNameList: string[];

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
