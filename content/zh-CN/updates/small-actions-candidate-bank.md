# 有谱小动作候选库

> 本文件用于批量收集和筛选低风险、可执行、可嵌入正文的日常健康小动作。它不是偏方集合，也不是治疗建议。所有候选动作进入正文前，都必须重新核对医学边界和可信来源。

最后更新：2026-06-03

## 1. 定位

《健康有谱》不能只告诉读者“不要乱做”，也应该在低风险场景里告诉读者“现在可以先做什么”。

这类内容暂称为“有谱小动作”：

> 在绿色低风险场景下，普通人可以先做的低成本、低风险、不会替代就医的小动作。

它们应该嵌入相关章节或工具页，不单独做成“大杂烩章节”。

## 2. 筛选方法

每个候选动作按 6 个维度打分，每项 0-2 分，总分 12 分。

| 维度 | 0 分 | 1 分 | 2 分 |
|---|---|---|---|
| 安全性 | 容易伤害或延误就医 | 一般安全，但有明显禁忌 | 普通人低风险，禁忌清楚 |
| 成本与可及性 | 需要昂贵产品或专业服务 | 需要少量工具或条件 | 基本免费或低成本 |
| 证据与来源 | 主要靠传闻或营销 | 有传统经验/专业共识/间接证据 | 有官方机构或专业组织资料支持 |
| 可执行性 | 复杂，容易做错 | 需要一点说明 | 一看就能做 |
| 边界清楚度 | 很容易被当成治疗 | 需要强提醒 | 很容易写清楚不是治疗 |
| 适配章节 | 不知道放哪里 | 可放进附录 | 能自然嵌入现有章节/工具页 |

初步分级：

- A：10-12 分，优先试点；
- B：7-9 分，可以纳入候选，但需要更强边界；
- C：4-6 分，暂时观察或只做反例；
- D：0-3 分，不纳入。

排除规则：

- 宣称治疗疾病；
- 需要个体诊断才能判断是否适合；
- 可能延误急症；
- 需要复杂手法或专业操作；
- 与药物、慢病、孕产期、儿童、老年人安全明显相关但边界不清；
- 强绑定产品、品牌或消费。

## 3. 统一写法

每个小动作进入正文时，建议用固定格式：

```text
适合谁：
怎么做：
不要怎么用：
什么时候停止或就医：
可信资料：
```

正文语气：

- 用“可以尝试”“可能有帮助”“作为辅助”；
- 不用“有效治疗”“立刻改善”“适合所有人”；
- 不把小动作写成医学路径的替代品。

## 4. A 类：优先试点

### A1. 晕车晕船、轻度恶心时按压内关/P6

- 适合场景：晕车、晕船、轻度恶心，且没有危险信号。
- 怎么做：按压手腕内侧 P6/内关位置，或使用按压腕带；写作时不必展开复杂穴位理论，只给安全、简明定位。
- 不要怎么用：不能写成急救；不能覆盖胸痛、晕厥、严重腹痛、意识改变、持续呕吐、脱水等情况。
- 适配位置：`symptom-action-guide.md` 的轻度恶心/晕车晕船绿色提示；也可进入未来“绿色场景可做什么”卡片。
- 来源锚点：MedlinePlus: Nausea and acupressure；MedlinePlus: Motion Sickness。
- 初步评级：A。

### A2. 测血压前先坐稳 5 分钟，30 分钟内避开咖啡、运动和吸烟

- 适合场景：家庭自测血压、复查血压波动、体检指标解读。
- 怎么做：测量前安静坐 5 分钟，背部支撑、脚放平、手臂在心脏高度；测前 30 分钟不吸烟、不喝咖啡、不运动。
- 不要怎么用：单次读数不能自行诊断或调整药物；异常值要按医生建议复测或就医。
- 适配位置：`checkup-markers.md`、`chronic-marker-log.md`。
- 来源锚点：CDC Measuring Your Blood Pressure；American Heart Association Home Blood Pressure Monitoring。
- 初步评级：A。

### A3. 就医前带一份用药清单

- 适合场景：多种药物、老人陪诊、慢病复诊、看新医生。
- 怎么做：列出所有处方药、非处方药、保健品、草药、剂量、频率和过敏史；不清楚时带药盒或照片。
- 不要怎么用：不要自行合并、停药或改剂量。
- 适配位置：`doctor-visit-checklist.md`、`doctor-visit-preparation.md`、`elder-care-basics.md`、`family-health-record.md`。
- 来源锚点：MedlinePlus Taking multiple medicines safely；MedlinePlus Medicines。
- 初步评级：A。

