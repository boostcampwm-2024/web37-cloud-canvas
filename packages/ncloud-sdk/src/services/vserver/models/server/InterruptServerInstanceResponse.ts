/**
 * 서버 인스턴스 인터럽트 실행 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-server-interruptserverinstance}
 * @example
 * {
 *   "returnCode": 0,
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "serverInstanceList": [
 *     {
 *       "serverInstanceNo": "4299",
 *       "serverName": "test-***",
 *       "serverInstanceStatus": {
 *         "code": "RUN",
 *         "codeName": "Server run state"
 *       },
 *       "serverInstanceOperation": {
 *         "code": "SHTDN",
 *         "codeName": "Server SHUTDOWN OP"
 *       },
 *       "serverInstanceStatusName": "setting up"
 *     }
 *   ]
 * }
 */
export type InterruptServerInstanceResponse = {
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
