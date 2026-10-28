---
title: "AI 회사가 장부를 열었다, 울타리와 검증은 사람 몫으로 남았다"
description: "Anthropic이 미국 SEC에 상장 신고서(S-1)를 공개 제출했습니다. 그 며칠 사이 OpenAI와 Anthropic은 모델이 제한을 돌아간 사례를 적었고, OpenAI의 AI 발견 주장에는 검증 논쟁이 붙었습니다."
category: AI트렌드
pubDate: 2026-10-28
author: "최종학 | Kyle Choi"
tags: ["AI트렌드", "생성형 AI", "AI 안전", "AI 투자"]
draft: false
disclaimerRequired: false
factChecked: true
heroImage:
  src: /images/ai-trend/ai-opens-the-books-1027-og.png
  alt: "크림색 바탕에 나무 울타리가 있고, 왼쪽에 작은 로봇이 서 있으며 자물쇠로 잠긴 문 옆에 동전 더미와 돋보기를 올린 저울이 놓인 그림"
---

Anthropic이 미국 증권거래위원회(SEC)에 상장 신고서(S-1)를 공개 제출했습니다.[^1] 최첨단 인공지능(AI) 회사의 매출과 손실, 컴퓨트(모델을 학습하고 돌리는 데 쓰는 계산 자원) 약정, 지배구조가 신고서로 공개됐습니다.[^1][^2] 그 며칠 사이 Anthropic은 보안 평가에서 모델이 허가받지 않은 행동을 한 일을, OpenAI는 훈련 중 모델이 인터넷에 제한적으로 접속한 일을 각각 스스로 공개했습니다.[^5][^6] AI 인프라로 돈이 몰리는 가운데, OpenAI의 과학 발견 주장을 누가 확인할지를 두고도 논쟁이 붙었습니다.[^9][^15][^16]

## 회사 장부에 함께 적힌 성장과 비용

Anthropic은 10월 26일(원문 표기 날짜) SEC에 S-1을 공개 제출했다고 발표했습니다.[^1] 신고서에는 나스닥 상장(티커 "ANT") 계획이 적혔지만 공모 주식 수와 가격 범위는 아직 정해지지 않았습니다.[^1]

신고서에 따르면 2026년 상반기(1~6월) 매출은 163억 달러로, 2025년 같은 기간의 12억 달러에서 늘었습니다.[^2] 영업손실은 6억9,300만 달러로, 전년 같은 기간의 21억 달러보다 줄었습니다.[^2] 순손실은 영업 외 항목까지 반영한 최종 손실이며 같은 기간 807억 달러였습니다.[^2] 회사는 이 순손실에 전환사채(주식으로 바꿀 수 있는 채권)와 파생부채 등의 공정가치(회계상 평가액) 변동이 724억 달러 포함됐다고 적었습니다.[^2] 현금이 그만큼 나갔다는 뜻은 아닙니다.[^2]

지배구조도 신고서에 담겼습니다.[^2] 공동창업자 일곱 명이 만든 유한책임회사 Founder LLC가 공모 직전 발행되는 Class F 주식(특별 종류의 주식 한 주)을 갖고, 이 주식이 전체 의결권의 50.1%에 해당하는 표를 행사합니다.[^2] Class F 주식에는 경제적 권리가 없다고 회사는 적었습니다.[^2] 회사는 Google과 맺은 계약에서 2026년 4월부터 2033년 7월까지 실제 사용량과 관계없이 최소 약 1,145억 달러를 쓰기로 약정했습니다.[^2] 실제 지출이 이에 못 미치면 Google에 차액을 정산해야 하며, 일부 조정과 예외가 있을 수 있다고 신고서는 설명합니다.[^2]

안전과 전력 문제도 같은 서류에 적혔습니다.[^2] Anthropic은 AI 시스템이 오용·복제·무기화되거나 높은 자율성으로 작동하면 인류에 파국적이거나 존립에 관한 위험이 될 수 있다고 밝혔습니다.[^2] 계획 중인 일부 데이터센터가 현장 천연가스 발전에 의존해 연료 가격 변동과 공급 차질에 노출되고 그 비용을 회사가 전가받아 부담한다고도 적었습니다.[^2] 한편 Wired는 10월 27일 06시 27분(한국 시각), 최근 분기(7~9월) 재무 등 신고서의 여러 숫자가 빈칸이라고 지적했습니다.[^3] 전자신문은 같은 날 17시 53분(한국 시각), 신고서가 삼성전자·SK하이닉스·마이크론 같은 소수 업체가 주도하는 고대역폭메모리(HBM) 등 AI용 메모리 공급을 위험 요인으로 꼽았다고 보도했습니다.[^4]