### A4. 饭前、如厕后、处理食物前后认真洗手

- 适合场景：家庭感染预防、照护老人和孩子、胃肠炎季节、做饭前后。
- 怎么做：用流动水和肥皂洗手；没有肥皂和水时使用至少 60% 酒精的免洗手消毒剂。
- 不要怎么用：不能替代食品安全、疫苗或生病时的隔离与就医。
- 适配位置：`what-to-manage.md`、`elder-care-basics.md`；也可作为未来“家庭健康默认值”小卡片。
- 来源锚点：CDC About Handwashing。
- 初步评级：A。

### A5. 食品安全四步：清洁、分开、做熟、冷藏

- 适合场景：家庭做饭、老人儿童照护、夏季食物中毒预防。
- 怎么做：手和台面清洁；生熟分开；肉蛋海鲜充分加热；剩菜及时冷藏。
- 不要怎么用：出现严重腹泻、发热、血便、脱水、持续呕吐时不能只靠家庭处理。
- 适配位置：`what-to-manage.md`、`symptom-action-guide.md` 的腹泻/呕吐绿色边界。
- 来源锚点：CDC Preventing Food Poisoning；USDA Food Safety Basics。
- 初步评级：A。

### A6. 轻度腹泻或呕吐后先重视补液

- 适合场景：轻度、短期腹泻或呕吐后的家庭观察。
- 怎么做：补充清淡液体；每次稀便后补液；儿童或脱水风险人群优先使用口服补液方案并咨询医生。
- 不要怎么用：婴幼儿、老人、孕产期、慢病患者、血便、高热、严重腹痛、持续呕吐、脱水迹象，不能只靠补液观察。
- 适配位置：`symptom-action-guide.md` 腹泻/呕吐；`red-flags.md`。
- 来源锚点：MedlinePlus Diarrhea；MedlinePlus When you have diarrhea；CDC Yellow Book Travelers' Diarrhea。
- 初步评级：A-，需要较强边界。

### A7. 防晒组合：遮挡、阴凉、防晒霜和太阳镜一起用

- 适合场景：户外活动、通勤、儿童和老人户外、皮肤癌风险沟通。
- 怎么做：遮阳帽、衣物、阴凉、防晒霜和太阳镜组合使用。
- 不要怎么用：不要把防晒霜当成无限暴晒的许可；晒伤严重、水疱或异常皮肤变化需就医。
- 适配位置：`healthspan-and-risk-curve.md` 或未来皮肤/专科主题；也适合《皮肤有谱》。
- 来源锚点：CDC Sun Safety Facts；FDA Tips to Stay Safe in the Sun。
- 初步评级：A。

### A8. 20-20-20 屏幕休息法

- 适合场景：长时间看屏幕后的眼疲劳、干涩、视物疲劳。
- 怎么做：每 20 分钟看 20 英尺外约 20 秒；也可配合眨眼、调整屏幕距离和光线。
- 不要怎么用：不能替代眼科检查；视力突然变化、眼痛、红眼、闪光、黑影、外伤等需要专业判断。
- 适配位置：`specialty-care-map.md` 的眼科绿色提示。
- 来源锚点：American Optometric Association Digital Eyestrain；American Academy of Ophthalmology 相关公众建议后续复核。
- 初步评级：A-，专业来源支持，需补官方/协会来源复核。

### A9. 老人家庭防跌倒：先清掉地面危险

- 适合场景：父母变老、夜间起床、曾经跌倒或差点跌倒。
- 怎么做：移除松动地毯和杂物，增加夜灯，常用物品放在容易拿到的位置，浴室防滑。
- 不要怎么用：已经跌倒、头部撞击、疼痛、走路明显变差或意识改变，不能只靠改造环境。
- 适配位置：`elder-care-basics.md`。
- 来源锚点：CDC STEADI Check for Safety；CDC Older Adult Fall Prevention。
- 初步评级：A。

### A10. 每天把久坐换成一点轻活动

