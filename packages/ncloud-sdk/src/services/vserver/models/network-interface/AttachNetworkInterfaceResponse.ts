/**
 * 네트워크 인터페이스 할당 응답
 * @example
 * {
 *   "requestId": "1a73c4ba-2a34-4849-bf2a-4d55fd5a7814",
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
 *       "code": "SET",
 *       "codeName": "set"
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
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-networkinterface-attachnetworkinterface}
 */
export type AttachNetworkInterfaceResponse = {
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
