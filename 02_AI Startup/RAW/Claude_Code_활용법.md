---
title: Claude Code 활용법
date: 2026-06-13
tags: [Claude, Code, 개발도구, AI활용]
category: 기술
status: 완성
source: Claude Code 공식문서 + 개인경험
---

# Claude Code 실전 활용 가이드

## Claude Code란?
- Claude를 VS Code와 통합한 AI 개발 어시스턴트
- 로컬 환경에서 파일 읽기/쓰기/편집 가능
- 터미널 명령어 실행 (Bash, PowerShell)
- 한 주 동안 웹 서비스 구현 가능

## 주요 기능

### 1. 파일 조작
- **Read** - 파일 읽기
- **Write** - 새 파일 생성
- **Edit** - 파일 편집 (diff 방식)
- **Glob** - 파일 패턴 검색

### 2. 터미널 실행
- **Bash** - POSIX 쉘 명령어
- **PowerShell** - Windows 파워셸

### 3. 그 외
- **Grep** - 텍스트 검색 (ripgrep)
- **Agent** - 다른 에이전트 활용

## 워크플로우: 일주일에 웹 서비스 구현

### Day 1-2: 기획 및 설계
- Obsidian에서 기능 명세 작성
- API 스펙 설계
- 디렉토리 구조 계획

### Day 3-4: 백엔드 구현
```bash
# Claude에게 명령: "Express API 서버 만들어줘"
# Claude가 실행:
npm init
npm install express cors dotenv
# 파일 생성 및 코드 작성
```

### Day 5: 프론트엔드 구현
```bash
# Claude에게 명령: "React UI 만들어줘"
# Claude가 실행:
npx create-react-app client
npm install axios
# 컴포넌트 작성
```

### Day 6: 통합 및 테스트
```bash
# Claude가 API 테스트 코드 작성
# 디버깅
# 성능 최적화
```

### Day 7: 배포 및 정리
```bash
# Docker 컨테이너화
# 환경 변수 설정
# 배포 스크립트 작성
```

## 실전 팁

### 효과적인 프롬프트
- ❌ "코드 짜줘" → 너무 모호함
- ✓ "Express로 /api/users GET 엔드포인트 만들어. 구조는..."

### 파일 관리
- 프로젝트마다 .claude/CLAUDE.md 작성 (지침 저장)
- 중요한 설정은 comment로 표시
- 임시 파일은 .gitignore에 추가

### 성능 최적화
- 필요한 파일만 읽기 (전체 폴더 읽지 않기)
- 큰 파일은 부분 읽기
- 토큰 효율성 고려

### 에러 처리
- 에러 메시지를 명확히 제시
- "왜 이런 에러가 났는가?" 맥락 제공
- 이전 시도한 해결책 언급

## 성공 사례

### Case 1: 스타트업 MVP 구현
- 아이디어 → 2주일 내 완성된 웹 앱
- Obsidian에서 기획 + Claude Code에서 구현
- 빠른 반복과 개선

### Case 2: 데이터 분석 자동화
- 대용량 데이터 처리 스크립트
- 시각화 및 리포트 자동 생성
- 정기적인 실행 설정

### Case 3: 개인 프로젝트 관리
- Claude Code로 도구 개발
- Obsidian에서 문서화
- 자동화로 시간 절감

## 주의할 점
- 보안: 민감한 정보 (API 키 등)는 .env에 저장
- 성능: 불필요한 라이브러리 제거
- 품질: AI 생성 코드도 항상 검토
- 비용: 토큰 사용량 모니터링

## 앞으로의 방향
- 더 정교한 자동화
- AI와 인간의 협력 강화
- 개인 AI 시스템 구축 (Obsidian + Claude Code)
