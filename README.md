# 내 뱅킹 데모 (KB 스타일)

어디서든 폰으로 열 수 있게 Vercel에 배포하는 프로젝트. ※ 실제 은행과 무관한 데모 화면입니다.

---

## ✅ Vercel 배포 (어디서든 폰으로 보기 — 추천)

### 방법 A) GitHub 연결 (제일 깔끔)
1. 이 폴더를 GitHub 새 저장소에 올리기 (git push 는 세 줄 따로 실행)

       git init
       git add .
       git commit -m "kb app"

       git branch -M main

       git remote add origin https://github.com/<내계정>/kb-app.git
       git push -u origin main

2. https://vercel.com 접속 -> New Project -> 방금 만든 저장소 선택
3. 설정 건드릴 것 없이 그대로 Deploy
4. 끝나면 https://kb-app-xxxx.vercel.app 주소 나옴
5. 그 주소를 폰 어디서든(데이터/와이파이 상관없이) 열면 앱처럼 보임
6. 폰 홈화면에 추가: 사파리/크롬에서 주소 연 뒤 "홈 화면에 추가" -> 진짜 앱 아이콘처럼 됨

### 방법 B) Vercel CLI (터미널만으로)

    npm install
    npm install -g vercel
    vercel

- 로그인 후 질문 엔터로 넘기면 자동 배포되고 주소 나옴
- 정식 주소로 올리려면: vercel --prod

---

## 내 컴퓨터에서 먼저 확인 (선택)

    npm install
    npm run dev

- Local:   http://localhost:5173/   컴퓨터에서
- Network: http://192.168.x.x:5173/  같은 와이파이면 폰에서

## 데이터 수정
- 계좌 금액/이름/번호: src/MyBankHome.jsx 위쪽 accounts, allAccounts 배열
