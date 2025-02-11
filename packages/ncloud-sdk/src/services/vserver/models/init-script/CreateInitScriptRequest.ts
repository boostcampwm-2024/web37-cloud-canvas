/**
 * 초기화 스크립트 생성 요청 파라미터
 * @see {@link https://api.ncloud-docs.com/docs/compute-vserver-initscript-createinitscript}
 */
export type CreateInitScriptRequest = {
    /**
     * 리전 코드
     * 초기화 스크립트가 생성될 리전(Region) 결정 가능
     * regionCode는 {@link https://api.ncloud-docs.com/docs/compute-vserver-server-common-getregionlist} 액션을 통해 획득 가능
     * Default : getRegionList 조회 결과의 첫 번째 리전을 선택
     */
    regionCode?: string;

    /**
     * 생성할 초기화 스크립트 이름
     * Min : 3, Max : 30
     * 영어, 숫자, "-"의 특수문자만 허용하며 영어로 시작해야 함
     * 영어 또는 숫자로 끝나야 함
     * Default : NAVER Cloud Platform가 자동으로 부여
     */
    initScriptName?: string;

    /**
     * OS 유형 코드
     * 초기화 스크립트가 실행될 OS 환경 결정
     * Default : LNX
     */
    osTypeCode?: 'LNX' | 'WND';

    /**
     * 초기화 스크립트 내용
     * Min : 0, Max : 1024 KBytes
     * Linux 환경에서는 Python, Perl, Shell 등의 스크립트 사용 가능
     * 단, 첫 줄에 #!/usr/bin/env python, #!/bin/perl, #!/bin/bash 등과 같은 형태로 실행하고자 하는 스크립트 경로를 지정해야 함
     * Windows 환경에서는 Visual Basic 스크립트만 작성 가능
     * 단, 스크립트의 내용은 영문으로만 작성해야 함
     */
    initScriptContent: string;

    /**
     * 생성할 초기화 스크립트에 대한 설명
     * Min : 0, Max : 1000 Bytes
     */
    initScriptDescription?: string;

    /**
     * 응답 결과의 포맷 타입
     * Default : xml
     */
    responseFormatType?: 'xml' | 'json';
};
