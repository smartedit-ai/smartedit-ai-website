# 贡献指南

感谢你对 SmartEdit AI 项目的关注！我们欢迎所有形式的贡献。

## 🤝 贡献方式

### 报告 Bug

发现 Bug？请帮助我们改进！

**提交 Bug 报告：**
1. 访问 [GitHub Issues](https://github.com/smartedit-ai/smartedit-ai/issues)
2. 点击「New Issue」
3. 选择「Bug Report」模板
4. 填写详细信息

**Bug 报告应包含：**
- 问题描述
- 复现步骤
- 预期行为
- 实际行为
- 截图或错误日志
- 环境信息（浏览器版本、操作系统等）

**示例：**
```markdown
## 问题描述
侧边栏无法打开

## 复现步骤
1. 点击扩展图标
2. 选择「左侧侧边栏」
3. 没有任何反应

## 预期行为
侧边栏应该在页面左侧打开

## 实际行为
没有任何反应，控制台显示错误

## 环境信息
- Chrome 版本：120.0.0.0
- 操作系统：Windows 11
- 扩展版本：1.0.0

## 错误日志
```
Uncaught TypeError: Cannot read property 'open' of undefined
```
```

### 提出功能建议

有好的想法？我们很乐意听取！

**提交功能建议：**
1. 访问 [GitHub Issues](https://github.com/smartedit-ai/smartedit-ai/issues)
2. 点击「New Issue」
3. 选择「Feature Request」模板
4. 描述你的想法

**功能建议应包含：**
- 功能描述
- 使用场景
- 预期效果
- 可选的实现方案

**示例：**
```markdown
## 功能描述
支持自定义快捷键

## 使用场景
用户希望能够自定义打开侧边栏的快捷键，
而不是使用默认的方式

## 预期效果
在设置页面添加快捷键配置选项，
用户可以自定义各种操作的快捷键

## 实现方案
使用 Chrome Commands API 实现
```

### 改进文档

文档也是项目的重要组成部分。

**如何改进文档：**
1. Fork 项目
2. 修改文档文件（Markdown 格式）
3. 提交 Pull Request

**文档改进包括：**
- 修正错别字
- 改进表达
- 补充说明
- 添加示例
- 翻译文档

### 提交代码

想要贡献代码？太好了！

**贡献流程：**
1. Fork 项目到你的 GitHub
2. 克隆到本地
3. 创建新分支
4. 编写代码
5. 提交 Pull Request

详见下文的「开发流程」。

---

## 🔧 开发流程

### 1. Fork 项目

访问 [SmartEdit AI GitHub](https://github.com/smartedit-ai/smartedit-ai)，点击右上角的「Fork」按钮。

### 2. 克隆到本地

```bash
# 克隆你 Fork 的仓库
git clone https://github.com/YOUR_USERNAME/smartedit-ai.git

# 进入项目目录
cd smartedit-ai

# 添加上游仓库
git remote add upstream https://github.com/smartedit-ai/smartedit-ai.git
```

### 3. 创建新分支

```bash
# 从 main 分支创建新分支
git checkout -b feature/your-feature-name

# 或修复 bug
git checkout -b fix/bug-description
```

**分支命名规范：**
- `feature/` - 新功能
- `fix/` - Bug 修复
- `docs/` - 文档更新
- `refactor/` - 代码重构
- `style/` - 样式调整
- `test/` - 测试相关

### 4. 安装依赖

```bash
npm install
```

### 5. 开发

```bash
# 启动开发模式
npm run dev

# 在 Chrome 中加载扩展
# 访问 chrome://extensions/
# 开启开发者模式
# 加载 dist 文件夹
```

### 6. 测试

```bash
# 运行测试（如果有）
npm test

# 类型检查
npm run build

# 代码格式检查
npm run lint
```

### 7. 提交代码

```bash
# 添加修改的文件
git add .

# 提交（遵循 Commit 规范）
git commit -m "feat: add custom keyboard shortcuts"

# 推送到你的 Fork
git push origin feature/your-feature-name
```

### 8. 创建 Pull Request

1. 访问你 Fork 的仓库
2. 点击「Pull Request」
3. 选择你的分支
4. 填写 PR 描述
5. 提交 Pull Request

---

## 📝 代码规范

### Commit 规范

遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

**格式：**
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type 类型：**
- `feat` - 新功能
- `fix` - Bug 修复
- `docs` - 文档更新
- `style` - 代码格式（不影响功能）
- `refactor` - 重构
- `perf` - 性能优化
- `test` - 测试相关
- `chore` - 构建/工具相关

**示例：**
```bash
# 新功能
git commit -m "feat: add custom keyboard shortcuts"

# Bug 修复
git commit -m "fix: sidebar width issue on small screens"

# 文档更新
git commit -m "docs: update installation guide"

# 重构
git commit -m "refactor: simplify AI service interface"
```

### 代码风格

**TypeScript：**
```typescript
// ✅ 好的代码
interface User {
  id: string
  name: string
  email: string
}

function getUser(id: string): User | null {
  // 实现...
}

// ❌ 不好的代码
function getUser(id) {
  // 缺少类型声明
}
```

**React 组件：**
```typescript
// ✅ 好的代码
interface ButtonProps {
  text: string
  onClick: () => void
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  disabled = false 
}) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {text}
    </button>
  )
}

// ❌ 不好的代码
export const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>
}
```

**命名规范：**
- 组件：PascalCase（`Button`, `Sidebar`）
- 函数：camelCase（`getUserInfo`, `handleClick`）
- 常量：UPPER_SNAKE_CASE（`API_KEY`, `MAX_LENGTH`）
- 文件：kebab-case（`user-profile.tsx`, `api-service.ts`）

### 注释规范

**函数注释：**
```typescript
/**
 * 生成文章标题
 * @param content - 文章内容
 * @param count - 生成数量，默认 10
 * @returns 标题数组
 */
async function generateTitles(
  content: string, 
  count: number = 10
): Promise<string[]> {
  // 实现...
}
```

**复杂逻辑注释：**
```typescript
// 计算文章阅读时间
// 假设中文阅读速度为 300 字/分钟
// 英文阅读速度为 200 词/分钟
const readingTime = calculateReadingTime(content)
```

---

## ✅ Pull Request 规范

### PR 标题

使用与 Commit 相同的格式：

```
feat: add custom keyboard shortcuts
fix: sidebar width issue
docs: update contributing guide
```

### PR 描述

**应包含：**
1. 改动说明
2. 相关 Issue
3. 测试情况
4. 截图（如果有 UI 改动）

**模板：**
```markdown
## 改动说明
添加了自定义快捷键功能，用户可以在设置页面配置

## 相关 Issue
Closes #123

## 测试情况
- [x] 本地测试通过
- [x] 在 Chrome 120 测试通过
- [x] 在 Windows 11 测试通过

## 截图
![设置页面](screenshot.png)

## 检查清单
- [x] 代码遵循项目规范
- [x] 已添加必要的注释
- [x] 文档已更新
- [x] 测试通过
```

### 代码审查

**审查要点：**
- 代码质量
- 功能完整性
- 性能影响
- 安全性
- 文档完整性

**审查流程：**
1. 提交 PR
2. 自动化测试
3. 代码审查
4. 修改反馈
5. 合并代码

---

## 🎯 贡献领域

### 核心功能

**需要帮助的功能：**
- 图片编辑功能
- 历史记录管理
- 模板收藏功能
- 批量处理功能
- 数据导出功能

### 性能优化

**优化方向：**
- 减少内存占用
- 提升加载速度
- 优化 AI 响应时间
- 改进缓存策略

### 用户体验

**改进方向：**
- 优化交互流程
- 改进错误提示
- 增加引导教程
- 提升视觉效果

### 文档完善

**需要改进：**
- 补充使用示例
- 添加视频教程
- 翻译英文文档
- 改进 API 文档

### 测试覆盖

**需要测试：**
- 单元测试
- 集成测试
- E2E 测试
- 性能测试

---

## 🏆 贡献者

感谢所有为项目做出贡献的开发者！

**贡献者列表：**
- 查看 [Contributors](https://github.com/smartedit-ai/smartedit-ai/graphs/contributors)

**成为贡献者：**
1. 提交有价值的 PR
2. PR 被合并后自动成为贡献者
3. 名字会出现在贡献者列表

---

## 📞 联系我们

### GitHub Discussions

加入讨论：[GitHub Discussions](https://github.com/smartedit-ai/smartedit-ai/discussions)

**讨论主题：**
- 功能建议
- 技术交流
- 使用心得
- 问题求助

### 邮件联系

技术问题：dev@smartedit.app
商务合作：business@smartedit.app

### 社交媒体

::: info 即将开放
我们正在筹备官方社交媒体账号。
:::

---

## 📜 行为准则

### 我们的承诺

为了营造开放友好的环境，我们承诺：

- 尊重不同的观点和经验
- 接受建设性的批评
- 关注对社区最有利的事情
- 对其他社区成员保持同理心

### 我们的标准

**积极的行为：**
- ✅ 使用友好和包容的语言
- ✅ 尊重不同的观点和经验
- ✅ 优雅地接受建设性批评
- ✅ 关注对社区最有利的事情
- ✅ 对其他社区成员保持同理心

**不可接受的行为：**
- ❌ 使用性化的语言或图像
- ❌ 挑衅、侮辱或贬损的评论
- ❌ 人身攻击或政治攻击
- ❌ 公开或私下的骚扰
- ❌ 未经许可发布他人的私人信息

### 执行

违反行为准则的行为将被处理：

1. 警告
2. 临时禁止
3. 永久禁止

---

## 🎓 学习资源

### 新手指南

**第一次贡献开源项目？**
- [First Contributions](https://github.com/firstcontributions/first-contributions)
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)

### Git 教程

- [Git 官方文档](https://git-scm.com/doc)
- [GitHub 使用指南](https://guides.github.com/)
- [Git 教程（廖雪峰）](https://www.liaoxuefeng.com/wiki/896043488029600)

### Chrome 扩展开发

- [Chrome Extensions 文档](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 迁移指南](https://developer.chrome.com/docs/extensions/mv3/intro/)

---

## 🙏 致谢

感谢所有为 SmartEdit AI 做出贡献的人！

**特别感谢：**
- 所有提交 PR 的开发者
- 所有报告 Bug 的用户
- 所有提出建议的朋友
- 所有使用和推广项目的人

你们的支持是我们前进的动力！

---

::: tip 开始贡献
准备好了吗？选择一个你感兴趣的 [Issue](https://github.com/smartedit-ai/smartedit-ai/issues)，开始你的贡献之旅吧！
:::
