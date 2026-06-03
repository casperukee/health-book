# 医学事实复查记录

建议复查节奏：

- 高风险医学边界：每 3-6 个月复查；
- 官方指南链接：每 6 个月检查；
- 主书章节：每 12 个月整体复读；
- 医学热点：先进入 `../updates/topic-backlog.md`，不要直接改主书。

## 2026-06-03：睡眠章深睡段落压缩

- 状态：reader experience patch
- 位置：`content/zh-CN/book/part-2-body-risk-map/sleep-and-recovery.md`
- 复查内容：根据手机预览反馈，删除深睡段落中和首屏风险卡重复的“中年睡眠不足与痴呆风险”说明，避免在同一章前部反复解释同一个研究。
- 使用来源：本次未新增医学事实。
- 处理说明：把深睡段落改成“三个重点 + 三个观察方法”的扫读结构：身体降速、大脑恢复、代谢清理线索；白天状态、睡眠连续性、设备趋势。保留“机制线索不等于个体诊断”的边界，但减少解释性长段。
- 下次建议复查：继续按手机阅读节奏压缩前 3 屏，优先处理重复、作者旁白和大段解释。

## 2026-06-03：睡眠章读者视角语言清理

- 状态：reader experience patch
- 位置：`content/zh-CN/book/part-2-body-risk-map/sleep-and-recovery.md`
- 复查内容：根据手机预览反馈，清理正文中外露的作者旁白和写作意图说明，例如“改变动力”“普通读者来说”“讲得有分寸”等表达；改成读者视角的事实、场景、观察和动作。
- 使用来源：本次未新增医学事实。
- 处理说明：把医学边界保留在措辞和限定中，而不是把“我们为什么这样写”直接说给读者听；同时补充 NSDR 和 CBT-I 的简明解释，避免工具箱部分出现读者难以理解的专业缩写。
- 下次建议复查：继续用手机预览逐段检查，优先删掉像写作提纲、内部判断或模型说明的句子。

## 2026-06-03：睡眠章标题冲击力与行动语言补丁

- 状态：reader experience patch
- 位置：`content/zh-CN/book/part-2-body-risk-map/sleep-and-recovery.md`
- 复查内容：根据二次试读反馈，保留“讲清长期因果，增加改变动力”的核心方向，但调整表达策略：把首屏三张卡从抽象的“大脑维护、身体维修、白天可用性”改成更直接的痴呆风险、血压血糖体重/心血管风险、白天安全与情绪影响；把方法段标题改成“固定起床、见光、活动、降刺激”等可执行语言。
- 使用来源：沿用本章已登记的 NHLBI/NIH、NINDS/NIH、NIH Research Matters 等睡眠来源；本次未新增医学事实。
- 处理说明：采纳“标题要更直观、更有行动指向”的建议；不采纳“罪魁祸首”式表达，避免把睡眠不足写成某种疾病的单一原因。睡眠与痴呆仍写成人群研究关联，深睡与脑清理仍写成机制线索，不写成个体确定因果。
- 下次建议复查：继续收集普通读者、睡眠医学、运动康复和心理健康反馈后再做下一轮。

## 2026-06-03：v0.8 睡眠章长期恢复主线重构

- 状态：reader experience patch
- 位置：`content/zh-CN/book/part-2-body-risk-map/sleep-and-recovery.md`
- 复查内容：根据试读反馈，重新审视睡眠章整体阅读路径。将章节主线从“睡眠问题分层”改为“长期恢复为什么值得改”：前置大脑维护、身体维修和白天可用性三条因果链，补强深睡、脑脊液/类淋巴系统和中年睡眠不足与认知风险的谨慎说明；随后用私有库中“睡眠系统、精力系统、恢复工具箱”的结构，承接睡眠节律、白天精力四层和按场景选择恢复工具。
- 使用来源：沿用本章 2026-06-03 已登记的 NHLBI/NIH、NINDS/NIH、NIH Research Matters、MedlinePlus、NCCIH/NIH 等睡眠与恢复来源；本次未新增医学事实。
- 处理说明：本次重点是结构、节奏和手机阅读体验，不扩大医学承诺；睡眠与痴呆、脑清理、深睡等内容写成机制线索和人群研究关联，不写成个体命运判断；危险信号保留在工具箱和后文边界中，避免压过“长期恢复系统”的主线。
- 下次建议复查：继续收集睡眠医学、运动康复和普通读者反馈后再做下一轮，不因单条反馈扩写成更长章节。

