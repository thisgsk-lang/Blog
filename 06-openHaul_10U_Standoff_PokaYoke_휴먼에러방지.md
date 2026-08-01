---
type: trouble-shooting
status: resolved
project: openHaul
component: Assembly_Process
tags: [poka-yoke, human-error, standoff-height]
date: 2026-08-01
---

# 🚨 Post-Mortem: 스탠드오프 치수 유사성에 따른 조립 혼용(Human Error) 방지 건

## 📋 1. Incident Summary
- **현상:** MDU 전용 스탠드오프(3.4mm)와 표준 스탠드오프(3.6mm)의 길이 차이가 0.2mm에 불과하여, 생산 라인 작업자가 육안으로 구분하지 못하고 오조립(혼용)할 우려가 제기됨.

## 🔍 2. Root Cause Analysis
- 물리적 치수 차이(0.2mm)가 인간의 육안 식별 한계를 넘어섬. 혼입 발생 시 전수 검사 외에는 선별할 방법이 없음.

## 🛠️ 3. Resolution
- **직관적 포카요케(Poka-yoke) 도입:** 치수 외에 **색상**으로 부품을 완전히 분리함.
- 표준 3.6mm 스탠드오프는 무처리(은색)를 유지하고, 3.4mm 스탠드오프는 흑색 표면처리를 적용하여 작업자가 색상만으로도 오조립을 즉시 인지하도록 공정 개선.

## 🛡️ 4. Next Action
- [ ] BOM 및 조립 절차서에 Unit 07 스탠드오프는 반드시 '흑색(Black)' 부품을 사용할 것을 시각적으로 강조.
