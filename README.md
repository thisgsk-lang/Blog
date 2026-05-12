# AI 도구 활용 — 블로그

기획부터 배포까지 90분 안에 블로그 만들기

**라이브**: https://oinbun5-collab.github.io/Obsidian/

---

## 📂 폴더 구조

```
AITOOL_SMIT/
├── README.md                  # 이 파일
├── .gitignore
├── HANDOFF.md                 # 이전 작업 기록
├── Obsidian/                  # 콘텐츠 (Vault)
│   ├── Index.md               # 기획 4질문
│   ├── Raw/
│   │   └── README.md
│   └── Wiki/
│       ├── 01-AI도구로시작하는첫주.md
│       ├── 02-GitHub를활용한협업.md
│       └── 03-블로그를한시간에만들기.md
└── docs/                      # GitHub Pages 배포
    ├── index.html             # 홈
    ├── about.html             # 소개
    ├── style.css              # 스타일
    └── posts/
        ├── 01-AI도구로시작하는첫주.html
        ├── 02-GitHub를활용한협업.html
        └── 03-블로그를한시간에만들기.html
```

---

## 🎯 핵심 단계

### 1단계: 기획 (15분)
`Obsidian/Index.md`에 4질문 작성:
- 누구를 위한 거야?
- 왜 만들어?
- 첫 콘텐츠 3개 제목?
- 무엇이 성공인가?

### 2단계: 콘텐츠 (15분)
`Obsidian/Wiki/`에 실제 글 작성

### 3단계: 배포 준비 (15분)
```bash
git init
git add .
git commit -m "Initial commit"
```

### 4단계: 라이브 (15분)
```bash
git push -u origin main
```

GitHub Settings → Pages → Source: main `/docs`

---

## 💡 현재 상태

- ✅ 폴더 구조 완성
- ✅ HTML 템플릿 완성
- ✅ 플레이스홀더 콘텐츠 작성
- ⏳ **기획 4질문 작성 필요** (Obsidian/Index.md)
- ⏳ **콘텐츠 수정 필요** (Obsidian/Wiki/)
- ⏳ **GitHub 배포**

---

## 🚀 시작하기

1. **기획하기**
   ```
   Obsidian/Index.md 열기 → 4질문 채우기
   ```

2. **글 수정하기**
   ```
   Obsidian/Wiki/ 폴더의 01~03.md 수정
   ```

3. **배포하기**
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

---

## 📚 문서

- [HANDOFF.md](HANDOFF.md) — 이전 작업 상세 기록
- [Obsidian/Index.md](Obsidian/Index.md) — 기획 4질문
- [Obsidian/Wiki/](Obsidian/Wiki/) — 콘텐츠

---

## 🔧 필수 도구

- Git (2.43+)
- GitHub 계정
- Claude Code (선택)

---

## 💬 피드백

이 프로젝트는 학습용입니다.
자유롭게 수정하고 배포하세요!

**기획 4질문을 작성할 때:**
- 구체적인 1명의 사람을 생각하세요
- 거짓 동기는 한 달이 못 갑니다
- 콘텐츠 3개는 방향을 보여줍니다
- 성공 기준은 측정 가능해야 합니다

---

*Created: 2026-05-12*
