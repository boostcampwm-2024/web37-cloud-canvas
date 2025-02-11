/**
 * 네트워크 인터페이스 상세 정보 조회 응답
 * @example
 * {
 *   "requestId": "b401a7ca-bcf9-48c2-bb31-c3b7ef5317ca",
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
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-networkinterface-getnetworkinterfacedetail}
 */
export type GetNetworkInterfaceDetailResponse = {
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
            code: 'USED' | 'NOTUSED';
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
