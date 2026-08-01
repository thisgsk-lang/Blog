#!/bin/bash

# PDF 자동 변환 스크립트
# 모든 PDF를 텍스트로 추출한 후 마크다운으로 변환

PDF_DIR="/c/Users/thisg/OneDrive/문서/AITOOL_SMIT/02_AI Startup/RAW"
WIKI_DIR="/c/Users/thisg/OneDrive/문서/AITOOL_SMIT/02_AI Startup/WIKI"
PDFTOTEXT="/c/Users/thisg/AppData/Local/Microsoft/WinGet/Packages/oschwartz10612.Poppler_Microsoft.Winget.Source_8wekyb3d8bbwe/poppler-25.07.0/Library/bin/pdftotext.exe"
TEMP_DIR="/tmp/pdf_conversion"

# 임시 디렉토리 생성
mkdir -p "$TEMP_DIR"

echo "════════════════════════════════════════"
echo "📚 PDF → 마크다운 자동 변환 시작"
echo "════════════════════════════════════════"
echo ""

# 이미 변환한 파일들 (LEAN STARTUP 제외 - 이미 완성됨)
SKIP_FILES=(
    "15_LEAN STARTUP.pdf"
)

# 모든 PDF 파일 처리
cd "$PDF_DIR"
for pdf_file in *.pdf; do
    # SKIP_FILES에 있으면 건너뛰기
    skip=false
    for skip_file in "${SKIP_FILES[@]}"; do
        if [ "$pdf_file" = "$skip_file" ]; then
            skip=true
            break
        fi
    done

    if [ "$skip" = true ]; then
        echo "⏭️  건너뛰기: $pdf_file (이미 완성)"
        continue
    fi

    echo "🔄 처리 중: $pdf_file"

    # 텍스트 파일명
    txt_file="$TEMP_DIR/${pdf_file%.pdf}.txt"

    # PDF → 텍스트 변환
    "$PDFTOTEXT" "$pdf_file" "$txt_file" 2>/dev/null

    if [ $? -eq 0 ]; then
        echo "   ✅ 텍스트 추출 완료 ($(wc -l < "$txt_file") 줄)"

        # 마크다운 파일명 생성
        md_filename=$(echo "$pdf_file" | sed 's/.pdf$/.md/' | sed 's/ /_/g')
        md_path="$WIKI_DIR/$md_filename"

        # 메타데이터 생성
        title=$(echo "$pdf_file" | sed 's/.pdf$//' | sed 's/^[0-9_]*//g' | sed 's/_/ /g')
        date=$(date +%Y-%m-%d)

        # 마크다운 파일 생성
        cat > "$md_path" << EOF
---
title: $title
date: $date
tags: [스타트업, AI, 강의자료]
category: 전략/기술
status: 초안
source: RAW/$(echo "$pdf_file" | sed 's/ /%20/g')
---

# $title

> 원본 파일: [$pdf_file](../RAW/$(echo "$pdf_file" | sed 's/ /%20/g'))

## 📌 개요

본 문서는 AI 스타트업 기초 강의 자료 "$title"를 마크다운으로 정리한 것입니다.

---

## 📋 주요 내용

### 섹션 1

\`\`\`
$(head -50 "$txt_file" | grep -v '^$')
\`\`\`

---

## 📊 핵심 개념

$(sed -n '1,100p' "$txt_file" | grep -E '^[가-힣]' | head -10 | sed 's/^/- /')

---

## 🔗 관련 자료

- [Master Index](./Master_Index.md)

---

**작성일:** $date
**상태:** 초안 (상세 정리 필요)

EOF

        echo "   ✅ 마크다운 생성: $md_filename"
        echo ""
    else
        echo "   ❌ 오류 발생"
        echo ""
    fi
done

echo "════════════════════════════════════════"
echo "✅ 변환 완료!"
echo "생성된 파일: $(ls -1 "$WIKI_DIR"/*.md 2>/dev/null | wc -l)개"
echo "════════════════════════════════════════"
