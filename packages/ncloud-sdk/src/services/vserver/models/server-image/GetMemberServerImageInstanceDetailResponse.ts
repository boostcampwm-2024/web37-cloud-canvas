/**
 * 회원 서버 이미지 인스턴스 상세 정보 조회 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-serverimage-getmemberserverimageinstancedetail}
 * @example
 * {
 *   "requestId": "",
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
 *         "code": "CREAT",
 *         "codeName": "NSI CREATED state"
 *       }
 *     }
 *   ]
 * }
 */
export type GetMemberServerImageInstanceDetailResponse = {
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
