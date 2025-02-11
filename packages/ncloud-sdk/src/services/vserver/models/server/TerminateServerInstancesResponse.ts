/**
 * 서버 인스턴스 반납 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-server-terminateserverinstances}
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
 *         "code": "TERMT",
 *         "codeName": "Server TERMINATE OP"
 *       },
 *       "serverInstanceStatusName": "terminating"
 *     }
 *   ]
 * }
 */
export type TerminateServerInstancesResponse = {
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
