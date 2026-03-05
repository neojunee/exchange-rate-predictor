# 환율 예측 서비스 — GitHub Pages 배포 가이드

> neojune 계정으로 배포하기

---

## 📋 배포 절차 (3단계, 5분)

### 1단계: GitHub에서 저장소 만들기 (브라우저)

1. https://github.com/new 접속
2. **Repository name:** `exchange-rate-predictor`
3. **Visibility:** Public 선택
4. **Create repository** 클릭

완료! 저장소가 생성되었습니다.

---

### 2단계: 로컬에서 코드 올리기 (터미널)

아래 명령어들을 **순서대로** 복사해서 터미널에 붙여넣기 하세요:

```bash
cd "/Users/pw.june@dramancompany.com/Desktop/BI kit"

# GitHub 저장소와 연결
git remote set-url origin https://github.com/neojune/exchange-rate-predictor.git

# 코드 업로드
git push -u origin main
```

> **비밀번호 입력 시:** GitHub 비밀번호 대신 **Personal Access Token** 을 입력하세요.
>
> Token 만드는 법:
> 1. GitHub 로그인 → Settings → Developer settings → Personal access tokens → Tokens (classic)
> 2. Generate new token (classic) → `repo` 체크 → Generate
> 3. 토큰 복사해서 비밀번호 자리에 붙여넣기

---

### 3단계: GitHub Pages 활성화 (브라우저)

1. https://github.com/neojune/exchange-rate-predictor 접속
2. **Settings** 탭 클릭
3. **Pages** 선택 (좌측 메뉴)
4. **Source** → "Deploy from a branch" 선택
5. **Branch:** `main` 선택
6. **Folder:** `/ (root)` 에서 `/mockup` 으로 변경
7. **Save** 클릭

완료! 약 1~2분 후에 배포됩니다.

---

## 🎉 배포 완료!

배포된 URL:
```
https://neojune.github.io/exchange-rate-predictor
```

이 주소를 브라우저에서 열면 **환율 예측 서비스**를 볼 수 있습니다!

---

## 🧪 배포 후 확인 항목

| 확인 사항 | 예상 결과 |
|---------|---------|
| 페이지 로드 | "💱 환율 예측" 헤더 보임 |
| USD 탭 | 1,320.5 KRW 표시 |
| EUR 탭 클릭 | 환율 변경 + 그래프 업데이트 |
| 환율 계산기 | 금액 입력 시 자동 계산 |
| 차트 | 7일 추이 그래프 표시 |

모두 정상이면 배포 성공입니다! ✅

---

## ❓ 문제 해결

### "fatal: not a git repository" 에러

```bash
# 저장소 다시 초기화
cd "/Users/pw.june@dramancompany.com/Desktop/BI kit"
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/neojune/exchange-rate-predictor.git
git push -u origin main
```

### 페이지가 안 보임 (404 에러)

1. GitHub Pages 설정 다시 확인
2. Folder가 `/mockup` 으로 되어있는지 확인
3. 5분 기다렸다가 새로고침

### 데이터가 안 나옴

`mockup/data/data.json` 파일이 있는지 확인하세요.

---

## 📢 공유하기

배포 완료 후:
- 친구들한테 링크 공유: `https://neojune.github.io/exchange-rate-predictor`
- 이력서/포트폴리오에 추가 가능
- 나중에 커스텀 도메인 연결 가능

---

준비되셨나요? 진행하시겠습니다! 🚀
