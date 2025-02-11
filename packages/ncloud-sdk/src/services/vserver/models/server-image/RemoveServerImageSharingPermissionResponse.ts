/**
 * 서버 이미지 공유 권한 제거 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-serverimage-removeserveimagesharingpermission}
 * @example
 * {
 *   "requestId": "",
 *   "returnCode": 0,
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "serverImageList": [
 *     {
 *       "serverImageNo": "***5847",
 *       "serverImageName": "test-***",
 *       "shareStatus": {
 *         "code": "SHARE",
 *         "codeName": "NSI Share SHARE State"
 *       },
 *       "sharedLoginIdList": []
 *     }
 *   ]
 * }
 */
export type RemoveServerImageSharingPermissionResponse = {
    requestId: string;
    returnCode: number;
    returnMessage: string;
    totalRows: number;
    serverImageList: Array<{
        serverImageNo: string;
        serverImageName: string;
        shareStatus: {
            code: string;
            codeName: string;
        };
        sharedLoginIdList: string[];
    }>;
};
