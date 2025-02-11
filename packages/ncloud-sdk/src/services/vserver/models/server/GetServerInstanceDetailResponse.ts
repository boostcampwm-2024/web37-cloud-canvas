/**
 * 서버 인스턴스 상세 정보 조회 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-server-getserverinstancedetail}
 * @example
 * {
 *   "requestId": "",
 *   "returnCode": 0,
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "serverInstanceList": [
 *     {
 *       "serverInstanceNo": "***4299",
 *       "serverName": "test-***",
 *       "serverDescription": "",
 *       "cpuCount": 2,
 *       "memorySize": 4294967296,
 *       "platformType": {
 *         "code": "LNX64",
 *         "codeName": "Linux 64 Bit"
 *       },
 *       "publicIp": "***.***.111.215",
 *       "privateIp": "***.***.1.6",
 *       "serverInstanceStatus": {
 *         "code": "RUN",
 *         "codeName": "Server run state"
 *       }
 *     }
 *   ]
 * }
 */
export type GetServerInstanceDetailResponse = {
    requestId: string;
    returnCode: number;
    returnMessage: string;
    totalRows: number;
    serverInstanceList: Array<{
        serverInstanceNo: string;
        serverName: string;
        serverDescription: string;
        cpuCount: number;
        memorySize: number;
        platformType: {
            code: string;
            codeName: string;
        };
        publicIp: string;
        privateIp: string;
        serverInstanceStatus: {
            code: string;
            codeName: string;
        };
    }>;
};
