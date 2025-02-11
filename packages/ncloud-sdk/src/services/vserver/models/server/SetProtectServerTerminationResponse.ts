/**
 * 서버 반납 보호 설정 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-server-setprotectservertermination}
 * @example
 * {
 *   "returnCode": 0,
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "serverInstanceList": [
 *     {
 *       "serverInstanceNo": "***4299",
 *       "serverName": "test-***",
 *       "isProtectServerTermination": true
 *     }
 *   ]
 * }
 */
export type SetProtectServerTerminationResponse = {
    returnCode: number;
    returnMessage: string;
    totalRows: number;
    serverInstanceList: Array<{
        serverInstanceNo: string;
        serverName: string;
        isProtectServerTermination: boolean;
    }>;
};
