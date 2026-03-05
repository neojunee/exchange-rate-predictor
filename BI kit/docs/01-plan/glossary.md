# 환율 예측 서비스 — 용어 사전 (Glossary)

> Phase 1: Schema/Terminology Definition
> 프로젝트 전반에 사용되는 용어와 데이터 구조를 정의합니다.

---

## 비즈니스 용어 (Business Terms)

| 한국어 | 영문 코드명 | 정의 | 글로벌 표준 매핑 |
|--------|------------|------|----------------|
| 기준 통화 | `base_currency` | 비교의 기준이 되는 통화 (예: USD) | Base Currency |
| 대상 통화 | `target_currency` | 환전하려는 통화 (예: KRW) | Quote Currency |
| 환율 | `exchange_rate` | 기준통화 1단위 당 대상통화 금액 | Exchange Rate |
| 예측 환율 | `predicted_rate` | 모델이 예측한 미래 환율 | Forecasted Rate |
| 신뢰도 | `confidence` | 예측의 정확도 (0~100%) | Confidence Score |
| 예측 기간 | `forecast_period` | 몇 일 뒤를 예측하는지 (예: 7일, 30일) | Forecast Horizon |
| 환율 추이 | `rate_history` | 과거 환율 데이터 목록 | Historical Rate |
| 등락폭 | `rate_change` | 전일 대비 환율 변동 값 | Rate Delta |

---

## 글로벌 표준 용어 (Global Standards)

| 용어 | 정의 | 참고 |
|------|------|------|
| ISO 4217 | 통화 코드 국제 표준 (USD, KRW, EUR 등) | 3자리 알파벳 코드 |
| API | 데이터를 주고받는 인터페이스 | REST API |
| JSON | 데이터 교환 형식 | JavaScript Object Notation |

---

## 데이터 스키마 (Schema)

### ExchangeRate (현재 환율)
```json
{
  "base_currency": "USD",
  "target_currency": "KRW",
  "rate": 1320.50,
  "date": "2026-03-05"
}
```

### Prediction (예측 환율)
```json
{
  "base_currency": "USD",
  "target_currency": "KRW",
  "predicted_rate": 1335.00,
  "confidence": 72,
  "forecast_period": 7,
  "created_at": "2026-03-05"
}
```

### RateHistory (환율 추이)
```json
{
  "base_currency": "USD",
  "target_currency": "KRW",
  "history": [
    { "date": "2026-03-01", "rate": 1310.00 },
    { "date": "2026-03-02", "rate": 1315.50 },
    { "date": "2026-03-03", "rate": 1320.50 }
  ]
}
```

---

## 용어 사용 규칙

1. **코드**에서는 영문 코드명 사용 (`base_currency`, `predicted_rate`)
2. **UI/문서**에서는 한국어 사용 (기준 통화, 예측 환율)
3. **통화 코드**는 항상 ISO 4217 표준 사용 (USD, KRW, EUR)

---

> 다음 단계: Phase 2 — Coding Convention (코딩 규칙 정의)
