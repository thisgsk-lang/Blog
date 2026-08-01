---
title: T1042 Freescale QorIQ 쿼드코어 통신 프로세서
date: 2026-06-18
tags: [T1042, Freescale, NXP, QorIQ, processor, telecom, MCU]
category: 기구설계/부품자료
status: 진행중
source: ../RAW/T1042_RAW.md
---

# T1042 — Freescale QorIQ 쿼드코어 통신 프로세서

> **분류**: 부품 위키 / MCU 주요 부품  
> **부품 역할**: 통신장비 MCU의 메인 애플리케이션 프로세서  
> **태그**: `#processor` `#telecom` `#mcu` `#QorIQ` `#Freescale` `#NXP` `#PowerArchitecture`

---

## 요약

T1042는 Freescale Semiconductor(現 NXP)의 **QorIQ 계열 멀티코어 SoC 프로세서**다.  
**Power Architecture® 기반 e5500 코어 4개**를 탑재하여 통신장비, 네트워킹 장비, 무선 인프라 등에서 **컨트롤 플레인 + 데이터 플레인 + 애플리케이션 처리**를 단일 칩으로 수행한다.

자사 통신장비 MCU 보드에서 **메인 애플리케이션 프로세서**로 사용 중.

---

## 기본 스펙 한눈에 보기

| 항목 | T1042 (MCU 탑재 모델) |
|------|----------------------|
| 제조사 | Freescale / NXP |
| 코어 수 | 4 × e5500 (Power Architecture) |
| 최대 코어 클럭 | 1,500 MHz |
| L2 Cache (per core) | 256 KB |
| L3 Platform Cache | 256 KB (공유) |
| 메모리 인터페이스 | DDR3L / DDR4, 최대 1,600 MT/s |
| SerDes | 8-lane, 최대 5 GHz |
| 패키지 | 780-ball FC-PBGA, 23×23 mm |
| 코어 전압 (VDD) | 1.0 V ± 30 mV |
| 최대 접합 온도 (TJ) | 105°C |
| 동작 온도 범위 | 0°C ~ 105°C TJ (Extended: -40°C) |
| 최대 소비 전력 | 약 9.6 W (1500 MHz, Max 모드) |

---

## 내부 블록 구성

```
┌─────────────────────────────────────────────────────────┐
│                    T1042 SoC                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐ │
│  │ e5500 #1 │  │ e5500 #2 │  │ e5500 #3 │  │e5500#4 │ │
│  │ 256KB L2 │  │ 256KB L2 │  │ 256KB L2 │  │256KB L2│ │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └───┬────┘ │
│       └──────────────┴──────────────┴────────────┘      │
│                  CoreNet Coherency Manager               │
│                  256KB L3 Platform Cache                 │
├──────────────────────────────────────────────────────────┤
│  DDR3L/DDR4  │  DPAA (패킷가속)  │  8-lane SerDes 5GHz │
│  Controller  │  Parse/Queue/Sec │  PCIe×4 SATA×2       │
├──────────────────────────────────────────────────────────┤
│  Ethernet: RGMII×2, MII×1, SGMII×5(1G), SGMII×2(2.5G) │
│  USB2.0×2  │  eSDHC  │  eSPI  │  I2C×4  │  DUART×2    │
│  IFC(NAND/NOR)  │  TDM  │  GPIO×109  │  DMA×2          │
│  QUICC Engine (TDM/HDLC/UART RISC 컨트롤러)             │
└──────────────────────────────────────────────────────────┘
```

---

## 통신장비 MCU에서의 역할

이 SoC는 통신장비 MCU 보드에서 다음 역할을 수행한다:

| 역할 | 설명 |
|------|------|
| **컨트롤 플레인 처리** | 라우팅 프로토콜, 관리 패킷 처리 |
| **데이터 플레인 가속** | DPAA를 통한 패킷 파싱/분류/큐잉 하드웨어 가속 |
| **메모리 관리** | DDR3L/DDR4 주 메모리 제어, 부트 플래시(IFC) 관리 |
| **고속 인터페이스** | PCIe/SATA/SGMII 연결을 통한 외부 칩셋 연동 |
| **보안** | 암호화 가속기(SEC), Secure Boot Fuse |
| **실시간 타이밍** | IEEE 1588 타임스탬프 (통신장비 동기화) |
| **주변 제어** | I2C, SPI, GPIO로 센서/EEPROM/팬 등 주변 기기 제어 |

