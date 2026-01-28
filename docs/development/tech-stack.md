# 技术栈

SmartEdit AI 使用现代化的技术栈构建，确保性能、可维护性和开发体验。

## 🎯 技术选型原则

- **现代化** - 使用最新的技术和最佳实践
- **类型安全** - TypeScript 提供类型检查
- **高性能** - 优化加载速度和运行效率
- **易维护** - 清晰的代码结构和文档
- **开发体验** - 快速的构建和热更新

---

## 🏗️ 核心技术

### Chrome Extension Manifest V3

**版本：** Manifest V3

**选择原因：**
- Chrome 官方推荐的最新标准
- 更好的性能和安全性
- 支持 Service Worker
- 支持 Side Panel API

**主要特性：**
- Service Worker 替代 Background Page
- 声明式网络请求
- 更严格的内容安全策略
- 改进的权限模型

**相关文档：**
- [Manifest V3 概述](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [迁移指南](https://developer.chrome.com/docs/extensions/mv3/mv3-migration/)

### React 18

**版本：** 18.2.0

**选择原因：**
- 组件化开发，代码复用性高
- 虚拟 DOM，性能优异
- 丰富的生态系统
- 优秀的开发体验

**使用的特性：**
- 函数式组件
- Hooks（useState, useEffect, useCallback 等）
- Context API
- Suspense（计划使用）

**相关文档：**
- [React 官方文档](https://react.dev/)
- [React Hooks](https://react.dev/reference/react)

### TypeScript

**版本：** 5.3.3

**选择原因：**
- 静态类型检查，减少错误
- 更好的 IDE 支持
- 代码可读性和可维护性高
- 重构更安全

**配置：**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM"],
    "jsx": "react-jsx",
    "strict": true,
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "esModuleInterop": true
  }
}
```

**相关文档：**
- [TypeScript 官方文档](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

---

## 🎨 样式方案

### TailwindCSS

**版本：** 3.3.6

**选择原因：**
- 实用优先的 CSS 框架
- 快速开发，无需写 CSS
- 高度可定制
- 生产环境自动清除未使用的样式

**配置：**
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#667eea',
        secondary: '#764ba2',
      }
    },
  },
  plugins: [],
}
```

**相关文档：**
- [TailwindCSS 官方文档](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com/)

### PostCSS

**版本：** 8.4.32

**用途：**
- CSS 预处理
- 自动添加浏览器前缀
- CSS 优化和压缩

**插件：**
- autoprefixer - 自动添加浏览器前缀
- tailwindcss - TailwindCSS 支持

---

## 🔧 构建工具

### Vite

**版本：** 5.0.8

**选择原因：**
- 极速的冷启动
- 即时的热模块替换（HMR）
- 真正的按需编译
- 优化的生产构建

**配置：**
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        popup: 'src/popup/index.html',
        options: 'src/options/index.html',
        sidepanel: 'src/sidepanel/index.html',
      }
    }
  }
})
```

**相关文档：**
- [Vite 官方文档](https://vitejs.dev/)
- [Vite 插件](https://vitejs.dev/plugins/)

### 插件

**@vitejs/plugin-react**
- React 支持
- Fast Refresh
- JSX 转换

**vite-plugin-chrome-extension**（计划使用）
- Chrome 扩展专用插件
- 自动处理 manifest.json
- 优化构建流程

---

## 📦 状态管理

### Zustand

**版本：** 4.4.7

**选择原因：**
- 轻量级（~1KB）
- 简单易用的 API
- TypeScript 友好
- 无需 Provider 包裹
- 支持中间件

**使用示例：**
```typescript
import create from 'zustand'

interface AppState {
  apiKey: string
  setApiKey: (key: string) => void
}

const useStore = create<AppState>((set) => ({
  apiKey: '',
  setApiKey: (key) => set({ apiKey: key }),
}))
```

**相关文档：**
- [Zustand GitHub](https://github.com/pmndrs/zustand)
- [Zustand 文档](https://docs.pmnd.rs/zustand/getting-started/introduction)

---

## 🔌 API 集成

### AI 服务

**OpenAI API**
- GPT-3.5-Turbo
- GPT-4
- GPT-4o

**DeepSeek API**
- DeepSeek-V3
- DeepSeek-Chat

**智谱 AI API**
- GLM-4
- GLM-4-Flash

**其他服务商**
- 阿里云百炼
- 硅基流动
- 月之暗面

**API 调用封装：**
```typescript
interface AIService {
  generateTitle(content: string): Promise<string[]>
  rewriteText(text: string, type: string): Promise<string>
  summarize(text: string): Promise<string>
}