- 适合场景：久坐工作、白天掉电、代谢风险、睡眠动力不足。
- 怎么做：每隔一段时间站起来走动、伸展或做轻活动；先从可坚持的小量开始。
- 不要怎么用：不能替代医生给出的运动限制；胸痛、明显气短、晕厥、运动后异常症状需就医。
- 适配位置：`metabolic-health.md`、`sleep-and-recovery.md`、`healthspan-and-risk-curve.md`。
- 来源锚点：CDC Benefits of Physical Activity；Physical Activity Guidelines for Americans。
- 初步评级：A。

### A11. 把运动分成有氧、力量、平衡和柔韧四类来记录

- 适合场景：想开始运动但不知道从哪里下手；中年后担心体力、代谢、睡眠、跌倒和功能能力下降。
- 怎么做：不要只记录“有没有运动”，而是粗略记录本周是否有走路/骑车等有氧活动、抗阻/自重等力量活动、单脚站/太极/稳定性训练等平衡活动，以及轻柔活动度练习。
- 不要怎么用：不能给个体化运动处方；有心血管病、糖尿病并发症、严重关节疼痛、近期手术、孕产期或运动时胸痛气短晕厥等情况，应先问医生或专业人士。
- 适配位置：`healthspan-and-risk-curve.md`、`metabolic-health.md`、`sleep-and-recovery.md`、`elder-care-basics.md`、`chronic-marker-log.md`。
- 来源锚点：CDC Benefits of Physical Activity；Physical Activity Guidelines for Americans；AHA physical activity recommendations。
- 初步评级：A。

### A12. 每天 5-10 分钟的低门槛启动运动

- 适合场景：长期久坐、运动启动困难、觉得 150 分钟目标太远的人。
- 怎么做：先从饭后散步、楼下走一圈、轻度家务、站起来活动 5-10 分钟开始；重点是建立默认动作，而不是第一天就追求强度。
- 不要怎么用：不能把低门槛启动写成足够的长期运动量；出现胸痛、明显气短、晕厥、心悸异常或运动后症状加重，应停止并就医。
- 适配位置：`metabolic-health.md`、`healthspan-and-risk-curve.md`、`sleep-and-recovery.md`。
- 来源锚点：CDC Benefits of Physical Activity；NIDDK Tips for Starting Physical Activity；Physical Activity Guidelines for Americans。
- 初步评级：A。

## 5. B 类：可考虑，但边界要更强

### B1. 轻柔清洁舌面

- 适合场景：口腔卫生、口气困扰、舌面明显残留。
- 怎么做：刷牙时轻柔刷舌面，或用舌刮器轻轻清理；避免刮到出血或疼痛。
- 不要怎么用：不能写成“排毒”；不能替代刷牙、牙线和看牙医；持续口臭、白斑、疼痛、出血、溃疡应看牙医或医生。
- 适配位置：未来口腔主题或 `topic-backlog.md` 的口腔健康。
- 来源锚点：ADA 口腔卫生材料、ADA floss/interdental cleaners；需要进一步找更直接的 ADA/MouthHealthy 页面。
- 初步评级：B+，可用但要避免“玄学化”。

### B2. 中年以上或特殊饮食人群核查维生素 D、B12 和复合维生素需求

- 适合场景：饮食单一、素食/纯素、长期少晒太阳、老年人、消化吸收问题、医生提示缺乏风险。
- 怎么做：先看饮食、年龄、既往检查和用药；必要时和医生讨论是否检测或补充。
- 不要怎么用：不能写成“中年人都该补”；不能把复合维生素写成抗衰、抗癌、护心或增强免疫方案；避免高剂量长期自行补。
- 适配位置：`supplement-evidence-traps.md`、`health-product-checklist.md`、`elder-care-basics.md`。
- 来源锚点：NIH ODS Multivitamin/mineral Supplements；NIH ODS Vitamin D；NIH ODS Vitamin B12；USPSTF Vitamin Supplementation to Prevent CVD/Cancer。
- 初步评级：B，价值高但误用风险高。

### B3. 睡前 10 分钟身体降档

- 适合场景：睡前身体绷紧、肩颈腰背轻度不适、压力大但无危险信号。
- 怎么做：慢呼吸、身体扫描、热水澡、不疼的轻柔活动。
- 不要怎么用：不能治疗慢性失眠；不能带痛硬拉、强刺激按摩或自行做高风险颈部扳动。
- 适配位置：已进入 `sleep-and-recovery.md`，后续可优化。
- 来源锚点：NCCIH Relaxation Techniques；CDC Benefits of Physical Activity；MedlinePlus Neck pain。
- 初步评级：B+。

