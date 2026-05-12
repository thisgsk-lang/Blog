# Handoff — W10 블로그 → GitHub Pages 라이브

**작성:** 2026-05-12
**최종 결과:** https://oinbun5-collab.github.io/Obsidian/
**작업자:** 학생 + Claude Code (Opus 4.7)

---

## 시작 상태

- 빈 폴더 `/Users/letsdooyoung/Documents/AITOOL_SMIT/`
- W10 강의 슬라이드 PDF 1개만 있음
- **W06 Wiki / W09 Claude Design 자산 모두 없음** → 슬라이드 Plan B 진입

---

## 진행 흐름 (시간 순)

| # | 단계 | 결과물 |
|---|------|--------|
| 1 | 슬라이드 PDF 정독 + 요약 | 종착지 = GitHub Pages 라이브 URL 명확화 |
| 2 | Obsidian 골격 만들기 | `Obsidian/Raw/`, `Wiki/01~03.md`, `Index.md` |
| 3 | 정적 사이트 골격 만들기 | `site/` 안에 6개 파일 (HTML 5 + CSS 1) |
| 4 | GitHub repo 받음 | `oinbun5-collab/Obsidian` |
| 5 | `site/` → `docs/` rename | GH Pages가 root/`/docs`만 인식하기 때문 |
| 6 | `.gitignore` + `README.md` 추가 | 13개 파일 첫 커밋 |
| 7 | **403 권한 에러** | 활성 gh 계정(negalab) ≠ repo owner(oinbun5-collab) |
| 8 | `gh auth login`으로 oinbun5-collab 인증 추가 | 사용자 인터랙티브 (브라우저 + 8자리 코드) |
| 9 | `gh auth switch` + `git push` | main 브랜치 push 성공 |
| 10 | `gh api`로 Pages 자동 활성화 | source: main `/docs` → status: building → 라이브 |

**총 메시지 왕복:** ~10회 / **실 작업 시간:** ~30분

---

## 핵심 결정 3개

### 1. 디자인 단계 건너뛰기 (Plan B)
W09 Claude Design 결과물이 없어서 슬라이드 22페이지 Plan B 따라 **즉석 minimal HTML**.
흰 바탕 + 검은 글씨 + `max-width: 720px` + sans-serif. 디자인 시간 = 0.

### 2. 한 repo에 콘텐츠 + 사이트 둘 다 (선택지 C)
- `Obsidian/` = 콘텐츠 작성 (Obsidian Vault로 열기)
- `docs/` = GitHub Pages 배포 루트
- GH Pages 제약 때문에 `site/`는 무조건 `docs/`로 이름 바꿔야 함

### 3. 모든 경로를 상대 경로로
슬라이드 19페이지의 "흔한 막힘 90% = 경로 문제" 사전 회피.
- `docs/posts/01-...html` 안 → `../style.css`, `../index.html`
- 절대 경로 (`/`) 일절 사용 안 함

---

## 막힌 지점 1개

**다중 GitHub 계정 환경에서 push 권한 403**

| 항목 | 값 |
|---|---|
| 활성 gh 계정 | `negalab` |
| 인증된 다른 계정 | `dngkwon-prog` |
| repo 소유자 | `oinbun5-collab` ← 인증 안 됨 |
| 증상 | `git push` → `403 Permission denied to negalab` |
| 해결 | `gh auth login --web` → `oinbun5-collab` 추가 → `gh auth switch` |

→ 다중 계정 환경의 흔한 함정. 첫 환경 점검 단계(`gh auth status`)에서 미리 감지 가능.

---

## 결과물 트리

```
AITOOL_SMIT/
├── .gitignore
├── README.md
├── HANDOFF.md                # 이 파일
├── Obsidian/                 # 콘텐츠 (Vault로 열기)
│   ├── Index.md              # 목차 + 기획 4질문 빈칸
│   ├── Raw/README.md
│   └── Wiki/
│       ├── 01-첫번째글.md
│       ├── 02-두번째글.md
│       └── 03-세번째글.md
└── docs/                     # GitHub Pages 배포 루트
    ├── index.html            # 홈 (카드 3개)
    ├── about.html
    ├── style.css             # 단일 CSS, ~70줄
    └── posts/
        ├── 01-첫번째글.html
        ├── 02-두번째글.html
        └── 03-세번째글.html
```

총 13개 파일 / git 1 commit.

---

## 사용 도구

- **Claude Code (Opus 4.7)** — 슬라이드 분석, 파일 작성, 명령 실행, 의사결정
- **gh CLI 2.86** — repo 확인, 인증, Pages API 호출
- **git 2.43** — init/add/commit/push
- **GitHub Pages REST API** — 웹 UI 클릭 없이 `POST /repos/.../pages`로 자동 활성화

**웹 UI 클릭 횟수:** 1회 (gh auth login의 브라우저 인증만)

---

## 남은 일 (콘텐츠 채우기)

1. `Obsidian/Index.md` — 기획 4질문 빈칸 (누구/왜/첫 3개/성공 기준)
2. `Obsidian/Wiki/01~03.md` — 실제 글로 교체
3. `docs/posts/01~03.html` — Wiki 내용과 동일하게 동기화
4. `docs/index.html` 카드 제목 + `docs/about.html` 본문 업데이트

**자동화 후보:** Wiki/*.md → docs/posts/*.html 변환 스크립트 (W11에서)

---

## 비교 포인트 (다른 학생 작업과 대조용)

| 비교 항목 | 이 작업 |
|---|---|
| 시작 상태 | 빈 폴더 + 슬라이드 1개 |
| W06/W09 사전 자산 | 둘 다 없음 → Plan B |
| 라이브 도달 시간 | ~30분 |
| 메시지 왕복 횟수 | ~10회 |
| repo 구조 | 단일 repo, `Obsidian/` + `docs/` 분리 |
| 디자인 도구 | 사용 X (즉석 minimal HTML) |
| GH Pages 활성화 | gh API 자동 (웹 클릭 X) |
| 권한 문제 발생 | 예 (다중 계정 환경) |
| 콘텐츠 상태 | placeholder (아직 안 채움) |
| 최종 URL | https://oinbun5-collab.github.io/Obsidian/ |

---

## 한 줄 요약

> **빈 폴더 → 슬라이드 Plan B 진입 → 13개 파일 자동 생성 → 권한 문제 1회 막힘 → 사용자 인증 1회 → push + Pages API 자동 활성화 → 라이브.**
