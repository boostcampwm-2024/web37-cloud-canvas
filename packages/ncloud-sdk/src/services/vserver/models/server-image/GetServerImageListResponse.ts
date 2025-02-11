/**
 * 서버 이미지 리스트 조회 응답
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-serverimage-getserverimagelist}
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
 *       }
 *     }
 *   ]
 * }
 */
export type GetServerImageListResponse = {
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
    }>;
};
