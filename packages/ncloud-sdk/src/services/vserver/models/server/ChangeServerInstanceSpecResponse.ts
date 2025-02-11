/**
 * 서버 인스턴스 스펙 변경 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-server-changeserverinstancespec}
 * @example
 * {
 *   "requestId": "d273a622-50b6-477f-9876-e4ed6845b3eb",
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
 *         "code": "CHNG",
 *         "codeName": "Server SPEC CHANGE OP"
 *       },
 *       "serverInstanceStatusName": "changingSpec",
 *       "serverProductCode": "SVR.VSVR.STAND.C002.M008.NET.SSD.B050.G001"
 *     }
 *   ]
 * }
 */
export type ChangeServerInstanceSpecResponse = {
    requestId: string;
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
        serverProductCode: string;
    }>;
};
