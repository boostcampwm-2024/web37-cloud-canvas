/**
 * 서버 인스턴스 재시작 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-server-rebootserverinstances}
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
 *         "code": "RESTA",
 *         "codeName": "Server RESTART OP"
 *       },
 *       "serverInstanceStatusName": "rebooting"
 *     }
 *   ]
 * }
 */
export type RebootServerInstancesResponse = {
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
