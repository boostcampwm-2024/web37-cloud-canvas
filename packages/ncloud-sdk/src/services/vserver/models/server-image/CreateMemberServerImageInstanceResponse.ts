/**
 * 회원 서버 이미지 인스턴스 생성 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-serverimage-creatememberserverimageinstance}
 * @example
 * {
 *   "requestId": "60036867-16b1-42c7-bf64-8e25b14e844d",
 *   "returnCode": 0,
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "memberServerImageInstanceList": [
 *     {
 *       "memberServerImageInstanceNo": "***5847",
 *       "memberServerImageName": "test-***",
 *       "memberServerImageDescription": "",
 *       "originalServerInstanceNo": "***4299",
 *       "originalServerImageProductCode": "SW.VSVR.OS.LNX64.CNTOS.0703.B050",
 *       "memberServerImageInstanceStatus": {
 *         "code": "INIT",
 *         "codeName": "NSI INIT state"
 *       }
 *     }
 *   ]
 * }
 */
export type CreateMemberServerImageInstanceResponse = {
    requestId: string;
    returnCode: number;
    returnMessage: string;
    totalRows: number;
    memberServerImageInstanceList: Array<{
        memberServerImageInstanceNo: string;
        memberServerImageName: string;
        memberServerImageDescription: string;
        originalServerInstanceNo: string;
        originalServerImageProductCode: string;
        memberServerImageInstanceStatus: {
            code: string;
            codeName: string;
        };
    }>;
};