class OpenAIService implements AIService {
  // 实现...
}
```

### 图片服务

**Unsplash API**
- 搜索图片
- 获取图片详情
- 下载图片

**Pixabay API**
- 搜索图片
- 多种媒体类型

---

## 🗄️ 数据存储

### Chrome Storage API

**使用场景：**
- 存储 API Key
- 保存用户设置
- 缓存数据

**存储类型：**
```typescript
// chrome.storage.local - 本地存储
chrome.storage.local.set({ apiKey: 'xxx' })

// chrome.storage.sync - 同步存储（跨设备）
chrome.storage.sync.set({ theme: 'dark' })
```

### IndexedDB

**版本：** idb 7.1.1

**使用场景：**
- 存储大量数据
- 离线缓存
- 历史记录

**封装库：**
```typescript
import { openDB } from 'idb'

const db = await openDB('smartedit', 1, {
  upgrade(db) {
    db.createObjectStore('history')
    db.createObjectStore('favorites')
  }
})
```

---

## 🧪 开发工具

### 代码质量

**ESLint**
- 代码规范检查
- 自动修复问题

**Prettier**
- 代码格式化
- 统一代码风格

### 版本控制

**Git**
- 版本管理
- 协作开发

**GitHub**
- 代码托管
- Issue 跟踪
- CI/CD

### 包管理

**npm**
- 依赖管理
- 脚本运行

**package.json 脚本：**
```json
{
  "scripts": {
    "dev": "vite build --watch",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext ts,tsx",
    "format": "prettier --write src"
  }
}
```

---

## 📚 依赖列表

### 生产依赖

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "zustand": "^4.4.7",
    "idb": "^7.1.1",
    "md5": "^2.3.0"
  }
}
```

### 开发依赖

```json
{
  "devDependencies": {
    "@types/chrome": "^0.0.254",
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@types/node": "^24.10.1",
    "@types/md5": "^2.3.5",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.3.3",
    "vite": "^5.0.8",
    "tailwindcss": "^3.3.6",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "concurrently": "^9.2.1",
    "archiver": "^6.0.1",
    "sharp": "^0.33.0",
    "terser": "^5.44.1"
  }
}
```

---

## 🔄 技术演进

### 已完成

- ✅ Manifest V3 迁移
- ✅ TypeScript 重构
- ✅ React 18 升级
- ✅ Vite 构建优化
- ✅ TailwindCSS 集成

### 进行中

- 🔄 单元测试覆盖
- 🔄 E2E 测试
- 🔄 性能优化
- 🔄 代码分割

### 计划中

- 📋 PWA 支持
- 📋 WebAssembly 优化
- 📋 多语言支持
- 📋 主题系统

---

## 🎓 学习资源

### 官方文档

- [Chrome Extensions](https://developer.chrome.com/docs/extensions/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)

### 推荐阅读

- [Chrome Extension 开发指南](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
- [React 设计模式](https://www.patterns.dev/posts/react-patterns/)
- [TypeScript 最佳实践](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)

### 社区资源

- [Chrome Extensions GitHub](https://github.com/GoogleChrome/chrome-extensions-samples)
- [Awesome Chrome Extensions](https://github.com/fregante/Awesome-WebExtensions)
- [React 中文文档](https://zh-hans.react.dev/)

---

## 🔍 技术决策

### 为什么选择 React 而不是 Vue？

**原因：**
1. 更成熟的生态系统
2. 更好的 TypeScript 支持
3. 更多的学习资源
4. 团队更熟悉

### 为什么选择 Zustand 而不是 Redux？

**原因：**
1. 更轻量（~1KB vs ~10KB）
2. API 更简单
3. 无需 Provider 包裹
4. 对于小型项目足够用

### 为什么选择 Vite 而不是 Webpack？

**原因：**
1. 开发服务器启动更快
2. 热更新速度更快
3. 配置更简单
4. 生产构建优化更好

### 为什么选择 TailwindCSS？

**原因：**
1. 快速开发
2. 样式一致性
3. 响应式设计简单
4. 生产环境体积小

---

## 📊 性能指标

### 构建性能

- **开发模式启动**：< 1s
- **热更新**：< 100ms
- **生产构建**：< 30s

### 运行性能

- **扩展加载**：< 500ms
- **侧边栏打开**：< 200ms
- **AI 响应**：2-5s（取决于网络）
- **内存占用**：< 50MB

### 优化措施

- 代码分割
- 懒加载
- 资源压缩
- 缓存策略

---

::: tip 技术选型建议
技术选型应该基于项目需求、团队能力和长期维护考虑。不要盲目追求新技术，选择最适合的才是最好的。
:::
