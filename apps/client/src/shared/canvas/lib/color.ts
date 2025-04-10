const pastelColors = [
    '#C5A3FF', // 라일락
    '#FFB3BA', // 라이트 핑크
    '#90EE90', // 라이트 그린
    '#FFCC99', // 피치
    '#AEC6CF', // 파스텔 블루
    '#B19CD9', // 라벤더
    '#FFB347', // 파스텔 오렌지
    '#77DD77', // 민트 그린
    '#FF9AA2', // 살몬 핑크
    '#A6D0E4', // 스카이 블루
    '#FFD1DC', // 밀크 핑크
    '#C3B1E1', // 위스테리아
    '#FDCB6E', // 파스텔 골드
    '#FFB6C1', // 라이트 핑크
    '#87CEFA', // 라이트 스카이 블루
    '#F8C8DC', // 코튼 캔디
    '#DEA5A4', // 더스티 로즈
    '#AEC6CF', // 퀸 블루
    '#B5EAD7', // 민트
    '#E2F0CB', // 연한 옐로우 그린
    '#C7CEEA', // 페리윙클
    '#FF9AA2', // 메론
    '#FFCBA4', // 피치 퍼프
    '#A2D5F2', // 파스텔 블루
    '#D9A6B3', // 라벤더 핑크
    '#AF9EC4', // 보라
    '#98C1A9', // 시 그린
    '#F6A6B2', // 매운 핑크
    '#F2DFD7', // 더스티 로즈
    '#FFC0CB', // 핑크
];

export const getRandomPastelColor = () => {
    return pastelColors[Math.floor(Math.random() * pastelColors.length)];
};
