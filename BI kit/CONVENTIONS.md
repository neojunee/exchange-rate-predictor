# 환율 예측 서비스 — 코딩 컨벤션 (Conventions)

> Phase 2: Coding Convention
> AI와 협업할 때 일관된 코드 스타일을 유지하기 위한 규칙

---

## 1. 네이밍 규칙 (Naming)

| 대상 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 | PascalCase | `RateCard`, `PredictionChart` |
| 함수/변수 | camelCase | `fetchExchangeRate`, `predictedRate` |
| 상수 | UPPER_SNAKE_CASE | `MAX_FORECAST_DAYS`, `DEFAULT_CURRENCY` |
| 파일 | kebab-case | `rate-card.html`, `prediction-chart.js` |
| CSS 클래스 | kebab-case | `.rate-card`, `.prediction-label` |

### 통화 코드
- 항상 **ISO 4217** 3자리 대문자 사용
- 예: `USD`, `KRW`, `EUR`, `JPY`

---

## 2. 폴더 구조 (Starter 레벨)

```
BI kit/
├── docs/
│   ├── 01-plan/          # Phase 1~2 산출물
│   └── 02-design/        # Phase 3 산출물 (Mockup 스펙)
├── mockup/               # Phase 3: HTML/CSS/JS 시안
│   ├── index.html        # 메인 페이지
│   ├── style.css         # 스타일
│   └── data.json         # 더미 데이터
├── CONVENTIONS.md        # 이 파일
└── README.md             # 프로젝트 소개
```

---

## 3. HTML/CSS 규칙

```html
<!-- 들여쓰기: 2 spaces -->
<!-- 따옴표: 큰따옴표(") 사용 -->

<!-- ✅ 좋은 예 -->
<div class="rate-card">
  <span class="rate-value">1,320.50</span>
  <span class="rate-unit">KRW</span>
</div>

<!-- ❌ 나쁜 예 -->
<div class='rate-card'>
    <span class='rate-value'>1320.50</span>
</div>
```

```css
/* 속성 순서: 레이아웃 → 박스모델 → 시각적 → 타이포그래피 */
.rate-card {
  /* 레이아웃 */
  display: flex;
  flex-direction: column;
  /* 박스모델 */
  padding: 16px;
  margin: 8px;
  /* 시각적 */
  background-color: #ffffff;
  border-radius: 8px;
  /* 타이포그래피 */
  font-size: 16px;
  color: #333333;
}
```

---

## 4. JavaScript 규칙

```javascript
// 들여쓰기: 2 spaces
// 세미콜론: 사용
// 따옴표: 작은따옴표(') 또는 템플릿 리터럴

// ✅ 좋은 예: 함수 이름은 camelCase, 동사로 시작
function fetchExchangeRate(baseCurrency, targetCurrency) {
  return data[`${baseCurrency}_${targetCurrency}`];
}

// ✅ 상수는 UPPER_SNAKE_CASE
const DEFAULT_BASE_CURRENCY = 'USD';
const DEFAULT_TARGET_CURRENCY = 'KRW';
const MAX_FORECAST_DAYS = 30;
```

---

## 5. 더미 데이터 규칙 (Mockup용)

```json
{
  "exchange_rates": [
    {
      "base_currency": "USD",
      "target_currency": "KRW",
      "rate": 1320.50,
      "date": "2026-03-05"
    }
  ],
  "predictions": [
    {
      "base_currency": "USD",
      "target_currency": "KRW",
      "predicted_rate": 1335.00,
      "confidence": 72,
      "forecast_period": 7
    }
  ]
}
```
- 필드명은 항상 `snake_case`
- 날짜는 `YYYY-MM-DD` 형식
- 숫자는 소수점 2자리까지

---

## 6. 주석 규칙

```javascript
// 한 줄 주석: 코드 위에 작성
// 복잡한 로직에만 주석 추가 (자명한 코드는 주석 불필요)

/**
 * 환율 데이터를 가져와서 화면에 표시
 * @param {string} baseCurrency - 기준 통화 (예: 'USD')
 * @param {string} targetCurrency - 대상 통화 (예: 'KRW')
 */
function displayExchangeRate(baseCurrency, targetCurrency) {
  // ...
}
```

---

> 다음 단계: Phase 3 — Mockup (HTML/CSS로 화면 시안 만들기)