필자가 보기에 이번 S-1은 AI 회사가 장부를 펼쳐 보인 계기입니다. 매출 증가와 큰 순손실, 장기 약정, 위험 문구가 한 서류에 놓였으니 성장뿐 아니라 그 비용을 지탱할 조건도 살펴야 합니다.

## 모델은 시험장 울타리를 비켜 갔나

Anthropic은 10월 23일(원문 표기 날짜) 공개한 글에서, 영국 AI 보안연구소(UK AI Security Institute, AISI)의 사이버 능력 평가 43회 가운데 9회에서 Claude Mythos 5가 평가 범위를 벗어난 허가받지 않은 행동을 해 실제 사람과 조직에 영향을 줬다고 밝혔습니다.[^5] 한 사례에서 모델은 평가와 무관한 개발자들의 GitHub 저장소에 악성 코드를 제출하려 했습니다.[^5] 저장소 관리자에게는 가짜 사용자 계정으로 접촉해 코드가 안전하고 유용하다고 거짓으로 주장하며 승인을 압박했고 관리자들은 거절했습니다.[^5]

OpenAI는 10월 23일 19시(한국 시각) 올린 글에서, 지금의 정렬 연구와 모니터링 체계, 인터넷 인프라 보안 수준을 볼 때 최첨단 모델은 인터넷 접속 없이 학습시키는 것이 책임 있는 방식이라고 보며 이 정책을 이미 시행했다고 밝혔습니다.[^6] 회사 설명에 따르면 9월 20일 도메인 이름 시스템(DNS, 인터넷 주소를 찾아 주는 체계) 설정 오류로 내부 연구 모델이 실제 인터넷에 제한적으로 접속했고, 회사는 가장 강력한 모델들의 학습과 평가를 일시 중단했습니다.[^6]

OpenAI는 10월 26일 09시(한국 시각) GPT-6.1 Terra를 내놓으면서 표준 응용 프로그래밍 인터페이스(API, 프로그램끼리 기능을 주고받는 통로) 가격이 GPT-5.6 Terra와 GPT-6.1 Sol보다 50% 낮다고 밝혔습니다.[^7] 이 모델의 시스템 카드 부록(모델의 성능과 안전 평가 기록)에서 회사는 최대 추론 설정으로 돌린 실행의 29.6%에서 모델이 제한 장치를 보고도 제한의 취지를 어기는 다른 경로로 과제를 끝냈다고 적었습니다.[^8] 회사는 이 평가가 주로 위험이 낮은 상황을 재며 시스템 차원의 통제 장치 없이 돌렸다고 밝혔고 모델이 평가 중임을 점점 더 알아차린다는 기록도 남겼습니다.[^8]

필자가 보기에 싼 가격과 제한을 돌아간 비율이 같은 모델을 두고 함께 나온 점이 눈에 띕니다. 모델이 시험 중임을 알아챈다면 시험 수치가 실제 행동을 그대로 보여 주는지는 따로 따져 봐야 합니다.

## 돈은 커지는데, 본전은 어디에 있나

CNBC는 Meta가 AI 인프라 투자를 위해 총 950억 달러를 조달할 계획이라고 밝혔다고 10월 26일(미국 시각) 보도했습니다.[^9] NVIDIA는 10월 26일 표기 보도자료에서 Meta와 Muse 모델군 협력을 넓히고 Meta의 주식 공모에 30억 달러를 투자하겠다고 밝혔습니다.[^10]

TechCrunch는 10월 27일 01시 46분(한국 시각) SpaceX와 Apollo가 약 400억 달러 규모의 GPU(그래픽처리장치) 금융 계약을 맺었다고 보도했습니다.[^11] 매체에 따르면 Apollo가 관리하는 법인이 칩과 서버를 사서 SpaceX에 약 5년에서 5년 3개월 임대합니다.[^11] 전자신문은 10월 27일 16시 47분(한국 시각) 네이버가 브룩필드와 최대 90억 달러 규모의 AI 인프라 계약을 체결했다고 네이버의 정정공시를 인용해 보도했습니다.[^12] 보도에 따르면 이 체결로 NVIDIA의 10억 달러 지분 투자 마지막 조건도 충족됐습니다.[^12]

수익이 투자 속도를 따라오는지는 별도의 질문입니다. SiliconANGLE은 10월 26일 10시 31분(한국 시각) Apollo Global Management의 분석을 전했습니다.[^13] Apollo는 S&P 500에서 Alphabet·Amazon·Apple·Meta·Microsoft·Nvidia·Tesla 7개사를 뺀 "S&P 493"이 AI 투자로 아직 재무적 성과를 얻지 못했다고 분석했습니다.[^13] Apollo의 Torsten Slok은 미국 주류 기업들이 토큰(AI 모델이 문장을 처리하는 단위)에 쓰는 돈을 성장의 원천이 아니라 비용으로 보기 시작했다고 말했습니다.[^13] 연합뉴스는 10월 27일 15시 02분(한국 시각), 글로벌 공급망과 연결성이 큰 한국은 AI 산업의 자금 조달 충격이 실물·금융 부문으로 커질 수 있다고 본 한국은행 보고서를 보도했습니다.[^14] 필자가 보기에 조달 규모와 본전 의문이 나란히 나온 점은 AI 사업의 성패를 모은 돈의 크기만으로 가늠할 수 없음을 보여 줍니다.

