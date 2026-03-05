# 💱 환율 예측 서비스

AI 기술을 활용한 정확한 환율 예측 서비스입니다. 실시간 환율 조회, 환율 계산기, 그리고 AI 기반 7일 후 환율 예측을 제공합니다.

## 🌟 주요 기능

- **오늘의 환율**: USD, EUR, JPY 등 주요 통화의 실시간 환율 조회
- **전일 대비**: 환율 변동 추이를 한눈에 확인
- **환율 계산기**: 금액을 입력하면 자동으로 KRW로 환산
- **AI 예측**: 7일 후 예측 환율과 신뢰도(%)를 확인
- **환율 추이 그래프**: 최근 7일간의 환율 변화를 시각화

## 🛠️ 기술 스택

- **Frontend**: HTML, CSS, JavaScript (외부 라이브러리 없음)
- **데이터**: JSON 파일 기반 모의 데이터
- **호스팅**: GitHub Pages

## 📂 프로젝트 구조

```
BI kit/
├── docs/                    # 문서
│   ├── 01-plan/            # Phase 1: 계획
│   │   └── glossary.md      # 용어 정의
│   ├── 02-design/          # Phase 2~7: 설계
│   │   ├── design-system.md # 디자인 시스템
│   │   ├── seo-spec.md      # SEO 스펙
│   │   └── deployment-spec.md # 배포 가이드
│   └── 03-analysis/        # Phase 8: 검토
│       └── phase-review.md  # 최종 검증 리포트
├── mockup/                  # Phase 3~6: 실제 구현
│   ├── index.html           # 메인 페이지
│   ├── style.css            # 스타일
│   ├── app.js               # 동작 스크립트
│   ├── robots.txt           # 검색 엔진 설정
│   ├── sitemap.xml          # 사이트맵
│   └── data/
│       └── data.json        # 환율 데이터
├── CONVENTIONS.md           # Phase 2: 코딩 규칙
└── README.md                # 이 파일
```

## 🚀 빠른 시작

### 로컬에서 실행하기

```bash
# 프로젝트 폴더로 이동
cd "/Users/pw.june@dramancompany.com/Desktop/BI kit"

# 간단한 HTTP 서버로 실행
python3 -m http.server 8000 --directory mockup

# 브라우저에서 열기
# http://localhost:8000
```

### 온라인에서 보기

GitHub Pages에 배포되면:
```
https://YOUR_USERNAME.github.io/exchange-rate-predictor
```

## 📋 개발 파이프라인 (bkit 9단계)

이 프로젝트는 **bkit (AI Native Development Toolkit)** 의 9단계 개발 파이프라인을 따릅니다:

| Phase | 단계 | 상태 |
|-------|------|------|
| 1️⃣ | Schema/Terminology | ✅ 완료 |
| 2️⃣ | Coding Convention | ✅ 완료 |
| 3️⃣ | Mockup | ✅ 완료 |
| 5️⃣ | Design System | ✅ 완료 |
| 6️⃣ | UI Implementation | ✅ 완료 |
| 7️⃣ | SEO/Security | ✅ 완료 |
| 8️⃣ | Review | ✅ 완료 |
| 9️⃣ | Deployment | 🔄 진행 중 |

자세한 내용은 `docs/` 폴더의 문서를 참고하세요.

## 📖 문서

- **[용어 정의](./docs/01-plan/glossary.md)** - 프로젝트에서 사용하는 용어 및 데이터 구조
- **[코딩 규칙](./CONVENTIONS.md)** - HTML, CSS, JavaScript 작성 규칙
- **[디자인 시스템](./docs/02-design/design-system.md)** - 색상, 타이포그래피, 컴포넌트
- **[SEO 스펙](./docs/02-design/seo-spec.md)** - 검색 엔진 최적화 가이드
- **[배포 가이드](./docs/02-design/deployment-spec.md)** - GitHub Pages 배포 방법
- **[최종 검증 리포트](./docs/03-analysis/phase-review.md)** - 전체 프로젝트 품질 검증

## 🎨 색상 팔레트

- **주 색상**: `#4f46e5` (보라)
- **상승**: `#10b981` (초록)
- **하락**: `#ef4444` (빨강)
- **배경**: `#f8fafc` (연회색)

## 🤖 AI와의 협업

이 프로젝트는 **Claude Code**를 사용하여 AI와 협업하며 개발되었습니다.

- bkit-learning 스타일 적용으로 학습 친화적 개발
- 각 단계의 산출물이 문서화되어 AI가 컨텍스트 유지
- 설계 → 구현 → 검증 의 순환적 개발 프로세스

## 📝 라이센스

이 프로젝트는 학습 목적으로 만들어졌습니다.

## 🙌 감사

- bkit (AI Native Development Toolkit)
- Claude Code & Claude API
- 모든 참여자들

---

**마지막 수정**: 2026-03-05
**프로젝트 레벨**: Starter (정적 웹사이트)
