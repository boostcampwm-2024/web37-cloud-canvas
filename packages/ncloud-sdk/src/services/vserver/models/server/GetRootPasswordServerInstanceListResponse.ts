/**
 * 서버 인스턴스 root 계정 비밀번호 리스트 조회 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-server-getrootpasswordserverinstancelist}
 * @example
 * {
 *   "requestId": "",
 *   "returnCode": 0,
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "rootPasswordServerInstanceList": [
 *     {
 *       "serverInstanceNo": "***4299",
 *       "rootPassword": "P3e7fLnd6=***"
 *     }
 *   ]
 * }
 */
export type GetRootPasswordServerInstanceListResponse = {
    requestId: string;
    returnCode: number;
    returnMessage: string;
    totalRows: number;
    rootPasswordServerInstanceList: Array<{
        serverInstanceNo: string;
        rootPassword: string;
    }>;
};
