# 构建部署

本文档介绍 SmartEdit AI 的构建和部署流程。

## 🔨 构建项目

### 开发模式

开发模式支持热更新，修改代码后自动重新构建。

```bash
# 启动 watch 模式
npm run dev

# 或分别启动
npm run dev:main      # 主程序（popup/options/background）
npm run dev:content   # Content Script
```

**特点：**
- ✅ 自动监听文件变化
- ✅ 增量构建，速度快
- ✅ 保留 Source Map，便于调试
- ✅ 实时查看效果

**工作流程：**
1. 运行 `npm run dev`
2. 修改源代码
3. 等待终端显示构建完成
4. 在 `chrome://extensions/` 点击扩展的刷新按钮
5. 刷新目标网页查看效果

### 生产构建

生产构建会进行代码优化和压缩。

```bash
# 完整构建
npm run build

# 或分别构建
npm run build:main      # 构建主程序
npm run build:content   # 构建 Content Script
```

**构建流程：**
1. TypeScript 类型检查
2. Vite 构建主程序（popup/options/background/sidepanel）
3. Vite 构建 Content Script
4. 代码压缩和优化
5. 生成 dist 目录

**输出目录结构：**
```
dist/
├── assets/              # 静态资源
│   └── icons/          # 图标文件
├── background/         # 后台脚本
│   └── background.js
├── content/            # Content Script
│   ├── content.js
│   └── style.css
├── src/
│   ├── popup/         # 弹出窗口
│   │   ├── index.html
│   │   └── assets/
│   ├── options/       # 设置页面
│   │   ├── index.html
│   │   └── assets/
│   └── sidepanel/     # 侧边面板
│       ├── index.html
│       └── assets/
└── manifest.json      # 扩展配置
```

### 打包发布

生成可发布的 ZIP 包。

```bash
npm run zip
```

**生成文件：**
- `smartedit-ai-v{version}.zip` - 发布包

**包含内容：**
- dist 目录的所有文件
- manifest.json
- README.md
- LICENSE

---

## 🚀 部署方式

### Chrome 应用商店发布

#### 1. 准备工作

