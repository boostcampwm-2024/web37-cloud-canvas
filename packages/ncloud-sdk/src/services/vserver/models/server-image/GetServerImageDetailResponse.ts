/**
 * 서버 이미지 상세 정보 조회 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-serverimage-getserverimagedetail}
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
 *       "serverImageDescription": "",
 *       "serverImageProductCode": "SW.VSVR.OS.LNX64.CNTOS.0703.B050",
 *       "serverImageStatus": {
 *         "code": "CREAT",
 *         "codeName": "Server created state"
 *       },
 *       "serverImageOperation": {
 *         "code": "NULL",
 *         "codeName": "NULL OP"
 *       },
 *       "serverImageStatusName": "created",
 *       "createDate": "2020-08-24T10:34:27+0900"
 *     }
 *   ]
 * }
 */
export type GetServerImageDetailResponse = {
    requestId: string;
    returnCode: number;
    returnMessage: string;
    totalRows: number;
    serverImageList: Array<{
        serverImageNo: string;
        serverImageName: string;
        serverImageDescription: string;
        serverImageProductCode: string;
        serverImageStatus: {
            code: string;
            codeName: string;
        };
        serverImageOperation: {
            code: string;
            codeName: string;
        };
        serverImageStatusName: string;
        createDate: string;
    }>;
};