## 2026-06-03：v0.8 内容可传播性小迭代

- 状态：reader feedback patch
- 位置：
  - `content/zh-CN/book/part-2-body-risk-map/sleep-and-recovery.md`
  - `content/zh-CN/book/part-1-healthspan-risk-and-markers/checkup-markers.md`
  - `content/zh-CN/book/part-3-family-health-os/talking-with-parents.md`
  - `content/zh-CN/handbook/playbooks/symptom-action-guide.md`
  - `content/zh-CN/handbook/templates/health-product-checklist.md`
- 复查内容：根据灰度反馈，把睡眠章从“现象和处理层级”进一步改成“为什么值得认真改变 + 怎么低门槛开始”。新增睡眠与白天功能、血压代谢心血管风险、大脑维护、深睡、脑脊液/类淋巴系统和中年睡眠不足与后续痴呆风险关联的谨慎说明，同时压缩浅层重复，避免把章节堆成睡眠科普长文。
- 使用来源：
  - CDC: Benefits of Physical Activity
  - CDC: Health Benefits of Physical Activity for Adults
  - CDC: Managing Stress
  - NHLBI/NIH: Stages of Sleep
  - NINDS/NIH: Brain Basics: Understanding Sleep
  - NIH Research Matters: How Sleep Clears the Brain
  - NIH Research Matters: Lack of sleep in middle age may increase dementia risk
  - NCCIH/NIH: Meditation and Mindfulness
- 处理说明：本次仍作为 v0.8 基础上的小修订，不升级到 v0.9。新增的 5-10 分钟低门槛运动、3 分钟呼吸觉察/暂停、身体扫描，都写成长期健康底座和家庭决策辅助，不写成治疗、诊断、运动处方或替代医生建议。睡眠和痴呆相关内容写成机制线索和人群研究关联，不做个体因果推断。
- 下次建议复查：2026-09 至 2026-12；如收到睡眠医学、运动康复、心理健康或临床读者反馈，应提前复查。

## 2026-06-03：v0.8 睡眠恢复工具箱补强

- 状态：reader experience patch
- 位置：`content/zh-CN/book/part-2-body-risk-map/sleep-and-recovery.md`
- 复查内容：参考私有库“睡眠、精力与恢复 专题索引”的系统结构，把睡眠底座、白天精力输出和恢复工具中间层重新整合进公开章节；新增彩色“恢复工具箱”模块，用绿色、黄色、蓝色、红色区分短时恢复、回到节律、降低唤醒和专业帮助边界。
- 使用来源：
  - NHLBI/NIH: Insomnia - Treatment
  - MedlinePlus: Insomnia
  - NCCIH/NIH: Relaxation Techniques
  - NCCIH/NIH: Meditation and Mindfulness
- 处理说明：本次不搬运私有资料卡原文、课程路径、PDF/OCR 链接或本地路径，只吸收“睡眠是底座、精力是输出、工具箱是中间层”的结构判断。CBT-I 写成专业失眠治疗路径，不写成普通读者照着执行的自助方案；NSDR、呼吸和冥想写成辅助降唤醒工具，不替代夜间睡眠或专业治疗。
- 下次建议复查：2026-09 至 2026-12；如收到睡眠医学或心理治疗专业反馈，应提前复查。

## 2026-06-02：v0.8 睡眠章身体阻力小修订

- 状态：reader feedback patch
- 位置：`content/zh-CN/book/part-2-body-risk-map/sleep-and-recovery.md`
- 复查内容：根据试读反馈，把睡眠章的“降阻力”从环境阻力和心理阻力扩展为环境、心理和身体三类阻力，补充肩颈、腰背、下颌、呼吸、疼痛和身体高张力对睡眠恢复的影响，并强调不要把局部紧张简化成“头疼医头”的自我处理。
- 使用来源：
  - CDC: Benefits of Physical Activity
  - MedlinePlus: Neck pain
  - NCCIH/NIH: Relaxation Techniques: What You Need To Know
