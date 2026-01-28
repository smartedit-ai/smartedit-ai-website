# 快速开始

本指南将帮助你快速安装和配置 SmartEdit AI，开始使用智能编辑功能。

## 📋 环境要求

在开始之前，请确保你的环境满足以下要求：

- **浏览器**: Chrome 114+ 或 Edge 114+
- **操作系统**: Windows / macOS / Linux
- **Node.js**: v20.19.4+ (仅开发时需要)
- **npm**: v10.8.2+ (仅开发时需要)

## 🚀 安装方式

### 方式一：从 Chrome 应用商店安装（推荐）

::: warning 注意
Chrome 应用商店版本即将上线，敬请期待。
:::

1. 访问 [Chrome 应用商店](https://chrome.google.com/webstore)
2. 搜索 "SmartEdit AI" 或 "智编助手"
3. 点击"添加至 Chrome"按钮
4. 确认安装权限
5. 安装完成后，浏览器右上角会出现扩展图标

### 方式二：开发者模式安装

适合想要使用最新开发版本或参与开发的用户。

#### 1. 下载源码

```bash
# 克隆仓库
git clone https://github.com/smartedit-ai/smartedit-ai.git

# 进入项目目录
cd smartedit-ai
```

或者直接从 [GitHub Releases](https://github.com/smartedit-ai/smartedit-ai/releases) 下载最新版本的 ZIP 包。

#### 2. 安装依赖

```bash
npm install
```

#### 3. 构建项目

```bash
# 完整构建
npm run build

# 或者使用开发模式（支持热更新）
npm run dev
```

构建完成后，会在项目根目录生成 `dist` 文件夹。

#### 4. 加载扩展

1. 打开 Chrome 浏览器
2. 访问 `chrome://extensions/`
3. 开启右上角的「**开发者模式**」
4. 点击「**加载已解压的扩展程序**」
5. 选择项目的 `dist` 文件夹
6. 安装成功后，扩展图标会出现在浏览器工具栏

::: tip 提示
如果图标显示异常，可以运行以下命令重新生成图标：
```bash
npm install sharp
node scripts/generate-icons.js
```
:::

---

## ⚙️ 初始配置

### 1. 打开设置页面

安装完成后，首次使用需要进行基本配置：

1. 点击浏览器工具栏的 SmartEdit AI 图标
2. 在弹出的菜单中点击「**设置**」按钮
3. 进入设置页面

### 2. 配置 AI 服务

SmartEdit AI 的 AI 功能需要配置 API Key。我们支持多家 AI 服务商：

#### OpenAI

1. 访问 [OpenAI Platform](https://platform.openai.com/)
2. 注册并登录账号
3. 进入 [API Keys](https://platform.openai.com/api-keys) 页面
4. 点击「Create new secret key」创建新密钥
5. 复制密钥，在设置页面选择「OpenAI」并粘贴密钥

#### DeepSeek

1. 访问 [DeepSeek 开放平台](https://platform.deepseek.com/)
2. 注册并登录账号
3. 进入「API Keys」页面
4. 创建新的 API Key
5. 在设置页面选择「DeepSeek」并粘贴密钥

#### 智谱 AI

1. 访问 [智谱 AI 开放平台](https://open.bigmodel.cn/)
2. 注册并登录账号
3. 进入「API Keys」页面
4. 创建新的 API Key
5. 在设置页面选择「智谱 AI」并粘贴密钥

#### 其他服务商

类似地配置阿里云百炼、硅基流动、月之暗面等服务商的 API Key。

::: tip 提示
- API Key 仅存储在本地浏览器，不会上传到任何服务器
- 建议选择性价比高的服务商，如 DeepSeek、智谱 AI 等
- 可以配置多个服务商，随时切换使用
:::

### 3. 配置图片服务（可选）

如果需要使用配图中心功能，需要配置图片服务 API Key：

#### Unsplash

1. 访问 [Unsplash Developers](https://unsplash.com/developers)
2. 注册并创建应用
3. 获取 Access Key
4. 在设置页面的「图片服务」中配置

#### Pixabay

1. 访问 [Pixabay API](https://pixabay.com/api/docs/)
2. 注册账号
3. 获取 API Key
4. 在设置页面的「图片服务」中配置

::: info 说明
图片服务配置是可选的。如果不配置，仍然可以使用预设的背景模板。
:::

### 4. 测试连接

配置完成后，点击「**测试连接**」按钮验证配置是否正确：

- ✅ 连接成功 - 可以正常使用 AI 功能
- ❌ 连接失败 - 请检查 API Key 是否正确，或网络是否正常

---

## 🎯 基本使用

### 打开侧边栏

配置完成后，就可以开始使用 SmartEdit AI 了：

#### 方式一：通过扩展图标

1. 点击浏览器工具栏的 SmartEdit AI 图标
2. 选择「左侧侧边栏」或「右侧助手」
3. 侧边栏会在页面左侧或右侧打开

#### 方式二：通过右键菜单

1. 在任意网页右键
2. 选择「智编助手」菜单
3. 选择「打开左侧侧边栏」或「打开右侧助手」

#### 方式三：通过悬浮按钮

1. 页面左侧会显示一个悬浮按钮
2. 点击按钮快速打开侧边栏

### 使用样式库

1. 打开左侧侧边栏
2. 切换到「样式库」标签
3. 浏览各种样式模板
4. 点击样式即可插入到编辑器光标位置

### 使用 AI 写作

1. 打开左侧侧边栏
2. 切换到「AI 写作」标签
3. 输入文章内容或主题
4. 点击「生成标题」或「生成文章」
5. 选择生成的内容，点击「插入编辑器」

### 使用配图中心

1. 打开左侧侧边栏
2. 切换到「配图中心」标签
3. 输入关键词搜索图片
4. 点击图片即可插入到编辑器

### 使用划词改写

1. 在编辑器中选中一段文字
2. 弹出的工具栏中选择操作：
   - **润色** - 优化文字表达
   - **扩写** - 增加内容细节
   - **缩写** - 精简内容
   - **换语气** - 改变表达风格
3. AI 处理完成后，自动替换原文

---

## 🔧 常见问题

### 扩展无法加载？

1. 确认 Chrome 版本是否为 114+
2. 确认已开启「开发者模式」
3. 尝试重新构建项目：`npm run build`
4. 检查 `dist` 文件夹是否存在

### AI 功能无法使用？

1. 检查是否已配置 API Key
2. 点击「测试连接」验证配置
3. 检查网络连接是否正常
4. 确认 API Key 是否有效且有余额

### 样式无法插入？

1. 确认光标是否在可编辑区域
2. 尝试刷新页面重新加载扩展
3. 检查浏览器控制台是否有错误信息

### 图片无法插入？

1. 检查是否已配置图片服务 API Key
2. 确认网络连接是否正常
3. 尝试使用预设的背景模板

### 更多问题？

查看 [FAQ](/faq) 或在 [GitHub Issues](https://github.com/smartedit-ai/smartedit-ai/issues) 提问。

---

## 📚 下一步

- 📖 阅读 [使用指南](/guide/) 了解详细功能
- 🎨 探索 [样式库](/guide/style-library) 的各种模板
- 🤖 学习 [AI 写作](/guide/ai-writing) 的高级技巧
- 🛠️ 查看 [开发文档](/development/) 参与贡献

---

::: tip 提示
如果在使用过程中遇到任何问题，欢迎在 [GitHub Issues](https://github.com/smartedit-ai/smartedit-ai/issues) 反馈。
:::
