# Development Guide

Welcome to SmartEdit AI development documentation.

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- Chrome 114+ or Edge 114+

### Setup Development Environment

```bash
# Clone repository
git clone https://github.com/smartedit-ai/smartedit-ai.git
cd smartedit-ai

# Install dependencies
npm install

# Start development mode
npm run dev

# Build for production
npm run build
```

### Load Extension in Chrome

1. Visit `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the `dist` folder
5. Start developing!

---

## 📁 Project Structure

```
smartedit-ai/
├── src/
│   ├── popup/              # Extension popup
│   ├── options/            # Settings page
│   ├── content/            # Content scripts
│   ├── background/         # Background service worker
│   ├── sidepanel/          # Side panel
│   ├── components/         # React components
│   ├── hooks/              # React hooks
│   ├── utils/              # Utility functions
│   ├── services/           # API services
│   ├── stores/             # State management
│   └── types/              # TypeScript types
├── public/                 # Static assets
├── dist/                   # Build output
├── manifest.json           # Extension manifest
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── vite.config.ts          # Vite config
└── tailwind.config.js      # Tailwind config
```

See [Project Structure](/en/development/project-structure) for detailed explanation.

---

## 🔧 Development Workflow

### Development Mode

```bash
npm run dev
```

Features:
- Watch mode for automatic rebuilds
- Fast incremental compilation
- Source maps for debugging
- Hot reload support

### Building

```bash
npm run build
```

Produces optimized production build in `dist/` directory.

### Testing

```bash
# Run tests (when available)
npm test

# Type checking
npm run type-check

# Linting
npm run lint
```

---

## 🛠️ Tech Stack

### Core Technologies

- **Extension:** Chrome Manifest V3
- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Build Tool:** Vite
- **State Management:** Zustand
- **Storage:** IndexedDB (idb)

See [Tech Stack](/en/development/tech-stack) for complete details.

---

## 📚 Documentation Sections

### [Project Structure](/en/development/project-structure)
Detailed explanation of directory structure and file organization.

### [Build & Deploy](/en/development/build-deploy)
How to build and deploy SmartEdit AI to Chrome Web Store.

### [Tech Stack](/en/development/tech-stack)
Complete overview of technologies and libraries used.

### [Contributing](/en/development/contributing)
Guidelines for contributing to the project.

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

See [Contributing Guide](/en/development/contributing) for detailed instructions.

---

## 📝 Code Standards

### TypeScript

- Use strict mode
- Define types for all functions
- Avoid `any` type
- Use interfaces for objects

### React

- Use functional components
- Use hooks for state management
- Follow React best practices
- Keep components small and focused

### Styling

- Use TailwindCSS utilities
- Follow mobile-first approach
- Maintain consistent spacing
- Use design tokens

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: fix bug
docs: update documentation
style: format code
refactor: refactor code
test: add tests
chore: update build tools
```

---

## 🐛 Debugging

### Chrome DevTools

**For Popup/Options:**
1. Right-click extension icon
2. Select "Inspect popup"
3. Use DevTools as normal

**For Content Scripts:**
1. Open page DevTools (F12)
2. Content script code appears in Sources
3. Set breakpoints and debug

**For Background:**
1. Visit `chrome://extensions/`
2. Click "Inspect views: background page"
3. Debug service worker

### Console Logging

```typescript
// Development only
if (import.meta.env.DEV) {
  console.log('Debug info:', data)
}
```

---

## 🔍 Testing

### Manual Testing

1. Load extension in Chrome
2. Test all features
3. Check different pages
4. Verify error handling

### Automated Testing

::: info Coming Soon
Automated testing suite is in development.
:::

Planned:
- Unit tests (Jest)
- Integration tests
- E2E tests (Playwright)

---

## 📦 Release Process

1. Update version in `manifest.json` and `package.json`
2. Update `CHANGELOG.md`
3. Build production version
4. Test thoroughly
5. Create git tag
6. Push to GitHub
7. Create GitHub release
8. Submit to Chrome Web Store

See [Build & Deploy](/en/development/build-deploy) for details.

---

## 🔗 Resources

### Official Documentation

- [Chrome Extensions](https://developer.chrome.com/docs/extensions/)
- [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

### Community

- [GitHub Repository](https://github.com/smartedit-ai/smartedit-ai)
- [GitHub Issues](https://github.com/smartedit-ai/smartedit-ai/issues)
- [GitHub Discussions](https://github.com/smartedit-ai/smartedit-ai/discussions)

---

::: tip Need Help?
If you have questions about development, feel free to ask in [GitHub Discussions](https://github.com/smartedit-ai/smartedit-ai/discussions).
:::
