---
type: trouble-shooting
status: resolved
project: openHaul
component: Hardware_Materials
tags: [STS316, black-oxide, plating-peeling, tolerance, verdigris]
date: 2026-08-01
---

# 🚨 Post-Mortem: 흑색 스탠드오프 재질 산화 및 표면처리 치수/박리 문제 개선 건

## 📋 1. Incident Summary
- **현상:** 색상 포카요케를 위해 흑색 스탠드오프를 도입하는 과정에서, 황동 소재의 녹청(Verdigris) 발생 우려 및 스테인리스(STS) 흑색 니켈 도금 시 나사산 치수 불량과 조립 마찰에 의한 도금 박리(Peeling) 위험이 제기됨.

## 🔍 2. Root Cause Analysis
- 황동 소재는 고습 환경에서 녹청(부식) 취약.
- 스테인리스(STS316)의 표면 부동태 피막으로 인해 일반 도금 시 밀착력이 떨어지며, 밀착력을 높이기 위한 추가 전처리 공정 시 M2.6과 같은 소형 나사산의 정밀 공차를 벗어나는 두께 증가 발생.

## 🛠️ 3. Resolution
- **STS316 + 흑색 착색(Black Oxide) 적용:** 황동을 배제하고 STS316을 원소재로 채택하되, 층을 쌓는 도금(Plating) 대신 표면을 화학적으로 산화시키는 **'흑색 착색(Black Oxide)'** 공법을 적용.
- 이를 통해 치수 변화 없이 정밀한 나사산(M2.6)을 유지하고 도금 박리 위험을 원천 차단함.

## 🛡️ 4. Next Action
- [ ] 도면 노트에 "STS316 흑색 착색 적용 (나사산 공차 주의 및 도금 박리 불가)" 주석 명기.
