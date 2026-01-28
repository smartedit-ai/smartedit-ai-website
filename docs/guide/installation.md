# 安装配置

本章节详细介绍 SmartEdit AI 的安装方法和初始配置。

## 📋 系统要求

### 浏览器要求

- **Chrome** 114 或更高版本
- **Edge** 114 或更高版本
- **其他 Chromium 内核浏览器** (如 Brave、Opera 等)

::: warning 注意
Firefox 和 Safari 暂不支持，因为它们不支持 Chrome Side Panel API。
:::

### 开发环境要求（仅开发者）

如果你需要从源码构建：

- **Node.js**: v20.19.4 或更高版本
- **npm**: v10.8.2 或更高版本
- **Git**: 用于克隆仓库

---

## 🚀 安装方法

### 方法一：Chrome 应用商店安装

::: info 即将上线
我们正在准备上架 Chrome 应用商店，敬请期待。
:::

**优点：**
- ✅ 一键安装，简单快捷
- ✅ 自动更新
- ✅ 安全可靠

**步骤：**
1. 访问 Chrome 应用商店
2. 搜索 "SmartEdit AI"
3. 点击"添加至 Chrome"
4. 确认权限并安装

### 方法二：开发者模式安装

适合想要使用最新版本或参与开发的用户。

#### 步骤 1：获取源码

**选项 A：克隆 Git 仓库（推荐）**

```bash
git clone https://github.com/smartedit-ai/smartedit-ai.git
cd smartedit-ai
```

**选项 B：下载 ZIP 包**