**注册开发者账号：**
1. 访问 [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. 使用 Google 账号登录
3. 支付一次性注册费用（$5）

**准备素材：**
- 扩展图标（128x128）
- 宣传图片（1280x800 或 640x400）
- 截图（至少 1 张，最多 5 张）
- 详细描述
- 隐私政策（如果收集数据）

#### 2. 构建发布版本

```bash
# 构建生产版本
npm run build

# 生成 ZIP 包
npm run zip
```

#### 3. 上传扩展

1. 登录开发者控制台
2. 点击「新增项目」
3. 上传 ZIP 包
4. 填写扩展信息：
   - 名称
   - 简短描述
   - 详细描述
   - 类别
   - 语言
5. 上传图片素材
6. 填写隐私政策
7. 提交审核

#### 4. 审核流程

**审核时间：**
- 首次提交：1-3 天
- 更新版本：1-2 天

**审核要点：**
- 功能完整性
- 权限合理性
- 隐私政策
- 用户体验

**常见拒绝原因：**
- 权限过多或不合理
- 缺少隐私政策
- 功能描述不清
- 违反商店政策

#### 5. 发布成功

审核通过后：
- 扩展自动发布到商店
- 用户可以搜索和安装
- 可以查看统计数据

### Edge 扩展商店发布

Edge 扩展商店的流程与 Chrome 类似。

**注册地址：**
[Microsoft Partner Center](https://partner.microsoft.com/dashboard)

**主要区别：**
- 注册免费
- 审核更快（通常 1 天内）
- 需要 Microsoft 账号

### 自托管发布

如果不想通过应用商店，可以自托管发布。

#### 方式一：GitHub Releases

```bash
# 1. 构建项目
npm run build

# 2. 生成 ZIP 包
npm run zip

# 3. 创建 GitHub Release
git tag v1.0.0
git push origin v1.0.0

# 4. 在 GitHub 上传 ZIP 包
```

**用户安装：**
1. 下载 ZIP 包
2. 解压到本地
3. 在 Chrome 中加载已解压的扩展

#### 方式二：自建下载站

搭建简单的下载页面：

```html
<!DOCTYPE html>
<html>
<head>
    <title>SmartEdit AI 下载</title>
</head>
<body>
    <h1>SmartEdit AI</h1>
    <a href="smartedit-ai-v1.0.0.zip" download>
        下载最新版本 v1.0.0
    </a>
    
    <h2>安装说明</h2>
    <ol>
        <li>下载 ZIP 包并解压</li>
        <li>打开 Chrome，访问 chrome://extensions/</li>
        <li>开启"开发者模式"</li>
        <li>点击"加载已解压的扩展程序"</li>
        <li>选择解压后的文件夹</li>
    </ol>
</body>
</html>
```

---

## 🔄 版本管理

### 语义化版本

遵循 [Semantic Versioning](https://semver.org/) 规范：

**版本号格式：** `主版本号.次版本号.修订号`

- **主版本号**：重大功能更新或不兼容的 API 变更
- **次版本号**：向下兼容的功能性新增
- **修订号**：向下兼容的问题修正

**示例：**
```
1.0.0 - 首次正式发布
1.1.0 - 新增功能
1.1.1 - Bug 修复
2.0.0 - 重大更新
```

### 更新 manifest.json

每次发布前更新版本号：

```json
{
  "manifest_version": 3,
  "name": "智编助手 SmartEdit AI",
  "version": "1.0.0",  // 更新这里
  "description": "AI 写作助手"
}
```

### 更新 package.json

同步更新 package.json 的版本号：

```json
{
  "name": "smartedit-ai",
  "version": "1.0.0",  // 更新这里
  "description": "智编助手"
}
```

### 更新日志

在 CHANGELOG.md 中记录变更：

```markdown
## [1.1.0] - 2025-01-15

### 新增
- 添加图片编辑功能
- 支持自定义快捷键

### 改进
- 优化 AI 响应速度
- 改进样式库分类

### 修复
- 修复侧边栏宽度问题
- 修复图片插入失败的 bug
```

---

## 🧪 测试

### 功能测试

**测试清单：**

- [ ] 扩展安装和卸载
- [ ] 所有页面正常加载
- [ ] 侧边栏打开和关闭
- [ ] 样式库插入功能
- [ ] AI 写作功能
- [ ] 配图中心搜索
- [ ] 右侧助手功能
- [ ] 设置页面配置
- [ ] 快捷键功能
- [ ] 右键菜单

### 兼容性测试

**浏览器测试：**
- Chrome 114+
- Edge 114+
- Brave
- Opera

**操作系统测试：**
- Windows 10/11
- macOS
- Linux

### 性能测试

**测试指标：**
- 扩展加载时间
- 侧边栏打开速度
- AI 响应时间
- 内存占用
- CPU 使用率

**性能优化：**
- 代码分割
- 懒加载
- 缓存策略
- 资源压缩

### 用户测试

**Beta 测试：**
1. 招募测试用户
2. 收集使用反馈
3. 记录问题和建议
4. 优化改进

---

## 📊 监控和分析

### 错误监控

**使用 Sentry：**

```javascript
// background.js
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production",
});
```

**监控内容：**
- JavaScript 错误
- API 调用失败
- 性能问题
- 用户行为

### 使用统计

**Chrome 应用商店提供：**
- 安装量
- 活跃用户数
- 用户评分
- 评论反馈

**自建统计：**
```javascript
// 使用 Google Analytics
chrome.runtime.onInstalled.addListener(() => {
  // 记录安装事件
  ga('send', 'event', 'Extension', 'Install');
});
```

---

## 🔐 安全性

### 代码审查

**审查要点：**
- 权限使用是否合理
- 是否存在安全漏洞
- 用户数据处理是否安全
- 第三方库是否可信

### 权限最小化

只申请必需的权限：

```json
{
  "permissions": [
    "storage",      // 必需：存储配置
    "activeTab",    // 必需：访问当前标签页
    "scripting",    // 必需：注入脚本
    "contextMenus", // 必需：右键菜单
    "sidePanel"     // 必需：侧边面板
  ]
}
```

### 数据安全

**本地存储：**
- API Key 加密存储
- 敏感数据不上传
- 定期清理缓存

**网络请求：**
- 使用 HTTPS
- 验证 API 响应
- 防止 XSS 攻击

---

## 📝 发布检查清单

发布前确认以下事项：

### 代码质量
- [ ] 代码已通过 TypeScript 检查
- [ ] 没有 console.log 等调试代码
- [ ] 代码已格式化
- [ ] 注释完整

### 功能完整性
- [ ] 所有功能正常工作
- [ ] 没有已知的严重 bug
- [ ] 性能符合要求
- [ ] 兼容性测试通过

### 文档完整性
- [ ] README.md 更新
- [ ] CHANGELOG.md 更新
- [ ] 版本号已更新
- [ ] 文档与代码一致

### 发布准备
- [ ] 构建生产版本
- [ ] 生成 ZIP 包
- [ ] 准备发布说明
- [ ] 准备宣传素材

### 发布后
- [ ] 监控错误日志
- [ ] 关注用户反馈
- [ ] 及时修复问题
- [ ] 规划下一版本

---

## 🔧 故障排查

### 构建失败

**常见问题：**

**1. TypeScript 错误**
```bash
# 查看详细错误
npm run build

# 修复类型错误后重新构建
```

**2. 依赖问题**
```bash
# 清除 node_modules
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

**3. 缓存问题**
```bash
# 清除 Vite 缓存
rm -rf node_modules/.vite

# 重新构建
npm run build
```

### 扩展加载失败

**检查：**
1. manifest.json 格式是否正确
2. 文件路径是否正确
3. 权限声明是否完整
4. Chrome 版本是否支持

### 发布被拒绝

**常见原因：**
1. 权限说明不清
2. 隐私政策缺失
3. 功能描述不准确
4. 违反商店政策

**解决方法：**
1. 仔细阅读拒绝原因
2. 修改相关内容
3. 重新提交审核

---

## 📚 相关资源

- [Chrome 扩展发布指南](https://developer.chrome.com/docs/webstore/publish/)
- [Edge 扩展发布指南](https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/publish/publish-extension)
- [语义化版本规范](https://semver.org/)

---

::: tip 发布建议
首次发布前，建议先进行充分的测试，收集用户反馈后再正式发布到应用商店。可以先通过 GitHub Releases 发布 Beta 版本进行测试。
:::