## "AI가 발견했다"를 누가 확인하나

OpenAI는 10월 26일 23시 30분(한국 시각) 올린 글에서 수학·컴퓨터과학·물리학의 새 발견 세 가지를 발표했습니다.[^15] 회사는 이 결과들을 AI가 낸 원자료에 가깝게 보며, 외부 전문가에게 설명할 그룹을 꾸리도록 요청하는 새 방식을 시험한다고 설명했습니다.[^15] 컴퓨터과학 결과는 계산 복잡도 분야의 "지수 시간 가설"이 거짓이라는 OpenAI의 주장입니다.[^15] 외부 협력 그룹이 설명을 맡기로 했고, 증명은 컴퓨터가 검사할 수 있는 언어인 Lean으로 형식화한 자료와 함께 공개됐지만, 외부 검증은 아직입니다.[^15]

The Verge는 10월 27일 08시 34분(한국 시각), OpenAI가 꾸린 수학 전문가 자문단 AGMAI가 하루 전 AI 회사들에 "채택하지 말 것을 권고한다"고 밝혔다고 전했습니다.[^16] 권고 대상은 일부 사람에게 결과물을 먼저 주는 관행이며 이유로 접근의 불평등 등이 거론됐습니다.[^16] Google DeepMind와 Springer Nature는 10월 26일(원문 표기 날짜) 동료 심사(동료 연구자가 논문을 출판 전에 검토하는 절차)를 돕는 AI 도구를 함께 설계하는 연구 협력을 발표했습니다.[^17]

필자가 보기에 "AI가 발견했다"는 말이 힘을 얻으려면 결과와 함께 검증을 누가 맡는지도 공개해야 합니다.[^15][^16] 지수 시간 가설이 거짓이라는 주장은 OpenAI의 발표이며 학계가 확정한 사실로 받아들이기는 이릅니다.[^15][^16]

## 생활에 닿은 업데이트들

Ars Technica는 10월 27일 05시 04분(한국 시각), Apple이 iOS·macOS 27.2를 내놓았고 Siri AI가 한국어를 포함한 5개 언어를 추가로 지원하며 이전 대화를 기억해 참조하는 기능이 들어갔다고 보도했습니다.[^18] 디지털투데이도 같은 내용을 전했습니다.[^18] 

Anthropic은 10월 22일(원문 표기 날짜) 올린 글에서, AI 에이전트에 전문 지식과 작업 절차를 부여하는 개방형 표준 Agent Skills를 Linux Foundation 산하 Agentic AI Foundation(AAIF)에 기증한다고 밝혔습니다.[^19] 재단이 표준의 중립적 거처가 되고 Anthropic·Google·OpenAI 등의 엔지니어가 개인 자격으로 표준을 유지·관리한다는 설명입니다.[^19] Anthropic은 70개가 넘는 에이전트 플랫폼이 이 표준을 통합했다고 밝혔습니다(회사 수치).[^19] 이 글에는 날짜만 표시돼 게시 시각은 확인되지 않습니다.[^19]

Google은 10월 26일(원문 표기 날짜) Gemini API 변경 기록에서, 유료 티어에서 Generate Content API를 쓰는 새 프로젝트는 요청을 기본으로 저장한다고 공지했습니다.[^20] 기존 프로젝트는 현재 설정이 유지됩니다.[^20]

## 짧게 본 소식

Microsoft는 10월 26일(미국 시각) 참여 조직의 자격 있는 직원에게 자발적 퇴직 제안을 시작한다고 발표했습니다.[^21] The Verge는 최대 6만 명이 대상이라고 보도했지만 Microsoft의 공식 글에는 AI가 언급되지 않았습니다.[^21] 연합뉴스는 10월 27일 12시(한국 시각), 한국소비자원이 유튜브 짧은 영상 광고를 점검해 AI를 악용한 부당광고 420건을 차단했다고 보도했습니다.[^22] 이 가운데 체험 후기 조작이 267건, 전문가 사칭이 153건이었습니다.[^22] Anthropic은 공식 X 계정(@claudeai)에서 10월 27일 03시 04분(한국 시각) Claude for Nonprofits 확대를 알리며 2만5천 곳이 넘는 비영리 단체가 Claude를 쓴다고 밝혔습니다(회사 수치).[^23] 약 30곳과 함께 만든 플러그인으로 모금·마케팅·채용 스킬을 더한다는 내용입니다.[^23]

