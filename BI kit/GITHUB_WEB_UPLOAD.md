# GitHub 웹에서 직접 파일 업로드하기 (가장 간단!)

> 터미널 명령어 없이 GitHub 웹 인터페이스에서 업로드

---

## 📋 절차 (5분)

### 1단계: GitHub 저장소 만들기

1. https://github.com/new 접속
2. **Repository name:** `exchange-rate-predictor`
3. **Visibility:** Public
4. **Create repository** 클릭

---

### 2단계: 파일 업로드 (웹에서)

저장소가 생성되면 화면에 이런 창이 나옵니다:

```
📁 exchange-rate-predictor

or push an existing repository from the command line

Quick setup — if you've done this kind of thing before
```

아래 파란 버튼을 찾으세요: **"uploading an existing file"** (또는 **"Add file" → "Upload files"**)

클릭하면 파일 업로드 창이 열립니다.

---

### 3단계: 폴더 구조대로 업로드

**Finder에서** `/Users/pw.june@dramancompany.com/Desktop/BI kit` 폴더를 열고,

이 순서로 업로드하세요:

#### 1️⃣ **docs 폴더**
- docs/01-plan/glossary.md
- docs/02-design/design-system.md
- docs/02-design/seo-spec.md
- docs/02-design/deployment-spec.md
- docs/03-analysis/phase-review.md
- docs/04-report/deployment-report.md

#### 2️⃣ **mockup 폴더** (⭐ 가장 중요)
- mockup/index.html
- mockup/style.css
- mockup/app.js
- mockup/robots.txt
- mockup/sitemap.xml
- mockup/data/data.json

#### 3️⃣ **루트 파일들**
- README.md
- CONVENTIONS.md
- DEPLOY_GUIDE.md

> **팁:** "Add file" → "Upload files"에서 폴더 채로 drag-drop 할 수 있습니다!

---

### 4단계: GitHub Pages 활성화

저장소 페이지에서:

1. **Settings** 탭
2. **Pages** (좌측 메뉴)
3. **Source:** "Deploy from a branch" 선택
4. **Branch:** `main`
5. **Folder:** `/mockup` ⭐ **중요!**
6. **Save**

---

### 🎉 완료!

약 1~2분 후:
```
https://neojune.github.io/exchange-rate-predictor
```

에서 배포된 사이트를 볼 수 있습니다!

---

## 🎬 영상으로 배우기 (YouTube)

"GitHub upload files web interface" 검색하면 자세한 영상이 나옵니다.

---

이 방법이 훨씬 간단하고 안전합니다! 🚀
