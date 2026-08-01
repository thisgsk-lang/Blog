---
type: trouble-shooting
status: resolved
project: openHaul
component: EMI_Shielding_Covers
tags: [SPCC, ENP, zinc-whisker, short-circuit, NEBS]
date: 2026-08-01
---

# 🚨 Post-Mortem: SPCC 커버류 휘스커(Whisker) 발생에 따른 단락 리스크 방지 건

## 📋 1. Incident Summary
- **현상:** PCB와 맞닿는 SPCC 재질의 Top/Bottom Cover에 일반 전기 아연(Zinc) 도금을 적용할 경우, 내부 압축 응력에 의해 아연 휘스커가 성장하여 메인보드에 치명적인 숏트(Short)를 유발할 가능성이 대두됨.

## 🔍 2. Root Cause Analysis
- 전기 아연(Zinc) 도금이나 주석(Tin) 도금은 가성비가 우수하나, 금속 수염(Whisker)을 성장시키는 물성적 특성이 있어 고밀도 통신 장비의 내부 기구물(PCBA 인접부)에는 매우 부적합함.

## 🛠️ 3. Resolution
- **무전해 니켈 도금 (ENP) 적용:** 아연/주석 도금을 전면 배제하고, 휘스커가 발생하지 않으며 도금 두께(5~10μm)가 매우 균일하게 입혀지는 무전해 니켈 도금을 SPCC 커버류에 적용함.
- **케이블 보호 가공 추가:** 커버 절단면에 의한 내부 케이블 손상을 막기 위해 모든 모서리에 디버링(Deburring) 가공을 의무화함.

## 🛡️ 4. Next Action
- [ ] SPCC 커버류 도면에 "표면처리: 무전해 니켈 도금(ENP) (두께 5~10μm)" 및 "모든 가공면 날카롭지 않게 디버링(Deburring)할 것" 주석 필수 명기.
