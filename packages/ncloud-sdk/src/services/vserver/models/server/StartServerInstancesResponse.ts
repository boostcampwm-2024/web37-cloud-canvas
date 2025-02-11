/**
 * 서버 인스턴스 시작 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-server-startserverinstances}
 * @example
 * {
 *   "returnCode": 0,
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "serverInstanceList": [
 *     {
 *       "serverInstanceNo": "***4299",
 *       "serverName": "test-***",
 *       "serverInstanceStatus": {
 *         "code": "NSTOP",
 *         "codeName": "Server normal stopped state"
 *       },
 *       "serverInstanceOperation": {
 *         "code": "START",
 *         "codeName": "Server START OP"
 *       },
 *       "serverInstanceStatusName": "booting"
 *     }
 *   ]
 * }
 */
export type StartServerInstancesResponse = {
    returnCode: number;
    returnMessage: string;
    totalRows: number;
    serverInstanceList: Array<{
        serverInstanceNo: string;
        serverName: string;
        serverInstanceStatus: {
            code: string;
            codeName: string;
        };
        serverInstanceOperation: {
            code: string;
            codeName: string;
        };
        serverInstanceStatusName: string;
    }>;
};