1. 访问 [GitHub Releases](https://github.com/smartedit-ai/smartedit-ai/releases)
2. 下载最新版本的 Source code (zip)
3. 解压到本地目录

#### 步骤 2：安装依赖

```bash
npm install
```

如果安装速度慢，可以使用国内镜像：

```bash
npm install --registry=https://registry.npmmirror.com
```

#### 步骤 3：构建项目

```bash
# 生产构建
npm run build
```

构建完成后，会在项目根目录生成 `dist` 文件夹。

**开发模式（可选）：**

```bash
# 启动 watch 模式，自动监听文件变化
npm run dev
```

#### 步骤 4：加载扩展到 Chrome

1. 打开 Chrome 浏览器
2. 在地址栏输入 `chrome://extensions/` 并回车
3. 开启右上角的「**开发者模式**」开关
4. 点击左上角的「**加载已解压的扩展程序**」按钮
5. 选择项目的 `dist` 文件夹
6. 点击「选择文件夹」

安装成功后，你会看到：
- ✅ 扩展列表中出现 SmartEdit AI
- ✅ 浏览器工具栏出现扩展图标
- ✅ 扩展状态显示为"已启用"

#### 步骤 5：固定扩展图标（可选）

为了方便使用，建议将扩展图标固定到工具栏：

1. 点击浏览器工具栏右侧的拼图图标
2. 找到 SmartEdit AI
3. 点击图钉图标固定

---

## ⚙️ 初始配置

### 打开设置页面

首次使用需要进行基本配置：

**方式一：通过扩展图标**
1. 点击工具栏的 SmartEdit AI 图标
2. 点击「设置」按钮

**方式二：通过扩展管理页**
1. 访问 `chrome://extensions/`
2. 找到 SmartEdit AI
3. 点击「详细信息」
4. 点击「扩展程序选项」

---

## 🔑 配置 AI 服务

SmartEdit AI 支持多家 AI 服务商，你可以根据需求选择：

### OpenAI

**获取 API Key：**

1. 访问 [OpenAI Platform](https://platform.openai.com/)
2. 注册并登录账号
3. 进入 [API Keys](https://platform.openai.com/api-keys) 页面
4. 点击「Create new secret key」
5. 复制生成的密钥

**配置步骤：**

1. 在设置页面选择「OpenAI」
2. 粘贴 API Key
3. 选择模型（推荐 GPT-4o 或 GPT-3.5-Turbo）
4. 点击「测试连接」验证

**费用说明：**
- GPT-3.5-Turbo: $0.5 / 1M tokens
- GPT-4o: $2.5 / 1M tokens (输入)

### DeepSeek

**获取 API Key：**

1. 访问 [DeepSeek 开放平台](https://platform.deepseek.com/)
2. 注册并登录
3. 进入「API Keys」页面
4. 创建新的 API Key

**配置步骤：**

1. 在设置页面选择「DeepSeek」
2. 粘贴 API Key
3. 选择模型（推荐 DeepSeek-V3）
4. 点击「测试连接」

**费用说明：**
- DeepSeek-V3: ¥1 / 1M tokens (输入)
- 性价比极高，推荐使用

### 智谱 AI (GLM)

**获取 API Key：**

1. 访问 [智谱 AI 开放平台](https://open.bigmodel.cn/)
2. 注册并登录
3. 进入「API Keys」页面
4. 创建新的 API Key

**配置步骤：**

1. 在设置页面选择「智谱 AI」
2. 粘贴 API Key
3. 选择模型（推荐 GLM-4-Flash）
4. 点击「测试连接」

**费用说明：**
- GLM-4-Flash: ¥0.1 / 1M tokens
- 国内服务，速度快

### 阿里云百炼

**获取 API Key：**

1. 访问 [阿里云百炼](https://bailian.console.aliyun.com/)
2. 开通服务
3. 创建 API Key

**配置步骤：**

1. 在设置页面选择「阿里云百炼」
2. 粘贴 API Key
3. 选择模型（推荐 Qwen-Turbo）
4. 点击「测试连接」

### 其他服务商

类似地配置：
- **硅基流动 SiliconFlow** - 多模型聚合平台
- **月之暗面 Moonshot** - Kimi 系列模型
- **自定义配置** - 任意 OpenAI 兼容 API

---

## 🖼️ 配置图片服务（可选）

如果需要使用配图中心功能：

### Unsplash

**获取 Access Key：**

1. 访问 [Unsplash Developers](https://unsplash.com/developers)
2. 注册并登录
3. 点击「New Application」创建应用
4. 填写应用信息并同意条款
5. 复制 Access Key

**配置步骤：**

1. 在设置页面切换到「图片服务」标签
2. 在 Unsplash 部分粘贴 Access Key
3. 点击「测试连接」

**使用限制：**
- 免费版：50 次请求/小时
- 足够个人使用

### Pixabay

**获取 API Key：**

1. 访问 [Pixabay API](https://pixabay.com/api/docs/)
2. 注册账号
3. 在个人设置中找到 API Key

**配置步骤：**

1. 在设置页面的 Pixabay 部分粘贴 API Key
2. 点击「测试连接」

**使用限制：**
- 免费版：5000 次请求/小时
- 完全够用

::: tip 提示
图片服务配置是可选的。如果不配置，仍然可以使用预设的背景模板。
:::

---

## ✅ 验证配置

### 测试 AI 连接

1. 在设置页面点击「测试连接」按钮
2. 等待测试结果：
   - ✅ **连接成功** - 显示绿色提示，可以正常使用
   - ❌ **连接失败** - 显示错误信息，需要检查配置

**常见错误：**

| 错误信息 | 原因 | 解决方法 |
|---------|------|---------|
| Invalid API Key | API Key 错误 | 检查 API Key 是否正确复制 |
| Network Error | 网络问题 | 检查网络连接，可能需要代理 |
| Insufficient Quota | 余额不足 | 充值或更换服务商 |
| Rate Limit | 请求过于频繁 | 稍后再试 |

### 测试图片服务

1. 打开任意网页
2. 点击扩展图标，选择「左侧侧边栏」
3. 切换到「配图中心」标签
4. 输入关键词搜索图片
5. 如果能正常显示图片，说明配置成功

---

## 🔧 高级配置

### 自定义 API 端点

如果你使用自建的 OpenAI 兼容 API：

1. 在设置页面选择「自定义配置」
2. 输入 API 端点 URL
3. 输入 API Key
4. 选择或输入模型名称
5. 测试连接

**示例配置：**

```
API 端点: https://your-api.com/v1
API Key: sk-xxxxxxxxxxxxx
模型: gpt-3.5-turbo
```

### 代理设置

如果需要通过代理访问 AI 服务：

::: warning 注意
Chrome 扩展使用浏览器的系统代理设置，无需单独配置。
:::

**Windows 系统：**
1. 设置 → 网络和 Internet → 代理
2. 配置代理服务器

**macOS 系统：**
1. 系统偏好设置 → 网络
2. 高级 → 代理

---

## 🔐 安全与隐私

### 数据存储

- ✅ API Key 仅存储在**本地浏览器**
- ✅ 不会上传到任何服务器
- ✅ 使用 Chrome 的加密存储 API
- ✅ 卸载扩展时自动清除

### 权限说明

SmartEdit AI 需要以下权限：

| 权限 | 用途 | 说明 |
|------|------|------|
| storage | 存储配置 | 保存 API Key 和用户设置 |
| activeTab | 访问当前标签页 | 在页面中插入内容 |
| scripting | 注入脚本 | 实现侧边栏功能 |
| contextMenus | 右键菜单 | 提供快捷入口 |
| sidePanel | 侧边面板 | 实现右侧助手 |

所有权限都是必需的，不会用于其他用途。

---

## 🆘 常见问题

### 安装失败

**问题：** 提示"无法加载扩展程序"

**解决方法：**
1. 确认 Chrome 版本是否为 114+
2. 确认已开启「开发者模式」
3. 确认选择的是 `dist` 文件夹而不是项目根目录
4. 尝试重新构建：`npm run build`

### 图标显示异常

**问题：** 扩展图标显示为默认图标或不显示

**解决方法：**

```bash
# 安装 sharp 库
npm install sharp

# 重新生成图标
node scripts/generate-icons.js

# 重新构建
npm run build
```

### API Key 无效

**问题：** 提示 API Key 无效

**解决方法：**
1. 检查 API Key 是否完整复制（没有多余空格）
2. 确认 API Key 是否已激活
3. 检查账户余额是否充足
4. 尝试重新生成 API Key

### 无法连接 AI 服务

**问题：** 测试连接失败

**解决方法：**
1. 检查网络连接
2. 如果使用 OpenAI，可能需要配置代理
3. 尝试更换其他服务商
4. 查看浏览器控制台的错误信息

---

## 📚 下一步

配置完成后，你可以：

- 📖 阅读 [基本使用](/guide/basic-usage) 了解界面和操作
- 🎨 探索 [样式库](/guide/style-library) 的各种模板
- 🤖 学习 [AI 写作](/guide/ai-writing) 的使用方法

---

::: tip 需要帮助？
如果遇到其他问题，请查看 [FAQ](/faq) 或在 [GitHub Issues](https://github.com/smartedit-ai/smartedit-ai/issues) 提问。
:::
