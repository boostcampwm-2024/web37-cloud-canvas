/**
 * 서버 인스턴스 정지 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-server-stopserverinstances}
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
 *         "code": "RUN",
 *         "codeName": "Server run state"
 *       },
 *       "serverInstanceOperation": {
 *         "code": "SHTDN",
 *         "codeName": "Server SHUTDOWN OP"
 *       },
 *       "serverInstanceStatusName": "shutting down"
 *     }
 *   ]
 * }
 */
export type StopServerInstancesResponse = {
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
