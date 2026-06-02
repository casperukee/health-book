# Changelog

## Unreleased

- 初始化项目章程、目录结构和写作蓝图。
- 确认实施原则：新书框架优先，私有资料卡只作为参考材料，不做简单移植。
- 完成 Front Matter 前两章的第一轮推进：`00-start-here.md` 和 `medical-boundaries.md`。
- 建立急症与危险信号的首批官方来源登记。
- 完成 Part 1 两章第一版：`healthspan-and-risk-curve.md` 和 `checkup-markers.md`。
- 补充健康寿命、慢病风险、体检指标与实验室检测的来源登记和术语表。
- 完成 MVP 第二批核心页面：`metabolic-health.md`、`cardiovascular-event-chain.md`、`supplement-evidence-traps.md`、`doctor-visit-checklist.md`、`family-health-record.md`。
- 补充代谢、心血管、保健品、就医沟通和健康档案的来源登记、术语和目录链接。
- 完成 Part 2 后三条主风险线初稿：`sleep-and-recovery.md`、`brain-and-mental-health.md`、`cancer-and-major-illness.md`。
- 补充 Part 5 两个操作页初稿：`red-flags.md` 和 `chronic-marker-log.md`。
- 完成 Part 2 `specialty-care-map.md`，补齐身体主风险线的专科就医边界。
- 完成 Part 4 `devices-tests-and-longevity-marketing.md` 与 `reading-health-news.md`，补齐健康信息防御系统初稿。
- 补充 Part 5 `health-product-checklist.md`，把保健品、设备、检测和抗衰消费统一到购买前检查流程。
- 完成 Part 3 家庭健康操作系统四章：`what-to-manage.md`、`doctor-visit-preparation.md`、`talking-with-parents.md`、`elder-care-basics.md`。
- 增加 VitePress + GitHub Pages 阅读层，提供侧边栏、搜索、页面大纲和上一章/下一章。
- 为中文主书章节补充 Markdown 阅读导航，支持 GitHub 直接连续阅读。
- 重写 `00-start-here.md` 和 `supplement-evidence-traps.md` 作为非模板化样章。
- 完成中文主书 15 篇正文的非模板化标题和阅读路径第一轮修订，减少“开场场景/一句话结论/行动清单”等外露模板感。
- 将项目中文名从“健康判断力”调整为“健康有谱”。
- 强化核心手册页的可执行性：增加危险信号家庭短版、就医一页清单、家庭健康最小档案、慢病复诊摘要和健康产品 30 秒阻断规则。
- 新增 `症状与对应动作速查`，把常见症状分成急救或急诊、尽快联系医生、先记录观察三层家庭动作。
- 启动 v0.6 核心章节质量冻结：将入口、医疗边界、健康寿命与风险曲线、体检指标推进到 `content-review`，并接入症状动作速查和手册页。
- 推进 v0.6 余下三篇 MVP 核心正文：`metabolic-health.md`、`cardiovascular-event-chain.md`、`supplement-evidence-traps.md` 进入 `content-review`，并补齐症状动作速查、慢病指标记录表和健康产品购买前检查清单的正文入口。
- 推进 v0.6 手册页质量冻结：将危险信号、症状动作、就医清单、家庭档案、慢病记录和健康产品清单推进到 `content-review`，并把手册入口改成按读者当前场景选择工具。
- 启动 v0.7 灰度试读机制：新增 `v0.7 灰度试读说明`、推荐试读路径和反馈模板，并接入首页、README 与网页导航。
- 推进 v0.7 第二批章节质量冻结：将 `sleep-and-recovery.md`、`brain-and-mental-health.md`、`cancer-and-major-illness.md`、`devices-tests-and-longevity-marketing.md` 推进到 `content-review`，并补齐症状分流、家庭档案、就医清单和健康产品清单入口。
- 完成 v0.7 主书正文质量冻结第一轮：将 `specialty-care-map.md`、`what-to-manage.md`、`doctor-visit-preparation.md`、`talking-with-parents.md`、`elder-care-basics.md`、`reading-health-news.md` 推进到 `content-review`，使中文主书正文全部进入内容审查状态。
- 在灰度试读说明中增加作者微信二维码，方便试读者直接反馈。
- 增加吉隆坡镜像部署方案：支持通过 `VITEPRESS_BASE=/` 构建域名根路径站点，提供 Nginx 配置、服务器目录设计和 GitHub Actions 镜像部署工作流，并接入国内镜像入口 `http://health.mindarae.com`。
- 增加吉隆坡镜像服务器自同步方案：服务器每 5 分钟从公开 GitHub 仓库拉取、构建并原子切换 release，不依赖 GitHub Secrets。
