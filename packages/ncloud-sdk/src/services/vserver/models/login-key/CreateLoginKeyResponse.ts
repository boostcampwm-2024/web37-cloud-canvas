/**
 * 로그인키 생성 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-server-loginkey-createloginkey}
 * @example
 * {
 *   "requestId": "7dbc947d-669d-4245-9d68-16d1983c4dc3",
 *   "returnCode": 0,
 *   "returnMessage": "success",
 *   "keyName": "test-***",
 *   "privateKey": "-----BEGIN RSA PRIVATE KEY-----\n..."
 * }
 */
export type CreateLoginKeyResponse = {
    requestId: string;
    returnCode: number;
    returnMessage: string;
    keyName: string;
    privateKey: string;
};
