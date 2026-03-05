# 환율 예측 서비스 — SEO 스펙

> Phase 7: SEO Optimization
> 검색 엔진이 우리 사이트를 잘 이해하고 검색 결과에 노출되도록 최적화

---

## 1. 메타 태그 (Meta Tags)

### 기본 메타 태그

| 태그 | 내용 | 목적 |
|------|------|------|
| `<title>` | 환율 예측 서비스 - AI 기반 환율 변동 예측 | 브라우저 탭 + 검색 결과 제목 |
| `<meta name="description">` | AI 기술을 활용한 정확한 환율 예측 서비스... | 검색 결과 설명 |
| `<meta name="keywords">` | 환율, 환율 예측, 환율 계산기... | 검색 키워드 연관성 |

> **왜 중요한가?** 검색 엔진이 우리 사이트의 주제를 알아야 검색 결과에 노출됩니다.
> 마치 책의 "표지"와 "목차" 같은 역할을 합니다.

### Open Graph (소셜 미디어 공유)

카카오톡, 페이스북 등에서 공유될 때 표시되는 이미지/제목/설명

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="환율 예측 서비스" />
<meta property="og:description" content="AI 기반 환율 예측..." />
```

---

## 2. 구조화된 데이터 (Schema.org)

Google, Naver 등 검색 엔진이 사이트 정보를 더 잘 이해하도록 하는 JSON 형식

```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "환율 예측 서비스",
  "description": "AI 기술을 활용한 정확한 환율 예측 서비스",
  "applicationCategory": "FinanceApplication"
}
```

검색 결과에 별점, 리뷰, 가격 등이 표시될 수 있습니다.

---

## 3. 검색 엔진 설정

### robots.txt

`/robots.txt` 파일로 검색 로봇에게 사이트 규칙을 알림

```
User-agent: *
Allow: /
Sitemap: https://example.com/sitemap.xml
```

**Disallow:** 검색 로봇이 접근하면 안 되는 경로
- 예: `/admin`, `/private`, `/api`

### sitemap.xml

`/sitemap.xml` 파일로 사이트의 모든 페이지 목록 제공

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2026-03-05</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

> Google Search Console와 Naver Webmaster Tools에 sitemap.xml을 등록하면 사이트 노출이 빨라집니다.

---

## 4. 접근성 (Accessibility)

검색 엔진이 사이트 구조를 이해하고, 장애인도 사용 가능하게 함

| 요소 | 목적 |
|------|------|
| `<h1>`, `<h2>`, `<h3>` | 제목 계층 구조 (검색 엔진의 콘텐츠 이해도 향상) |
| `<main>`, `<header>`, `<footer>` | 의미적 구조 |
| `aria-label`, `aria-describedby` | 스크린 리더 사용자를 위한 설명 |
| `role="tablist"`, `role="tab"` | 복잡한 UI 역할 표시 |

---

## 5. 성능 최적화 (Core Web Vitals)

검색 순위에 영향을 주는 3가지 지표:

| 지표 | 목표 | 개선 방법 |
|------|------|---------|
| **LCP** (Largest Contentful Paint) | 2.5초 이내 | 이미지 최적화, 폰트 로딩 최적화 |
| **FID** (First Input Delay) | 100ms 이내 | JavaScript 번들 축소, 메인 스레드 차단 감소 |
| **CLS** (Cumulative Layout Shift) | 0.1 이하 | 이미지/광고 크기 사전 지정 |

현재 Mockup은 간단한 HTML/CSS/JS라 성능이 좋습니다.

---

## 6. 검색 키워드 전략

**타겟 키워드:**
- 1차: "환율 예측" (높은 검색량, 경쟁 큼)
- 2차: "환율 계산기" (중간 검색량)
- 3차: "USD KRW 환율" (특정 키워드)

**콘텐츠 내 배치:**
- 제목 (`<h1>`) 에 메인 키워드
- 설명 문단에 관련 키워드
- 자연스럽게 (억지스럽지 않게!)

---

> 다음 단계: Phase 8 — 검토 (지금까지의 모든 작업 검증)
