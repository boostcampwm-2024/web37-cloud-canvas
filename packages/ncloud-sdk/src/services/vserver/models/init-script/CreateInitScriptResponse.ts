/**
 * 초기화 스크립트 생성 응답
 * @example
 * {
 *   "returnCode": 0,
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "initScriptList": [{
 *     "initScriptNo": "***44",
 *     "initScriptName": "test-***",
 *     "createDate": "2020-08-20T15:03:37+0900",
 *     "initScriptDescription": "",
 *     "initScriptContent": "#!/bin/bash",
 *     "osType": {
 *       "code": "LNX",
 *       "codeName": "LINUX"
 *     }
 *   }]
 * }
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-initscript-createinitscript}
 */
export type CreateInitScriptResponse = {
    returnCode: number;
    returnMessage: string;
    totalRows: number;
    initScriptList: Array<{
        initScriptNo: string;
        initScriptName: string;
        createDate: string;
        initScriptDescription: string;
        initScriptContent: string;
        osType: {
            code: 'LNX' | 'WND';
            codeName: 'LINUX' | 'WINDOWS';
        };
    }>;
};
