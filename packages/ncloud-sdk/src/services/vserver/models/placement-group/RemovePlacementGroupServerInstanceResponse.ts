/**
 * 물리 배치 그룹 서버 인스턴스 제거 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-server-placementgroup-removeplacementgroupserverinstance}
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
 *       "placementGroupNo": "",
 *       "placementGroupName": ""
 *     }
 *   ]
 * }
 */
export type RemovePlacementGroupServerInstanceResponse = {
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
        placementGroupNo: string;
        placementGroupName: string;
    }>;
};
