/**
 * 회원 서버 이미지 공유 권한 추가 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-serverimage-addmemberserverimagesharingpermission}
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
 *         "code": "SHARE",
 *         "codeName": "NSI Share SHARE State"
 *       },
 *       "sharedLoginIdList": ["test-***@naver.com"]
 *     }
 *   ]
 * }
 */
export type AddMemberServerImageSharingPermissionResponse = {
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
