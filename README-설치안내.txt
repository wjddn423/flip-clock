플립 시계 v6.1 배포 안내

1. 이 ZIP을 PC에서 압축 해제합니다.
2. GitHub 저장소의 Add file > Upload files에서 index.html, manifest.json, sw.js, version.json, icon-192.png, icon-512.png를 선택합니다. (ZIP 자체는 업로드하지 않습니다.)
3. Commit changes를 누릅니다.
4. Settings > Pages > Build and deployment > Source: Deploy from a branch > Branch: main / (root) > Save.
5. 수 분 후 https://wjddn423.github.io/flip-clock/ 에서 접속을 확인합니다.

업데이트 테스트: version.json의 version만 바꾸면 알림은 뜨지만 실제 프로그램이 변경되지는 않습니다. index.html도 함께 수정해 새 버전 번호를 일치시키고 sw.js의 CACHE 이름도 바꿔 배포하세요. 업데이트 알림은 최대 약 5분 간격으로 확인합니다.

주의: 오래된 Android 6.0.1 브라우저는 Service Worker 및 설치 기능이 지원되지 않을 수 있습니다. 이 경우 온라인에서 페이지를 새로고침하여 최신 버전을 받는 방식으로 사용합니다. 기기별 설정은 브라우저 저장소에 따로 보관됩니다.
