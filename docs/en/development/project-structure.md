# Project Structure

Detailed explanation of SmartEdit AI's project structure and file organization.

## 📁 Directory Overview

```
smartedit-ai/
├── src/                    # Source code
│   ├── popup/             # Extension popup window
│   ├── options/           # Settings page
│   ├── content/           # Content scripts
│   ├── background/        # Background service worker
│   ├── sidepanel/         # Side panel
│   ├── components/        # React components
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── services/          # API services
│   ├── stores/            # State management (Zustand)
│   └── types/             # TypeScript type definitions
├── public/                # Static assets
│   └── assets/           # Icons and images
├── dist/                  # Build output (generated)
├── manifest.json          # Chrome extension manifest
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
├── tailwind.config.js     # TailwindCSS configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # Project documentation
```

---

## 🎯 Core Directories

### src/popup/

Extension popup window that appears when clicking the extension icon.

**Files:**
```
popup/
├── index.html             # Popup HTML entry
├── main.tsx              # React entry point
├── App.tsx               # Main popup component
└── components/           # Popup-specific components
    ├── QuickActions.tsx  # Quick action buttons
    └── Settings.tsx      # Quick settings
```

**Features:**
- Open left/right sidebars
- Quick access to settings
- Display extension status
- Quick action buttons

### src/options/

Extension settings page for configuring AI services, image services, and preferences.

**Files:**
```
options/
├── index.html            # Settings page HTML
├── main.tsx             # React entry point
├── App.tsx              # Main settings component
└── components/          # Settings components
    ├── AIServiceConfig.tsx      # AI service configuration
    ├── ImageServiceConfig.tsx   # Image service configuration
    └── GeneralSettings.tsx      # General settings
```

**Features:**
- AI service provider configuration
- API Key management
- Image service setup
- User preferences
- Connection testing

### src/content/

Content scripts injected into web pages to provide sidebar functionality.

**Files:**
```
content/
├── index.tsx             # Content script entry
├── Sidebar.tsx          # Left sidebar component
├── FloatingToolbar.tsx  # Floating toolbar
├── SelectionToolbar.tsx # Text selection toolbar
├── style.css            # Content script styles
└── components/          # Content-specific components
    ├── StyleLibrary/    # Style library module
    ├── AIWriting/       # AI writing module
    └── ImageCenter/     # Image center module
```

**Features:**
- Inject left sidebar into pages
- Floating toolbar
- Text selection toolbar
- Style library
- AI writing tools
- Image search

### src/background/

Background service worker that runs independently of web pages.

**Files:**
```
background/
├── index.ts             # Service worker entry
├── messageHandler.ts    # Message handling
├── contextMenu.ts       # Context menu setup
└── commands.ts          # Keyboard commands
```

**Features:**
- Handle extension messages
- Manage context menus
- Process keyboard shortcuts
- Coordinate between components

### src/sidepanel/

Right-side smart assistant using Chrome's Side Panel API.

**Files:**
```
sidepanel/
├── index.html           # Side panel HTML
├── main.tsx            # React entry point
├── App.tsx             # Main panel component
└── components/         # Panel components
    ├── QuickTools.tsx  # Quick tools
    ├── QuickNotes.tsx  # Note-taking
    ├── AIAssistant.tsx # AI assistant
    └── PageInfo.tsx    # Page information
```

**Features:**
- Quick tools (word count, QR code, etc.)
- Note-taking with auto-save
- AI text processing
- Page metadata display

---

## 🧩 Shared Modules

### src/components/

Reusable React components used across different parts of the extension.

**Structure:**
```
components/
├── common/              # Common UI components
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Modal.tsx
│   └── Loading.tsx
├── StyleCard.tsx        # Style template card
├── ImageCard.tsx        # Image result card
└── AIResult.tsx         # AI generation result
```

### src/hooks/

Custom React hooks for shared logic.

**Examples:**
```typescript
// useAIService.ts - AI service integration
export const useAIService = () => {
  const generateTitle = async (content: string) => {...}
  const rewriteText = async (text: string, type: string) => {...}
  return { generateTitle, rewriteText }
}

// useImageSearch.ts - Image search
export const useImageSearch = () => {
  const searchUnsplash = async (query: string) => {...}
  const searchPixabay = async (query: string) => {...}
  return { searchUnsplash, searchPixabay }
}

// useStorage.ts - Local storage
export const useStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(defaultValue)
  // Auto-sync with chrome.storage
  return [value, setValue]
}
```

### src/utils/

Utility functions and helpers.

**Files:**
```
utils/
├── api.ts               # API request helpers
├── storage.ts           # Storage utilities
├── dom.ts               # DOM manipulation
├── format.ts            # Text formatting
└── constants.ts         # Constants and configs
```

**Examples:**
```typescript
// api.ts
export const callAI = async (prompt: string, config: AIConfig) => {...}

// storage.ts
export const getAPIKey = async (provider: string) => {...}
export const saveAPIKey = async (provider: string, key: string) => {...}

// dom.ts
export const insertHTML = (html: string, position: 'before' | 'after') => {...}

// format.ts
export const countWords = (text: string) => {...}
export const estimateReadingTime = (text: string) => {...}
```

### src/services/

API service integrations for AI providers and image platforms.