- 处理说明：本次修订只提供普通家庭可记录、可观察、可温和降档的框架，不教自我诊断颈椎、筋膜链、神经卡压、姿势代偿或具体手法；持续疼痛、麻木无力、外伤后疼痛、发热头痛伴颈部僵硬、吞咽或呼吸困难、夜间痛醒、走路和平衡异常等仍进入专业判断路径。
- 下次建议复查：2026-09 至 2026-12；如收到运动康复、睡眠医学或临床读者反馈，应提前复查。

## 2026-06-02：v0.8 高风险边界第一轮强化

- 状态：boundary review pass
- 位置：
  - `content/zh-CN/book/medical-boundaries.md`
  - `content/zh-CN/book/part-1-healthspan-risk-and-markers/checkup-markers.md`
  - `content/zh-CN/book/part-2-body-risk-map/metabolic-health.md`
  - `content/zh-CN/book/part-2-body-risk-map/cardiovascular-event-chain.md`
  - `content/zh-CN/book/part-2-body-risk-map/cancer-and-major-illness.md`
  - `content/zh-CN/book/part-3-family-health-os/elder-care-basics.md`
  - `content/zh-CN/handbook/playbooks/red-flags.md`
  - `content/zh-CN/handbook/playbooks/symptom-action-guide.md`
- 复查内容：红黄绿症状分流、急症信号、症状缓解后的行动边界、体检/筛查/诊断边界、家庭慢病记录边界、癌症筛查和多癌种早筛营销边界、老年跌倒/认知/用药安全提醒。
- 使用来源：
  - MedlinePlus: Recognizing medical emergencies
  - American Heart Association: Heart Attack, Stroke and Cardiac Arrest Symptoms
  - NHLBI/NIH: Heart Attack Symptoms
  - CDC: Signs and Symptoms of Stroke
  - CDC: About Sepsis
  - CDC HEAR HER Campaign: Urgent Maternal Warning Signs and Symptoms
  - MedlinePlus: How to Understand Your Lab Results
  - CDC: About High Blood Pressure
  - CDC: Diabetes Testing
  - NCI: Cancer Screening Overview
  - NCI: Questions and Answers about Multi-Cancer Detection Tests
  - NCI: Tests and Procedures Used to Diagnose Cancer
  - CDC: Cancer Screening Tests
  - CDC: About Older Adult Fall Prevention
  - CDC: STEADI - Older Adult Fall Prevention
  - NIA/NIH: Cognitive Health and Older Adults
  - MedlinePlus: Taking Multiple Medicines Safely
  - MedlinePlus: Fall Risk Assessment
- 处理说明：本次强化普通家庭“什么时候不能继续观察或自我解释”的边界，尤其强调红色信号不因短暂缓解而自动降级、绿色观察只适合低风险且短暂改善的情况、筛查异常不等于确诊但需要诊断路径、筛查阴性不能解释持续症状、老年跌倒和用药变化应更谨慎。本次不是专业医学审稿，所有相关页面仍保留 `medical_review_status: needs_review`。
- 下次建议复查：2026-09 至 2026-12；如收到医学专业读者反馈或官方资料更新，应提前复查。

## 2026-06-01：`medical-boundaries.md` 初始边界校准

- 状态：draft review
- 位置：`content/zh-CN/book/medical-boundaries.md`
- 复查内容：急救红线、心梗/卒中/心脏骤停、心理危机、孕产期危险信号、脓毒症风险边界。
- 使用来源：
  - American Heart Association: Heart Attack, Stroke and Cardiac Arrest Symptoms
  - NHLBI/NIH: Heart Attack Symptoms
  - CDC: Signs and Symptoms of Stroke
  - SAMHSA: 988 Suicide & Crisis Lifeline
  - CDC HEAR HER Campaign: Urgent Maternal Warning Signs and Symptoms
  - CDC: About Sepsis
