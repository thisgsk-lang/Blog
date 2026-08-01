---
type: trouble-shooting
status: resolved
project: openHaul
component: 10U_Chassis_Interfaces
tags: [MDU, pcb-thickness, interference, slot-07]
date: 2026-08-01
---

# 🚨 Post-Mortem: openHaul 10U Chassis MDU PCB 두께 오설계 (1.8t vs 1.6t)

## 📋 1. Incident Summary
- **현상:** Unit 07 슬롯에 고정 배치되는 MDU의 PCB 두께가 1.8t로 설계되어, 1.6t 표준 Unit을 기준으로 일괄 모델링된 섀시 메인보드 조립 시 기구 간섭 및 불량이 발생함.

## 🔍 2. Root Cause Analysis
- 14개 슬롯 전체의 PCB 두께를 1.6t로 일괄 가정하여 설계함에 따라, Unit 07에서 0.2t의 조립 편차가 발생.

## 🛠️ 3. Resolution
- **치수 보상 설계 적용:** 섀시 자체의 구조를 변경하는 대신, Unit 07 전면판 스탠드오프의 길이를 표준(3.6mm)보다 0.2mm 축소한 **3.4mm**로 적용하여 PCB 두께 편차를 기구적으로 흡수함.

## 🛡️ 4. Next Action
- [ ] 엑셀 사양서(Slot Matrix)의 Unit 07 행에 PCB 1.8t 및 3.4mm 스탠드오프 적용 명시.