### B4. 压力上来时先做 3 分钟暂停

- 适合场景：紧张、烦躁、和父母沟通前、要冲动购买保健品前。
- 怎么做：离开争论现场、慢呼吸、写下一个最小下一步。
- 不要怎么用：不能替代心理危机处理；自伤自杀风险、惊恐频繁、功能明显受损需专业帮助。
- 适配位置：`talking-with-parents.md`、`reading-health-news.md`、`health-product-checklist.md`。
- 来源锚点：CDC Managing Stress；SAMHSA/988 用于危机边界。
- 初步评级：B+。

### B5. 3 分钟呼吸觉察或正念暂停

- 适合场景：睡前脑子停不下来、焦虑感上来、读健康新闻后紧张、和父母沟通前、身体紧绷但没有危险信号。
- 怎么做：坐稳或站稳，把注意力放到呼吸、身体触点或周围声音上；不追求“清空大脑”，只练习发现自己又被想法带走，然后轻轻回到当下。
- 不要怎么用：不能写成治疗焦虑、抑郁、创伤或失眠；如果练习时出现强烈恐慌、创伤回忆、自伤念头或功能明显受损，应寻求心理健康专业帮助。
- 适配位置：`sleep-and-recovery.md`、`brain-and-mental-health.md`、`talking-with-parents.md`、`health-product-checklist.md`。
- 来源锚点：NCCIH Meditation and Mindfulness；CDC Managing Stress；SAMHSA/988 用于危机边界。
- 初步评级：B+，适合嵌入但不宜过度承诺。

### B6. 身体扫描：用来发现紧张，不用来治疗疼痛

- 适合场景：睡前身体绷着、白天压力大、肩颈腰背轻度紧张。
- 怎么做：从头到脚依次注意身体部位，只标记“紧、松、疼、不舒服、没感觉”，不急着纠正；必要时记录到睡眠或压力日志。
- 不要怎么用：不能替代疼痛诊断、康复治疗或心理治疗；持续疼痛、麻木无力、外伤后疼痛、夜间痛醒等需要专业判断。
- 适配位置：`sleep-and-recovery.md`、`brain-and-mental-health.md`。
- 来源锚点：NCCIH Meditation and Mindfulness；NCCIH Relaxation Techniques；MedlinePlus Neck pain。
- 初步评级：B+。

## 6. C 类：暂时观察或只做反例

### C1. “姜”用于恶心、晕车或胃不舒服

- 暂缓原因：常见经验很多，但涉及补充剂剂量、孕产期、凝血药物、胃肠刺激等边界；如果只是食物层面可能低风险，但不适合第一批。
- 处理：暂不进入正文。若未来纳入，只写食物层面和谨慎边界，不写剂量或治疗。

### C2. 冷水洗脸、拍打、掐人中等“急救醒神”

- 暂缓原因：容易延误真正急症，且“急救”语境风险高。
- 处理：不作为推荐；如有必要，可作为反例说明意识改变、晕厥、胸痛等应进入急救路径。

### C3. 刷酸、排毒茶、护肝片、清肠、酵素等“日常保健小妙招”

- 暂缓原因：强营销、风险和收益不清、容易替代正规路径。
- 处理：只进入健康产品/保健品证据陷阱，不作为小动作推荐。

## 7. 下一步工作

第一轮建议只选少量试点，不要全部写进正文。当前小迭代优先考虑长期健康底座动作，其余候选先保留在库里，不急着进入正文。

本轮优先试点已完成第一遍：

1. 每天 5-10 分钟低门槛启动运动：已嵌入 `sleep-and-recovery.md` 和 `checkup-markers.md`；
2. 3 分钟呼吸觉察或正念暂停：已嵌入 `sleep-and-recovery.md`、`talking-with-parents.md`、`health-product-checklist.md` 和 `symptom-action-guide.md`；
3. 身体扫描：已嵌入 `sleep-and-recovery.md`，写成觉察和记录，不写成疼痛治疗。

后续候选试点：