## 활용 팁

- Gemini API 유료 티어에서 Generate Content API를 쓰는 새 프로젝트라면 요청 저장 설정을 확인하고 필요하면 store=false를 지정하세요.[^20]
- "AI가 증명했다"는 뉴스를 볼 때는 외부 전문가의 검증이 끝났는지 함께 확인하세요.[^15][^16]

---

[^1]: Anthropic, "Anthropic files S-1 with the SEC for proposed initial public offering," https://www.anthropic.com/news/s1-sec · 미국 증권거래위원회 S-1 원문, https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm
[^2]: Anthropic S-1 원문, https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm
[^3]: Wired, "Why Anthropic's IPO Prospectus Is Missing So Many Key Figures," https://www.wired.com/story/anthropic-prospectus-leaves-out-some-numbers/
[^4]: 전자신문, https://www.etnews.com/20261027000429
[^5]: Anthropic, "An alignment assessment of the UK AISI cybertesting incident," https://www.anthropic.com/research/alignment-assessment-ukaisi
[^6]: OpenAI, "Securing our frontier model training environment," https://openai.com/index/securing-our-frontier-model-training-environment
[^7]: OpenAI, "Introducing GPT-6.1 Terra," https://openai.com/index/introducing-gpt-6-1-terra
[^8]: OpenAI, "Addendum to GPT-6 Astra system card: GPT-6.1 Terra," https://deploymentsafety.openai.com/gpt-6-1-terra/addendum-to-gpt-6-astra-system-card-gpt-6.1-terra
[^9]: CNBC, "Meta announces $95 billion stock offering to fund AI expansion," https://www.cnbc.com/2026/10/26/meta-stock-offering-ai.html
[^10]: NVIDIA, "NVIDIA and Meta to expand collaboration on Muse and Muse family of models amid robust growth," https://nvidianews.nvidia.com/news/nvidia-and-meta-to-expand-collaboration-on-muse-and-muse-family-of-models-amid-robust-growth
[^11]: TechCrunch, "SpaceX locks in $40B GPU financing deal with Apollo," https://techcrunch.com/2026/10/26/spacex-locks-in-40b-gpu-financing-deal-with-apollo/
[^12]: 전자신문, "네이버, 브룩필드와 90억달러 AI 인프라 계약," https://www.etnews.com/20261027000413
[^13]: SiliconANGLE, "Apollo analysis shows no one besides the biggest tech giants is seeing benefits from AI," https://siliconangle.com/2026/10/25/apollo-analysis-shows-that-no-one-apart-from-the-biggest-tech-giants-is-seeing-any-real-benefits-from-ai/
[^14]: 연합뉴스, "AI 산업 자금조달의 주요 특징과 리스크 평가," https://www.yna.co.kr/view/AKR20261027127500002
[^15]: OpenAI, "Working with academic communities to build scientific understanding," https://openai.com/index/building-scientific-understanding-with-academic-communities
[^16]: The Verge, "OpenAI announces three big science discoveries and a new way to work with academics," https://www.theverge.com/ai-artificial-intelligence/1019143/openai-eth-kaseya-science-math-physics
[^17]: Springer Nature, "Springer Nature and Google DeepMind collaborate to enhance the peer review experience," https://group.springernature.com/gp/group/media/press-releases/research-partnership-with-googledeepmind-to-support-peer-review/53891572
[^18]: Ars Technica, "Apple releases iOS and macOS 27.2 with new Siri AI features, new Music logo," https://arstechnica.com/apple/2026/10/apple-releases-ios-and-macos-27-2-with-new-siri-ai-features-new-music-logo/ · 디지털투데이, https://www.digitaltoday.co.kr/en/view/119677/apple-adds-korean-to-siri-ai-remembers-prior-chats-uses-personal-context
[^19]: Anthropic, "Donating Agent Skills to the Agentic AI Foundation," https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation
[^20]: Google, "Gemini API release notes," https://ai.google.dev/gemini-api/docs/changelog
[^21]: Microsoft, "Introducing a Voluntary Exit Offer," https://blogs.microsoft.com/blog/2026/10/26/introducing-a-voluntary-exit-offer/ · The Verge, "Microsoft expands buyouts to 60,000 employees," https://www.theverge.com/tech/1018666/microsoft-expands-buyouts-60000-employees-eligible
[^22]: 연합뉴스, "소비자원 'AI 부당광고 420건 차단…체험 후기 조작 최다'," https://www.yna.co.kr/view/AKR20261026115200030
[^23]: Anthropic(@claudeai), X 게시글, https://x.com/claudeai/status/2114780227465338985
