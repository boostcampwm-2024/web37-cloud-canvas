/**
 * 로그인키 목록 조회 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-server-loginkey-getloginkeylist}
 * @example
 * {
 *   "requestId": "c3967303-ebed-433d-9cb7-e25750236a7c",
 *   "returnCode": 0,
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "loginKeyList": [
 *     {
 *       "fingerprint": "**:**:**:23:e4:fc:2f:35:21:1a:17:13:84:89:c1:e7",
 *       "keyName": "test-***",
 *       "createDate": "2020-08-11T10:49:11+0900"
 *     }
 *   ]
 * }
 */
export type GetLoginKeyListResponse = {
    requestId: string;
    returnCode: number;
    returnMessage: string;
    totalRows: number;
    loginKeyList: Array<{
        fingerprint: string;
        keyName: string;
        createDate: string;
    }>;
};
