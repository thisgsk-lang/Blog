import os

# 1. 폴더 생성
folder_name = "Mechanical_Design_Guidelines"
os.makedirs(folder_name, exist_ok=True)

# 2. 파일 내용 정의 (Obsidian 프론트매터 포함)
files = {
    "openHaul_10U_MDU_PCB_Thickness_Mismatch.md": """---
type: guideline
category: mechanical-design
tags: [MDU, pcb-thickness, interference, slot-07]
date: 2026-08-01
---
# 🚨 Post-Mortem: MDU PCB 두께 오설계 (1.8t vs 1.6t)
- **현상:** Unit 07 슬롯(1.8t)과 표준 슬롯(1.6t) 간의 PCB 두께 편차로 기구 간섭 발생.
- **해결책 (설계 지침):** Unit 07 전면판 스탠드오프 길이를 3.6mm에서 3.4mm로 축소 적용하여 기구적 치수 보상.
- **Next Action:** 엑셀 사양서(Slot Matrix)에 PCB 1.8t 및 3.4mm 스탠드오프 명시.
""",
    "openHaul_10U_Standoff_PokaYoke_Assembly.md": """---
type: guideline
category: assembly
tags: [poka-yoke, human-error, standoff-height]
date: 2026-08-01
---
# 🚨 Post-Mortem: 스탠드오프 조립 혼용(Human Error) 방지
- **현상:** 3.4mm와 3.6mm 스탠드오프의 육안 식별 불가로 오조립 위험.
- **해결책 (설계 지침):** 3.4mm 스탠드오프에 '흑색(Black)' 표면 처리를 적용하여 직관적인 색상 포카요케(Poka-yoke) 도입.
""",
    "openHaul_10U_STS316_BlackOxide_Tolerance.md": """---
type: guideline
category: material-finish
tags: [STS316, black-oxide, tolerance, verdigris]
date: 2026-08-01
---
# 🚨 Post-Mortem: STS316 흑색 착색 및 공차/박리 문제 개선
- **현상:** 황동의 녹청 리스크 및 STS 도금 시 M2.6 나사산 공차 초과, 조립 마찰에 의한 박리 발생.
- **해결책 (설계 지침):** 도금(Plating) 대신 층이 쌓이지 않는 화학적 산화 처리인 '흑색 착색(Black Oxide)' 적용.
- **Next Action:** 도면 노트에 "STS316 흑색 착색 적용 (나사산 공차 주의 및 도금 박리 불가)" 명기.
""",
    "openHaul_10U_SPCC_Whisker_Prevention.md": """---
type: guideline
category: EMI-shielding
tags: [SPCC, ENP, zinc-whisker, short-circuit]
date: 2026-08-01
---
# 🚨 Post-Mortem: SPCC 커버류 휘스커(Whisker) 단락 리스크 방지
- **현상:** PCB 인접 SPCC 커버에 아연(Zinc) 도금 적용 시 아연 휘스커 성장으로 인한 치명적 메인보드 숏트 위험.
- **해결책 (설계 지침):** 아연 도금을 전면 배제하고, 무전해 니켈 도금(ENP, 5~10μm) 적용. 케이블 보호를 위해 모든 가공면에 디버링(Deburring) 필수.
"""
}

# 3. 파일 쓰기
for filename, content in files.items():
    filepath = os.path.join(folder_name, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print(f"✅ '{folder_name}' 폴더에 Obsidian 연동용 MD 파일 4개가 성공적으로 생성되었습니다.")