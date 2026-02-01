# SmartEdit AI 文档网站

这是 SmartEdit AI 的产品文档网站，使用 VitePress 构建。

## 📚 关于

SmartEdit AI 是一款专为微信公众号创作者打造的 Chrome 浏览器扩展，提供 AI 写作、样式库、一键排版、配图中心等功能。

### ✨ 核心特点

- **🔐 无需云端同步** - 所有数据存储在本地，保护隐私安全
- **🔑 自主配置 API Key** - 用户自行配置各类服务的 API Key，按需使用
- **💰 无额外费用** - 除了 API 服务商的费用外，无需支付其他费用
- **🎯 灵活选择** - 支持多家 AI 服务商（OpenAI、DeepSeek、智谱 AI 等）
- **📖 完整文档** - 详细的配置和使用说明

### 📖 在线文档

完整的产品文档和配置说明请访问：**https://docs.smartedit.app/**

本文档网站提供：
- 产品功能介绍
- 快速开始指南
- 详细使用文档
- API Key 配置教程
- 开发者文档
- FAQ 常见问题

## 🚀 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run docs:dev
```

访问 http://localhost:5173 查看文档。

### 构建生产版本

```bash
npm run docs:build
```

构建输出在 `docs/.vitepress/dist` 目录。

### 预览生产版本

```bash
npm run docs:preview
```

## 📦 部署到 Cloudflare Pages

### 方式一：通过 Git 集成（推荐）

1. 将代码推送到 GitHub
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. 进入 Pages → Create a project
4. 连接 GitHub 仓库
5. 配置构建设置：
   - **构建命令**: `npm run docs:build`
   - **构建输出目录**: `docs/.vitepress/dist`
   - **Node 版本**: 20.x
6. 点击 Deploy

### 方式二：通过 Wrangler CLI

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 构建项目
npm run docs:build

# 部署到 Cloudflare Pages
wrangler pages deploy docs/.vitepress/dist
```

### 方式三：手动上传

1. 构建项目：`npm run docs:build`
2. 登录 Cloudflare Dashboard
3. 进入 Pages → Create a project → Upload assets
4. 上传 `docs/.vitepress/dist` 目录中的所有文件

## 🔧 配置说明

### VitePress 配置

配置文件位于 `docs/.vitepress/config.mts`，包含：
- 网站标题和描述
- 导航菜单
- 侧边栏
- 主题配置
- 搜索功能

### Cloudflare Pages 配置

在项目根目录创建 `wrangler.toml`（可选）：

```toml
name = "smartedit-ai-docs"
pages_build_output_dir = "docs/.vitepress/dist"

[build]
command = "npm run docs:build"
```

## 📁 文档结构

```
docs/
├── .vitepress/
│   └── config.mts          # VitePress 配置
├── index.md                # 首页
├── features.md             # 功能特性
├── getting-started.md      # 快速开始
├── changelog.md            # 更新日志
├── faq.md                  # 常见问题
├── guide/                  # 使用指南
│   ├── index.md
│   ├── installation.md
│   ├── basic-usage.md
│   ├── ai-writing.md
│   ├── style-library.md
│   ├── image-center.md
│   └── smart-assistant.md
└── development/            # 开发文档
    ├── index.md
    ├── project-structure.md
    ├── build-deploy.md
    ├── tech-stack.md
    └── contributing.md
```

## 🎨 自定义

### 修改主题色

编辑 `docs/.vitepress/config.mts` 中的 `themeConfig`。

### 添加新页面

1. 在 `docs/` 目录下创建 Markdown 文件
2. 在 `config.mts` 中添加导航或侧边栏链接

### 自定义样式

在 `docs/.vitepress/theme/` 目录下添加自定义样式。

## 📝 Markdown 增强

VitePress 支持多种 Markdown 扩展：

### 容器

```md
::: tip 提示
这是一个提示
:::

::: warning 警告
这是一个警告
:::

::: danger 危险
这是一个危险提示
:::
```

### 代码块

```md
```js
console.log('Hello World')
```
```

### 表格

```md
| 列1 | 列2 |
|-----|-----|
| 内容1 | 内容2 |
```

## 🔗 相关链接

- [SmartEdit AI GitHub](https://github.com/smartedit-ai/smartedit-ai)
- [VitePress 文档](https://vitepress.dev/)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)

## 📄 许可证

MIT License

---

Made with ❤️ by SmartEdit Team