1. 内关/P6：嵌入 `symptom-action-guide.md` 的轻度恶心/晕车晕船绿色提示；
2. 测血压前 5 分钟安静准备：嵌入 `checkup-markers.md` 和 `chronic-marker-log.md`；
3. 用药清单：强化 `doctor-visit-checklist.md` 和 `elder-care-basics.md`；
4. 食品安全四步：嵌入 `what-to-manage.md` 或 `symptom-action-guide.md`；
5. 老人防跌倒家庭环境：强化 `elder-care-basics.md`；
6. 久坐换轻活动：嵌入 `metabolic-health.md` 和 `sleep-and-recovery.md`；
7. 轻柔舌面清洁：先放入 `topic-backlog.md` 的口腔健康，不急着进主书；
8. 维生素核查：只放在保健品/产品清单里做“不要一刀切”的边界提醒；
9. 运动四类记录：嵌入健康寿命、代谢、睡眠和老年照护相关章节。

每个试点完成后，记录到 `content/zh-CN/errata/review-log.md` 或章节写作包。

## 8. 当前来源候选

- MedlinePlus: [Nausea and acupressure](https://medlineplus.gov/ency/article/002117.htm)
- MedlinePlus: [Motion Sickness](https://medlineplus.gov/motionsickness.html)
- CDC: [Measuring Your Blood Pressure](https://www.cdc.gov/high-blood-pressure/measure/index.html)
- American Heart Association: [Home Blood Pressure Monitoring](https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/monitoring-your-blood-pressure-at-home)
- MedlinePlus: [Taking multiple medicines safely](https://medlineplus.gov/ency/patientinstructions/000883.htm)
- CDC: [About Handwashing](https://www.cdc.gov/handwashing)
- CDC: [Preventing Food Poisoning](https://www.cdc.gov/food-safety/prevention/index.html)
- USDA FSIS: [Food Safety Basics](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/steps-keep-food-safe)
- MedlinePlus: [Diarrhea](https://medlineplus.gov/diarrhea.html)
- MedlinePlus: [When you have diarrhea](https://medlineplus.gov/ency/patientinstructions/000121.htm)
- CDC: [Sun Safety Facts](https://www.cdc.gov/skin-cancer/sun-safety/index.html)
- FDA: [Tips to Stay Safe in the Sun](https://www.fda.gov/consumers/consumer-updates/tips-stay-safe-sun-sunscreen-sunglasses)
- CDC: [Benefits of Physical Activity](https://www.cdc.gov/physical-activity-basics/benefits/)
- CDC: [Health Benefits of Physical Activity for Adults](https://www.cdc.gov/physical-activity-basics/health-benefits/adults.html)
- ODPHP: [Physical Activity Guidelines for Americans](https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines)
- NIDDK: [Tips for Starting Physical Activity](https://www.niddk.nih.gov/health-information/weight-management/tips-get-active/tips-starting-physical-activity)
- American Heart Association: [Recommendations for Physical Activity in Adults and Kids](https://www.heart.org/en/healthy-living/exercise-and-physical-activity/fitness-basics/aha-recs-for-physical-activity-in-adults)
- CDC: [STEADI - Older Adult Fall Prevention](https://www.cdc.gov/steadi/index.html)
- MedlinePlus: [Neck pain](https://medlineplus.gov/ency/article/003025.htm)
- NCCIH/NIH: [Relaxation Techniques: What You Need To Know](https://www.nccih.nih.gov/health/relaxation-techniques-what-you-need-to-know)
- NCCIH/NIH: [Meditation and Mindfulness: Effectiveness and Safety](https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety)
- NCCIH/NIH: [Mind and Body Practices](https://www.nccih.nih.gov/health/mind-and-body-practices)
- CDC: [Managing Stress](https://www.cdc.gov/mental-health/living-with/index.html)
- NIH ODS: [Multivitamin/mineral Supplements](https://ods.od.nih.gov/factsheets/MVMS-Consumer/)
- NIH ODS: [Vitamin D](https://ods.od.nih.gov/factsheets/VitaminD-Consumer/)
- NIH ODS: [Vitamin B12](https://ods.od.nih.gov/factsheets/VitaminB12-Consumer/)
- USPSTF: [Vitamin, Mineral, and Multivitamin Supplementation to Prevent Cardiovascular Disease and Cancer](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/vitamin-supplementation-to-prevent-cvd-and-cancer-preventive-medication)
- American Dental Association: [Dental Floss/Interdental Cleaners](https://www.ada.org/resources/ada-library/oral-health-topics/floss)
- American Optometric Association: [Digital Eyestrain / 20-20-20 rule](https://www.aoa.org/AOA/Documents/Healthy%20Eyes/Digital_eyestrain.pdf)
