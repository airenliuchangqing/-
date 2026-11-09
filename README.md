# AI 应用改进项目成果

橙蓝流程海报方向的 GitHub Pages 静态作品集。页面使用原生 HTML、CSS 和 JavaScript，不需要构建工具或外部字体服务。

工程方法部分将 GB/T 45081-2024 的组织环境、领导作用、策划、支持、运行、绩效评价和改进等主题映射到项目实践，并展示 PDCA 闭环。页面已标明该映射不代表企业或项目通过认证或完成全面符合性评价。

## 本地预览

直接打开 `index.html`。如果浏览器限制本地脚本读取，可使用 VS Code Live Server 等本地预览方式；页面会从同目录加载 `data/projects.js` 和 `assets/` 中的素材。完整维护、增删项目与图片、GitHub Pages 发布步骤见 [维护说明.md](维护说明.md)。

## 发布到 GitHub Pages

1. 将本目录内的 `index.html`、`data/`、完整的 `assets/`、`README.md` 和 `维护说明.md` 放到 GitHub 仓库根目录。
2. 在仓库的 **Settings → Pages** 中选择从分支发布，分支选 `main`，目录选 `/(root)`。
3. 等待 GitHub Pages 构建完成后，访问仓库对应的 Pages 地址。审厂视频约 31.8 MB，网页上传的单文件大小限制为 25 MiB，请用 GitHub Desktop 或 Git 命令上传。

## 新增项目

编辑 `data/projects.js`，在 `window.AI_PORTFOLIO_PROJECTS` 数组中新增一条对象记录。字段可参照现有案例，包括项目摘要、实现原理、流程节点、工程控制、交付内容、可公开成果和前后对比素材。项目卡片、流程图、搜索过滤、分类和分页由 `index.html` 自动生成；分页每页 8 项，项目数据与页面模板分离，可继续扩展几十或上百个项目。

新增案例、加减照片、修改文案、上传媒体和日常更新的逐步说明见 [维护说明.md](维护说明.md)。

前后对照区按“改进前 → 改进后”每 3 秒切换，并保留 SVG 轨迹动画、手动切换和暂停功能。原图文件不会被裁切、模糊、滤镜处理或覆字；页面仅按屏幕尺寸等比缩放显示，点击图片可查看原尺寸。审厂视频播放期间，自动轮播暂停；当前浏览器无法播放时，页面改用提供的改进后图片。

销售数据项目的两张原图均为改进前；改进后画面取自原始周数据看板 HTML 的 1600 × 1200 首屏，完整看板可从旁边链接打开。DSR 和产品合规的改进前明确标为管理空白示意，改进后截图来自各自原始 HTML 页面；每张页面截图旁都可打开完整 HTML 文件。审厂项使用原始改善前图片、原视频和改进后图片备用素材。HTML 截图保留页面原有图表、数据和样式，未编辑截图画面。

## 目录

```text
index.html
data/
  projects.js
assets/
  sales-before-weekly.png
  sales-before-daily.jpg
  sales-after-dashboard.png
  sales-dashboard-original.html
  dsr-after-dashboard.png
  dsr-dashboard-original.html
  compliance-after-dashboard.png
  product-compliance-original.html
  audit-before.png
  audit-after.png
  audit-workbench.mp4
README.md
维护说明.md
```
