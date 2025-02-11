/**
 * 로그인키 삭제 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-server-loginkey-deleteloginkeys}
 * @example
 * {
 *   "requestId": "a4cc5d5d-9add-4c4a-ac40-450d19bcd3a8",
 *   "returnCode": 0,
 *   "returnMessage": "success"
 * }
 */
export type DeleteLoginKeysResponse = {
    requestId: string;
    returnCode: number;
    returnMessage: string;
};
