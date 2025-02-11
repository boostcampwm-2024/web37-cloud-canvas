/**
 * 네트워크 인터페이스 생성 응답
 * @example
 * {
 *   "requestId": "18e8b085-c6bc-4953-9ec7-9cdf43236c59",
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
 *     "accessControlGroupNoList": ["***63"],
 *     "networkInterfaceDescription": "",
 *     "secondaryIpList": ["***.***.1.8", "***.***.1.9"]
 *   }]
 * }
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-networkinterface-createnetworkinterface}
 */
export type CreateNetworkInterfaceResponse = {
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
