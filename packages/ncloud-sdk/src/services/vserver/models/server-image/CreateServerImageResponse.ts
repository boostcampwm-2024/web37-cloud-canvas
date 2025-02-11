/**
 * 서버 이미지 생성 응답
 * @see {@link https://api.ncloud-docs.com/docs/createserverimage}
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
 *       "serverImageType": {
 *         "code": "NCP",
 *         "codeName": "NCP Server Image"
 *       },
 *       "serverImageStatus": {
 *         "code": "INIT",
 *         "codeName": "Server INIT state"
 *       }
 *     }
 *   ]
 * }
 */
export type CreateServerImageResponse = {
    requestId: string;
    returnCode: number;
    returnMessage: string;
    totalRows: number;
    serverImageList: Array<{
        serverImageNo: string;
        serverImageName: string;
        serverImageDescription: string;
        serverImageType: {
            code: string;
            codeName: string;
        };
        serverImageStatus: {
            code: string;
            codeName: string;
        };
    }>;
};
