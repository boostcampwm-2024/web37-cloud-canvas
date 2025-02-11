/**
 * 로그인 키 import 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-server-loginkey-importloginkey}
 * @example
 * {
 *   "requestId": "46b585b6-fb86-4cea-8913-9552e6cb8cce",
 *   "returnCode": 0,
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "loginKeyList": [
 *     {
 *       "fingerprint": "-",
 *       "keyName": "test-***",
 *       "createDate": "2020-08-11T11:47:34+0900"
 *     }
 *   ]
 * }
 */
export type ImportLoginKeyResponse = {
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