- 处理说明：本次只校准普通人“何时不应继续自行判断”的边界，不写诊断规则、用药建议或个体化治疗建议。
- 下次建议复查：2026-09 至 2026-12

## 2026-06-01：Part 1 初始来源校准

- 状态：draft review
- 位置：
  - `content/zh-CN/book/part-1-healthspan-risk-and-markers/healthspan-and-risk-curve.md`
  - `content/zh-CN/book/part-1-healthspan-risk-and-markers/checkup-markers.md`
- 复查内容：健康寿命、功能能力、慢病长期风险、化验结果解释边界、血压/血脂/血糖检测资料入口。
- 使用来源：
  - WHO: Healthy ageing and functional ability
  - CDC: Healthy Aging at Any Age
  - CDC: About Chronic Diseases
  - MedlinePlus: Healthy Aging
  - MedlinePlus: How to Understand Your Lab Results
  - MedlinePlus: Medical Tests
  - CDC: About High Blood Pressure
  - CDC: Cholesterol
  - CDC: Diabetes Testing
  - CDC: A1C Test for Diabetes and Prediabetes
- 处理说明：本次只校准读者理解框架和就医沟通边界，不写个体化诊断、治疗、筛查或用药建议。
- 下次建议复查：2026-12 至 2027-06

## 2026-06-01：MVP 第二批页面初始来源校准

- 状态：draft review
- 位置：
  - `content/zh-CN/book/part-2-body-risk-map/metabolic-health.md`
  - `content/zh-CN/book/part-2-body-risk-map/cardiovascular-event-chain.md`
  - `content/zh-CN/book/part-4-health-information-defense/supplement-evidence-traps.md`
  - `content/zh-CN/handbook/playbooks/doctor-visit-checklist.md`
  - `content/zh-CN/handbook/templates/family-health-record.md`
- 复查内容：四高和心肾代谢风险、心血管事件链、保健品证据与监管边界、就医沟通和家庭健康档案。
- 使用来源：
  - CDC: About High Blood Pressure
  - CDC: About Cholesterol
  - CDC: Diabetes Testing
  - CDC: Gout
  - American Heart Association: What is Metabolic Syndrome?
  - CDC: Heart Disease Risk Factors
  - CDC: About Coronary Artery Disease
  - NHLBI/NIH: Atherosclerosis
  - NHLBI/NIH: Heart Attack Causes and Risk Factors
  - American Heart Association: Life's Essential 8
  - FDA: Dietary Supplements
  - NIH Office of Dietary Supplements: Dietary Supplements: What You Need to Know
  - NCCIH: Using Dietary Supplements Wisely
  - FTC: Dietary Supplements
  - MedlinePlus: Talking With Your Doctor
  - AHRQ: Questions Are the Answer
  - HealthIT.gov: The Guide to Getting and Using Your Health Records
- 处理说明：本次只校准公众理解、风险边界、就医沟通和消费判断，不写个体化诊断、治疗、筛查、用药或产品推荐。
- 下次建议复查：2026-12 至 2027-06

## 2026-06-01：Part 2 后三条主风险线与手册页初始来源校准

- 状态：draft review
- 位置：
  - `content/zh-CN/book/part-2-body-risk-map/sleep-and-recovery.md`
  - `content/zh-CN/book/part-2-body-risk-map/brain-and-mental-health.md`
  - `content/zh-CN/book/part-2-body-risk-map/cancer-and-major-illness.md`
  - `content/zh-CN/handbook/playbooks/red-flags.md`
  - `content/zh-CN/handbook/templates/chronic-marker-log.md`
- 复查内容：睡眠不足和失眠边界、心理健康与认知变化、癌症筛查和治疗边界、危险信号速查、家庭慢病指标记录。
- 使用来源：
  - CDC: About Sleep
  - NHLBI/NIH: Why Is Sleep Important?
  - MedlinePlus: Insomnia
  - NIA/NIH: Cognitive Health and Older Adults
  - CDC: Reducing Risk for Dementia
  - NIMH: Depression
  - NIMH: Anxiety Disorders
  - SAMHSA: 988 Suicide & Crisis Lifeline
  - NCI: Cancer Screening Overview
  - NCI: Types of Cancer Treatment
  - CDC: Cancer Screening Tests
  - CDC: Measuring Your Blood Pressure
  - American Heart Association: Home Blood Pressure Monitoring
  - MedlinePlus: How to Understand Your Lab Results
