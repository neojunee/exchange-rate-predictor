# 환율 예측 서비스 — 배포 스펙

> Phase 9: Deployment
> GitHub Pages를 통한 정적 웹사이트 배포

---

## 1. 배포 방식

### GitHub Pages란?

> **GitHub Pages** = GitHub가 제공하는 **무료 정적 웹 호스팅 서비스**

마치 네이버 블로그처럼, GitHub가 당신의 HTML/CSS/JS 파일을 인터넷에 공개해주는 서비스입니다.

| 특징 | 설명 |
|------|------|
| **비용** | 무료 |
| **대역폭** | 무제한 |
| **도메인** | `username.github.io` (커스텀 도메인 가능) |
| **HTTPS** | 자동 지원 |
| **용도** | 정적 웹사이트 (포트폴리오, 블로그, 랜딩페이지) |

---

## 2. 배포 준비

### 1단계: GitHub 계정 만들기

1. https://github.com 접속
2. Sign up → 이메일, 비밀번호, 사용자명 입력
3. 이메일 인증 완료

### 2단계: GitHub에서 저장소(Repository) 만들기

1. GitHub 로그인 후 우상단 `+` → New repository
2. Repository name: `exchange-rate-predictor`
3. Public 선택 (공개)
4. "Create repository" 클릭

### 3단계: 파일을 GitHub에 올리기

터미널을 열어 이 명령어들을 실행하세요:

```bash
cd "/Users/pw.june@dramancompany.com/Desktop/BI kit"

# Git 초기화
git init
git add .
git commit -m "Initial commit: Exchange Rate Predictor Service"

# GitHub 저장소 연결
git remote add origin https://github.com/YOUR_USERNAME/exchange-rate-predictor.git
git branch -M main

# GitHub에 업로드
git push -u origin main
```

> **YOUR_USERNAME**을 실제 GitHub 사용자명으로 바꾸세요!

---

## 3. GitHub Pages 활성화

### 방법 1: GitHub Web 인터페이스 (추천)

1. GitHub → Repository settings → Pages 탭
2. "Source" 에서 "Deploy from a branch" 선택
3. Branch: `main`, Folder: `mockup` 선택
4. Save 클릭

그러면 몇 분 후 `https://YOUR_USERNAME.github.io/exchange-rate-predictor` 주소에서 배포됩니다!

### 방법 2: GitHub Actions (자동 배포)

`.github/workflows/deploy.yml` 파일로 자동 배포를 설정할 수 있습니다. (선택사항)

---

## 4. 배포 후 확인

| 확인 항목 | 예상 결과 |
|---------|---------|
| 페이지 로드 | "💱 환율 예측" 헤더가 보임 |
| USD 탭 | 1,320.5 KRW 표시 |
| EUR 탭 클릭 | 환율 변경 + 예측값 업데이트 |
| 환율 계산기 | 금액 입력 → 자동 계산 |
| 차트 | 7일 추이 그래프 표시 |

---

## 5. 커스텀 도메인 설정 (선택)

기본 도메인 `YOUR_USERNAME.github.io` 대신 직접 구매한 도메인 (예: `exchange-rate.com`) 을 사용하고 싶다면:

1. Domain Registrar (GoDaddy, Namecheap 등)에서 도메인 구매
2. GitHub Pages Settings → Custom domain 입력
3. DNS 레코드 설정 (자세한 방법은 GitHub 문서 참고)

---

## 6. 배포 완료 후 할 일

### ✅ 필수

- [x] GitHub에 코드 업로드
- [x] GitHub Pages 활성화
- [x] 배포 URL에서 페이지 확인

### 📝 추가 (선택사항)

- [ ] README.md 작성 (프로젝트 설명)
- [ ] Google Search Console 등록 (검색 최적화)
- [ ] 이웃 공유

---

> **다음 단계: 새로운 기능 추가 시 Phase 1부터 반복!**
