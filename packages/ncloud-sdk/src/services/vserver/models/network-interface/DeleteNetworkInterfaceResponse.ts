/**
 * 네트워크 인터페이스 삭제 응답
 * @example
 * {
 *   "requestId": "500f0f2b-5ce9-4926-b8bb-ad637f465a70",
 *   "returnCode": 0,
 *   "returnMessage": "success",
 *   "totalRows": 1,
 *   "networkInterfaceList": [{
 *     "networkInterfaceNo": "***87",
 *     "networkInterfaceName": "test-***",
 *     "subnetNo": "***43",
 *     "deleteOnTermination": false,
 *     "isDefault": false,
 *     "deviceName": "eth1",
 *     "networkInterfaceStatus": {
 *       "code": "USED",
 *       "codeName": "used"
 *     },
 *     "instanceType": {
 *       "code": "VSVR",
 *       "codeName": "Server (VPC)"
 *     },
 *     "instanceNo": "***4299",
 *     "ip": "***.***.1.7",
 *     "macAddress": "F2:20:***:***:8A:F5",
 *     "accessControlGroupNoList": [],
 *     "networkInterfaceDescription": "",
 *     "secondaryIpList": []
 *   }]
 * }
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-networkinterface-deletenetworkinterface}
 */
export type DeleteNetworkInterfaceResponse = {
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
