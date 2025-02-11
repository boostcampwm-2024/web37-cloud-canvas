/**
 * 회원 서버 이미지 인스턴스 삭제 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-serverimage-deletememberserverimageinstances}
 * @example
 * {
 *   "requestId": "c03165bc-06e7-45d2-a0f5-8965ff1d8f29",
 *   "returnCode": 0,
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "memberServerImageInstanceList": [
 *     {
 *       "memberServerImageInstanceNo": "***5847",
 *       "memberServerImageName": "test-***",
 *       "memberServerImageDescription": "",
 *       "originalServerInstanceNo": "***4299",
 *       "memberServerImageInstanceStatus": {
 *         "code": "CREAT",
 *         "codeName": "NSI CREATED state"
 *       },
 *       "memberServerImageInstanceOperation": {
 *         "code": "TERMT",
 *         "codeName": "NSI TERMINATE OP"
 *       },
 *       "memberServerImageInstanceStatusName": "terminating"
 *     }
 *   ]
 * }
 */
export type DeleteMemberServerImageInstancesResponse = {
    requestId: string;
    returnCode: number;
    returnMessage: string;
    totalRows: number;
    memberServerImageInstanceList: Array<{
        memberServerImageInstanceNo: string;
        memberServerImageName: string;
        memberServerImageDescription: string;
        originalServerInstanceNo: string;
        memberServerImageInstanceStatus: {
            code: string;
            codeName: string;
        };
        memberServerImageInstanceOperation: {
            code: string;
            codeName: string;
        };
        memberServerImageInstanceStatusName: string;
    }>;
};
