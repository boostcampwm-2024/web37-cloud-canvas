/**
 * 회원 서버 이미지 공유 권한 제거 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-serverimage-removememberserverimagesharingpermission}
 * @example
 * {
 *   "requestId": "",
 *   "returnCode": 0,
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "memberServerImageInstanceList": [
 *     {
 *       "memberServerImageInstanceNo": "***4605",
 *       "memberServerImageName": "test-***",
 *       "memberServerImageInstanceStatus": {
 *         "code": "CREAT",
 *         "codeName": "NSI CREATED state"
 *       },
 *       "shareStatus": {
 *         "code": "NULL",
 *         "codeName": "NSI Share NULL State"
 *       },
 *       "sharedLoginIdList": []
 *     }
 *   ]
 * }
 */
export type RemoveMemberServerImageSharingPermissionResponse = {
    requestId: string;
    returnCode: number;
    returnMessage: string;
    totalRows: number;
    memberServerImageInstanceList: Array<{
        memberServerImageInstanceNo: string;
        memberServerImageName: string;
        memberServerImageInstanceStatus: {
            code: string;
            codeName: string;
        };
        shareStatus: {
            code: string;
            codeName: string;
        };
        sharedLoginIdList: string[];
    }>;
};
