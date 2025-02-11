/**
 * 서버 이미지 삭제 응답
 * @see {@link https://api.ncloud-docs.com/docs/deleteserverimage}
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
 *       "serverImageStatus": {
 *         "code": "TERMT",
 *         "codeName": "Server TERMINATE state"
 *       }
 *     }
 *   ]
 * }
 */
export type DeleteServerImageResponse = {
    requestId: string;
    returnCode: number;
    returnMessage: string;
    totalRows: number;
    serverImageList: Array<{
        serverImageNo: string;
        serverImageName: string;
        serverImageStatus: {
            code: string;
            codeName: string;
        };
    }>;
};
