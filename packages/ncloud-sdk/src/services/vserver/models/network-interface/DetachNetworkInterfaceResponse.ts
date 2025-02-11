/**
 * 네트워크 인터페이스 해제 응답
 * @example
 * {
 *   "requestId": "49ab504e-5b11-402e-9933-9f8ce7911d30",
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
 *       "code": "UNSET",
 *       "codeName": "unset"
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
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-networkinterface-detachnetworkinterface}
 */
export type DetachNetworkInterfaceResponse = {
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
