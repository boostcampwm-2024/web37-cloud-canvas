/**
 * 네트워크 인터페이스 보조 IP 해제 응답
 * @example
 * {
 *   "requestId": "73caedc4-073d-4001-a363-efedd90831be",
 *   "returnCode": 0,
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "networkInterfaceList": [{
 *     "networkInterfaceNo": "***87",
 *     "networkInterfaceName": "test-***",
 *     "subnetNo": "***43",
 *     "deleteOnTermination": true,
 *     "isDefault": true,
 *     "deviceName": "eth0",
 *     "networkInterfaceStatus": {
 *       "code": "USED",
 *       "codeName": "used"
 *     },
 *     "instanceType": {
 *       "code": "VSVR",
 *       "codeName": "Server (VPC)"
 *     },
 *     "instanceNo": "***4299",
 *     "ip": "***.***.1.6",
 *     "macAddress": "F2:20:***:***:8A:F5",
 *     "accessControlGroupNoList": ["***63"],
 *     "networkInterfaceDescription": "",
 *     "secondaryIpList": ["***.***.1.7"]
 *   }]
 * }
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-networkinterface-unassignsecondaryips}
 */
export type UnassignSecondaryIpsResponse = {
    requestId: string;
    returnCode: number;
    returnMessage: string;
    totalRows: number;
    networkInterfaceList: Array<{
        networkInterfaceNo: string;
        networkInterfaceName: string;
        subnetNo: string;
        deleteOnTermination: boolean;
        isDefault: boolean;
        deviceName: string;
        networkInterfaceStatus: {
            code: string;
            codeName: string;
        };
        instanceType: {
            code: string;
            codeName: string;
        };
        instanceNo: string;
        ip: string;
        macAddress: string;
        accessControlGroupNoList: string[];
        networkInterfaceDescription: string;
        secondaryIpList: string[];
    }>;
};