**Structure:**
```
services/
├── ai/                  # AI service providers
│   ├── openai.ts
│   ├── deepseek.ts
│   ├── zhipu.ts
│   └── base.ts         # Base AI service interface
└── image/              # Image services
    ├── unsplash.ts
    ├── pixabay.ts
    └── base.ts         # Base image service interface
```

**Example:**
```typescript
// services/ai/base.ts
export interface AIService {
  generateTitle(content: string): Promise<string[]>
  scoreTitle(title: string): Promise<number>
  rewriteText(text: string, type: RewriteType): Promise<string>
  generateArticle(topic: string): Promise<string>
}

// services/ai/openai.ts
export class OpenAIService implements AIService {
  constructor(private apiKey: string, private model: string) {}
  
  async generateTitle(content: string): Promise<string[]> {
    // Implementation
  }
}
```

### src/stores/

State management using Zustand.

**Files:**
```
stores/
├── useAppStore.ts       # Global app state
├── useSettingsStore.ts  # Settings state
└── useHistoryStore.ts   # History state
```

**Example:**
```typescript
// useSettingsStore.ts
interface SettingsState {
  aiProvider: string
  apiKey: string
  model: string
  setAIProvider: (provider: string) => void
  setAPIKey: (key: string) => void
}

export const useSettingsStore = create<SettingsState>((set) => ({
  aiProvider: 'openai',
  apiKey: '',
  model: 'gpt-4',
  setAIProvider: (provider) => set({ aiProvider: provider }),
  setAPIKey: (key) => set({ apiKey: key }),
}))
```

### src/types/

TypeScript type definitions.

**Files:**
```
types/
├── ai.ts                # AI-related types
├── image.ts             # Image-related types
├── style.ts             # Style-related types
└── common.ts            # Common types
```

**Examples:**
```typescript
// types/ai.ts
export type AIProvider = 'openai' | 'deepseek' | 'zhipu'
export type RewriteType = 'polish' | 'expand' | 'compress' | 'tone'

export interface AIConfig {
  provider: AIProvider
  apiKey: string
  model: string
  temperature?: number
  maxTokens?: number
}

// types/image.ts
export interface ImageResult {
  id: string
  url: string
  thumbnail: string
  author: string
  source: 'unsplash' | 'pixabay'
}
```

---

## 📄 Configuration Files

### manifest.json

Chrome extension manifest file (Manifest V3).

**Key sections:**
```json
{
  "manifest_version": 3,
  "name": "SmartEdit AI",
  "version": "0.0.1",
  "permissions": ["storage", "activeTab", "scripting", "contextMenus", "sidePanel"],
  "host_permissions": ["<all_urls>"],
  "background": {
    "service_worker": "background/background.js"
  },
  "content_scripts": [{
    "matches": ["<all_urls>"],
    "js": ["content/content.js"],
    "css": ["content/style.css"]
  }],
  "action": {
    "default_popup": "src/popup/index.html"
  },
  "options_page": "src/options/index.html",
  "side_panel": {
    "default_path": "src/sidepanel/index.html"
  }
}
```

### vite.config.ts

Vite build configuration for the extension.

**Key features:**
- Multiple entry points (popup, options, content, background, sidepanel)
- TypeScript support
- React Fast Refresh
- Asset optimization

### tsconfig.json

TypeScript compiler configuration.

**Settings:**
- Target: ES2020
- Module: ESNext
- Strict mode enabled
- Path aliases configured

### tailwind.config.js

TailwindCSS configuration.

**Customizations:**
- Custom color palette
- Extended spacing
- Custom components
- Plugin configurations

---

## 🔄 Data Flow

### Message Passing

```
Content Script ←→ Background ←→ Popup/Options/Sidepanel
       ↓
   Web Page
```

**Example:**
```typescript
// Content script sends message
chrome.runtime.sendMessage({
  type: 'GENERATE_TITLE',
  payload: { content: '...' }
})

// Background receives and processes
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'GENERATE_TITLE') {
    generateTitle(message.payload.content)
      .then(titles => sendResponse({ titles }))
  }
})
```

### State Management

```
User Action → Store Update → Component Re-render
     ↓
Chrome Storage Sync
```

### API Calls

```
Component → Service Layer → External API
    ↓
  Cache
    ↓
 Storage
```

---

## 🎨 Styling Architecture

### TailwindCSS Utilities

Primary styling method using utility classes:

```tsx
<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Click Me
</button>
```

### CSS Modules

For component-specific styles:

```css
/* Button.module.css */
.button {
  @apply px-4 py-2 rounded;
}

.button-primary {
  @apply bg-blue-500 text-white;
}
```

### Global Styles

Minimal global styles in `content/style.css` for injected content.

---

## 🧪 Testing

### Unit Tests

::: info Coming Soon
Unit testing setup is in development.
:::

**Planned structure:**
```
__tests__/
├── components/
├── hooks/
├── utils/
└── services/
```

### Integration Tests

Test interaction between components and services.

### E2E Tests

Test complete user workflows using Playwright.

---

## 📚 Related Resources

- [Development Guide](/en/development/) - Getting started
- [Build & Deploy](/en/development/build-deploy) - Build and deployment
- [Tech Stack](/en/development/tech-stack) - Technologies used

---

::: tip Code Organization
Keep components small and focused. Extract reusable logic into hooks. Use TypeScript for type safety. Follow consistent naming conventions.
:::
