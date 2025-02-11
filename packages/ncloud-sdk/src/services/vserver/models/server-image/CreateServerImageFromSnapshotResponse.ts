/**
 * 스냅샷으로부터 서버 이미지 생성 응답
 * @see {@link https://api.ncloud-docs.com/docs/createserverimagefromsnapshot}
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
 *       "serverImageStatus": {
 *         "code": "INIT",
 *         "codeName": "Server INIT state"
 *       },
 *       "serverImageOperation": {
 *         "code": "CREAT",
 *         "codeName": "Server CREAT OP"
 *       }
 *     }
 *   ]
 * }
 */
export type CreateServerImageFromSnapshotResponse = {
    requestId: string;
    returnCode: number;
    returnMessage: string;
    totalRows: number;
    serverImageList: Array<{
        serverImageNo: string;
        serverImageName: string;
        serverImageDescription: string;
        serverImageStatus: {
            code: string;
            codeName: string;
        };
        serverImageOperation: {
            code: string;
            codeName: string;
        };
    }>;
};