---

## 전원 설계 포인트

MCU 보드 설계 시 반드시 확인해야 할 전원 시스템 정보.

### 주요 전원 도메인

| 전원 도메인 | 전압 | 대상 |
|-----------|------|------|
| VDD / VDDC | **1.0 V** | 코어 및 플랫폼 |
| OVDD / O1VDD | **1.8 V** | GPIO, IFC, JTAG, SYSCLK |
| DVDD | **2.5 V** | DUART, I2C, TDM, MPIC |
| G1VDD | **1.2 V (DDR4)** / **1.35 V (DDR3L)** | DDR I/O |
| S1VDD | **1.0 V** | SerDes 수신 내부 |
| X1VDD | **1.35 V** | SerDes 송신 패드 |
| USB_HVDD | **3.3 V** | USB PHY Transceiver |
| AVDD_CGA | **1.8 V** | PLL 전원 |

### 전원 시퀀싱 주의사항
- 전원 투입 Ramp Rate: **최대 25 V/ms** (선형 10%→90% 기준)
- 전원 차단 후 재투입: 모든 전원이 **0.4 V 이하**로 내려간 후 재시작 필요
- Deep Sleep 모드: VDD/S1VDD OFF, VDDC만 ON (대기 전력 약 **0.4 W**)

---

## 열 설계 포인트

| 항목 | 값 |
|------|-----|
| 최대 접합 온도 (TJ max) | **105°C** |
| 확장 온도 범위 | -40°C ~ TJ 105°C |
| 히트싱크 없음 자연 대류 열저항 | — (히트싱크 필수 권장) |
| 히트싱크 53×53×25 mm + Thermal Grease 기준 | **6.6 °C/W** |
| 내장 온도 센서 | Temperature Diode 내장 (TJ 실시간 모니터링 가능) |

> ⚠️ **1500 MHz, Max 조건에서 최대 소비 전력 9.64 W** → 히트싱크 필수. 기구 설계 시 방열 구조 및 열 저항 계산 필요.

---

## 소비 전력 요약 (설계 마진용)

| 동작 조건                        | 합계 전력                 |
| ---------------------------- | --------------------- |
| 1500 MHz, Typical (TJ=65°C)  | **6.47 W**            |
| 1500 MHz, Thermal (TJ=105°C) | **8.89 W**            |
| 1500 MHz, Maximum (TJ=105°C) | **9.64 W** ← 전원 설계 기준 |
| 1400 MHz, Maximum (TJ=105°C) | **7.66 W**            |
| 1200 MHz, Maximum (TJ=105°C) | **6.75 W**            |
| Deep Sleep                   | **0.4 W**             |

> I/O 전력(DDR, PCIe, USB 등) 별도 합산 필요. DDR3L 1600MT/s 기준 약 **860 mW(Typ) ~ 1,760 mW(Max)** 추가.

---

## 패키지 정보

| 항목 | 내용 |
|------|------|
| 패키지 | FC-PBGA (Flip Chip, Pb-free) |
| 볼 수 | 780 balls |
| 크기 | 23 mm × 23 mm |
| 기구 간섭 주의사항 | BGA 솔더 볼 높이 및 PCB Pad 설계 확인 필요 |

---

## 부품 번호 해석 예시

```
T1042 NWQ7 B

T1042   → 제품 모델 (4-core QorIQ)
N       → SEC 없음 (N=없음, E=있음)
W       → Core 주파수: 1500 MHz
Q       → DDR Rate: 1600 MT/s
7       → 패키지: FC-PBGA Pb-free
B       → Die Revision: Rev 1.1
```

---

## 관련 문서 / 참고

| 문서 | 내용 |
|------|------|
| `T1042.pdf` | 공식 Datasheet (Freescale Rev.2, 06/2015) |
| AN4825 | AVDD_PLAT 필터링 적용 가이드 |
| T1040 Reference Manual | 레지스터 맵 및 소프트웨어 인터페이스 |

---

## 변경 이력

| 날짜 | 내용 | 작성자 |
|------|------|--------|
| 2026-06-17 | 최초 작성 (Datasheet RAW 기반) | 순기 |

---

*이 문서는 T1042.pdf (Freescale QorIQ T1042/T1022 Data Sheet, Rev.2, 06/2015) 를 기반으로 작성된 사내 부품 위키입니다.*