- 处理说明：本次只校准公众识别、家庭记录和专业求助边界，不写个体化筛查计划、心理诊断、癌症治疗方案、用药调整或指标目标值。
- 下次建议复查：2026-09 至 2027-06；其中危险信号和心理危机入口按 3-6 个月复查。

## 2026-06-01：专科就医与健康信息防御页面初始来源校准

- 状态：draft review
- 位置：
  - `content/zh-CN/book/part-2-body-risk-map/specialty-care-map.md`
  - `content/zh-CN/book/part-4-health-information-defense/devices-tests-and-longevity-marketing.md`
  - `content/zh-CN/book/part-4-health-information-defense/reading-health-news.md`
  - `content/zh-CN/handbook/templates/health-product-checklist.md`
- 复查内容：专科就医准备、健康设备和消费者检测边界、抗衰和健康欺诈、健康新闻与新研究阅读、健康产品购买前风险分级。
- 使用来源：
  - MedlinePlus: Choosing a Doctor or Health Care Service
  - AHRQ: Be More Engaged in Your Healthcare
  - HealthIT.gov: The Guide to Getting and Using Your Health Records
  - CDC HEAR HER Campaign: Urgent Maternal Warning Signs and Symptoms
  - National Eye Institute: Eye Health Information
  - NIDDK/NIH: Bladder Control Problems
  - NIAMS/NIH: Back Pain
  - FDA: Home Health and Consumer Devices
  - FDA: Direct-to-Consumer Tests
  - FDA: Health Fraud Scams
  - FTC: Common Health Scams
  - MedlinePlus: Evaluating Health Information
  - NCCIH: Finding and Evaluating Online Resources
  - NCCIH: How To Make Sense of a Scientific Journal Article
  - NIH: Clinical Research Trials and You
- 处理说明：本次只校准公众资料入口、购买前判断和信息阅读边界，不写个体化专科诊疗方案、产品推荐、检测推荐、抗衰方案或基于新闻的行动建议。
- 下次建议复查：2026-12 至 2027-06；涉及 FDA/FTC 监管和健康欺诈资料时按 6-12 个月复查。

## 2026-06-01：Part 3 家庭健康操作系统初始来源校准

- 状态：draft review
- 位置：
  - `content/zh-CN/book/part-3-family-health-os/what-to-manage.md`
  - `content/zh-CN/book/part-3-family-health-os/doctor-visit-preparation.md`
  - `content/zh-CN/book/part-3-family-health-os/talking-with-parents.md`
  - `content/zh-CN/book/part-3-family-health-os/elder-care-basics.md`
- 复查内容：家庭健康资料、就医前准备、父母健康沟通、健康消费底线、老年跌倒、认知变化、用药安全和生活能力观察。
- 使用来源：
  - HealthIT.gov: The Guide to Getting and Using Your Health Records
  - HealthIT.gov: What's in Your Health Record
  - MedlinePlus: Talking With Your Doctor
  - AHRQ: Be More Engaged in Your Healthcare
  - AHRQ: Do You Know the Right Questions to Ask?
  - CDC: Recommended Vaccines for Adults
  - CDC: About Older Adult Fall Prevention
  - CDC: STEADI - Older Adult Fall Prevention
  - NIA/NIH: Cognitive Health and Older Adults
  - MedlinePlus: Taking Multiple Medicines Safely
  - MedlinePlus: Older Adult Health
  - MedlinePlus: Fall Risk Assessment
  - SAMHSA: 988 Suicide & Crisis Lifeline
  - FDA: Health Fraud Scams
  - FTC: Common Health Scams
- 处理说明：本次只校准家庭记录、沟通、照护观察和专业求助边界，不写个体化疫苗建议、用药调整、认知诊断、跌倒风险诊断、治疗方案或家庭强制决策。
- 下次建议复查：2026-09 至 2027-06；其中危险信号、心理危机、跌倒和用药安全入口按 3-6 个月优先复查。
