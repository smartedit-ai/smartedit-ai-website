# 开发文档

欢迎参与 SmartEdit AI 的开发！本文档将帮助你了解项目结构和开发流程。

## 🚀 快速开始

### 环境准备

确保你的开发环境满足以下要求：

- **Node.js**: v20.19.4+
- **npm**: v10.8.2+
- **Git**: 用于版本控制
- **Chrome**: 114+ 用于测试

### 克隆项目

```bash
git clone https://github.com/smartedit-ai/smartedit-ai.git
cd smartedit-ai
```

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
# 启动 watch 模式，自动监听文件变化并重新构建
npm run dev
```

### 加载扩展

1. 访问 `chrome://extensions/`
2. 开启「开发者模式」
3. 点击「加载已解压的扩展程序」
4. 选择项目的 `dist` 文件夹

### 热更新调试

1. 运行 `npm run dev` 启动 watch 模式
2. 修改代码后，等待终端显示构建完成
3. 在 `chrome://extensions/` 点击扩展的刷新按钮
4. 刷新目标网页

---

## 📁 项目结构

详见 [项目结构](/development/project-structure) 文档。

---

## 🔧 构建部署

详见 [构建部署](/development/build-deploy) 文档。

---

## 💻 技术栈

详见 [技术栈](/development/tech-stack) 文档。

---

## 🤝 贡献指南

详见 [贡献指南](/development/contributing) 文档。

---

## 📚 相关资源

### Chrome 扩展开发
- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Migration Guide](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Chrome Side Panel API](https://developer.chrome.com/docs/extensions/reference/sidePanel/)

### 前端技术
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

### AI 服务
- [OpenAI API Reference](https://platform.openai.com/docs/api-reference)
- [DeepSeek API Docs](https://platform.deepseek.com/api-docs/)
- [智谱 AI API 文档](https://open.bigmodel.cn/dev/api)

---

## 🆘 获取帮助

如果在开发过程中遇到问题：

1. 查看 [FAQ](/faq)
2. 搜索 [GitHub Issues](https://github.com/smartedit-ai/smartedit-ai/issues)
3. 提交新的 Issue
4. 加入开发者讨论

---

::: tip 开始开发
准备好了吗？从 [项目结构](/development/project-structure) 开始了解代码组织方式！
:::
