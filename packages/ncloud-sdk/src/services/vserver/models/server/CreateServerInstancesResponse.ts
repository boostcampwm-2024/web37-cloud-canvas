/**
 * 서버 인스턴스 생성 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-server-createserverinstances}
 * @example
 * {
 *   "requestId": "63a6fdb1-5430-417f-98a8-d20cacc83581",
 *   "returnCode": 0,
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "serverInstanceList": [
 *     {
 *       "serverInstanceNo": "***4299",
 *       "serverName": "test-***",
 *       "serverImageProductCode": "SW.VSVR.OS.LNX64.CNTOS.0703.B050",
 *       "serverProductCode": "SVR.VSVR.STAND.C002.M004.NET.SSD.B050.G001",
 *       "serverInstanceStatus": {
 *         "code": "INIT",
 *         "codeName": "Server init state"
 *       }
 *     }
 *   ]
 * }
 */
export type CreateServerInstancesResponse = {
    requestId: string;
    returnCode: number;
    returnMessage: string;
    totalRows: number;
    serverInstanceList: Array<{
        serverInstanceNo: string;
        serverName: string;
        serverImageProductCode: string;
        serverProductCode: string;
        serverInstanceStatus: {
            code: string;
            codeName: string;
        };
    }>;
};
