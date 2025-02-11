/**
 * root 계정 비밀번호 조회 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-server-getrootpassword}
 * @example
 * {
 *   "requestId": "",
 *   "returnCode": 0,
 *   "returnMessage": "success",
 *   "rootPassword": "P3e7fLnd6=***"
 * }
 */
export type GetRootPasswordResponse = {
    requestId: string;
    returnCode: number;
    returnMessage: string;
    rootPassword: string;
};
