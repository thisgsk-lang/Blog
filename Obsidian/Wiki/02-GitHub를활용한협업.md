# GitHub를 활용한 협업

**작성일**: 2026-05-12

## 들어가며

혼자 프로젝트하다가 팀 작업을 하려면 어떻게 할까요?

GitHub는 **코드뿐 아니라 모든 파일**을 함께 관리하는 도구입니다.

---

## 1. GitHub 저장소 만들기

### 첫 번째 저장소
- 이름: 프로젝트명 (영어, 하이픈)
- Public / Private 선택
- README.md로 시작

### 예시
```
my-blog
my-design-portfolio
ai-writing-helper
```

---

## 2. 첫 파일 올리기

### 3단계
1. **git init** — 저장소 초기화
2. **git add .** — 모든 파일 준비
3. **git commit -m "첫 커밋"** — 저장
4. **git push** — 올리기

### 팁
커밋 메시지는 명확하게!
- ❌ "fix"
- ✅ "Add README and initial folder structure"

---

## 3. 팀원과 함께하기

### 초대하기
- Settings → Collaborators → 이메일 초대

### 함께 작업할 때
1. **main 브랜치는 건드리지 않기**
2. **본인의 브랜치 만들기**: `git checkout -b my-feature`
3. **작업 후 Pull Request** (리뷰 받기)
4. **main에 Merge** (최종 반영)

---

## 4. GitHub Pages로 웹사이트 배포

### 준비물
- `docs/` 폴더 또는 `gh-pages` 브랜치

### 활성화
1. Settings → Pages
2. Source: main branch / `/docs` folder
3. 저장

### 결과
`https://username.github.io/repository-name/`

---

## 5. 흔한 실수와 해결법

### "403 Permission denied"
→ 계정 확인: `gh auth status`

### "Push가 안 됨"
→ 최신 버전 확인: `git pull` 후 `git push`

### "파일이 보이지 않음"
→ `.gitignore` 확인 (민감한 파일 제외됨)

---

## 마치며

GitHub는 처음엔 어렵지만, 한 번 익히면 평생 쓰는 도구입니다.

**다음 주:**
- 본인의 GitHub 계정 만들기
- 첫 저장소 만들기
- README.md 작성하기
