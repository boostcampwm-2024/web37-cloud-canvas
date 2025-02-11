/**
 * 물리 배치 그룹 서버 인스턴스 추가 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-server-placementgroup-addplacementgroupserverinstance}
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
 *       "placementGroupNo": "***61",
 *       "placementGroupName": "test-***"
 *     }
 *   ]
 * }
 */
export type AddPlacementGroupServerInstanceResponse = {
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
