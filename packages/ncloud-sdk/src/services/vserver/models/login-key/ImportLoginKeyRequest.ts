export type ImportLoginKeyRequest = {
    /**
     * 생성할 키 이름
     * Default : NAVER Cloud Platform가 자동으로 부여
     * Min : 3, Max : 30
     * 영어, 숫자, "-"의 특수문자만 허용하며 영어로 시작함
     * 영어 또는 숫자로 끝남
     */
    keyName?: string;

    /**
     * import 할 공개 키
     * ssh-keygen -t rsa -C "key-name" -f ~/.ssh/key-name 로 생성한 public 키
     * ssh-keygen 버전에 따라 다음 옵션들이 추가로 필요(-b 2048 -m PEM)
     */
    publicKey: string;

    /**
     * 응답 결과의 포맷 타입
     * @default xml
     */
    responseFormatType?: 'xml' | 'json';
};
