/**
 * 물리 배치 그룹 리스트 조회 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-server-placementgroup-getplacementgrouplist}
 * @example
 * {
 *   "requestId": "",
 *   "returnCode": 0,
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "placementGroupList": [
 *     {
 *       "placementGroupNo": "***61",
 *       "placementGroupName": "test-***",
 *       "placementGroupType": {
 *         "code": "AA",
 *         "codeName": "Anti-Affinity"
 *       }
 *     }
 *   ]
 * }
 */
export type GetPlacementGroupListResponse = {
    requestId: string;
    returnCode: number;
    returnMessage: string;
    totalRows: number;
    placementGroupList: Array<{
        placementGroupNo: string;
        placementGroupName: string;
        placementGroupType: {
            code: string;
            codeName: string;
        };
    }>;
};
