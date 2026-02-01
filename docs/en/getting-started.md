# Getting Started

Get started with SmartEdit AI in just a few steps.

## 📋 Requirements

### Browser Requirements

- Chrome 114 or higher
- Edge 114 or higher
- Other Chromium-based browsers (Brave, Opera, etc.)

### System Requirements

- Windows 10/11
- macOS 10.15+
- Linux (mainstream distributions)

---

## 🚀 Installation

### Method 1: Install from Chrome Web Store (Recommended)

::: info Coming Soon
SmartEdit AI will be available on the Chrome Web Store soon.
:::

1. Visit Chrome Web Store
2. Search for "SmartEdit AI"
3. Click "Add to Chrome"
4. Confirm installation

### Method 2: Install from Source

**Step 1: Clone the Repository**

```bash
git clone https://github.com/smartedit-ai/smartedit-ai.git
cd smartedit-ai
```

**Step 2: Install Dependencies**

```bash
npm install
```

**Step 3: Build the Project**

```bash
npm run build
```

**Step 4: Load in Chrome**

1. Open Chrome and visit `chrome://extensions/`
2. Enable "Developer mode" (top right corner)
3. Click "Load unpacked"
4. Select the `dist` folder from the project
5. SmartEdit AI is now installed!

---

## ⚙️ Initial Configuration

### Configure AI Services

SmartEdit AI requires you to configure your own AI service API Key.

#### 1. Open Settings

- Click the extension icon in the toolbar
- Click "Settings" button
- Or right-click on the page and select "SmartEdit AI" → "Settings"

#### 2. Choose AI Service Provider

Supported providers:

- **OpenAI** - GPT-3.5, GPT-4, GPT-4o
- **DeepSeek** - DeepSeek-V3, DeepSeek-Chat
- **Zhipu AI** - GLM-4, GLM-4-Flash
- **Alibaba Cloud** - Qwen series
- **SiliconFlow** - Multiple models
- **Moonshot** - Kimi
- **Custom OpenAI-compatible API**

#### 3. Get API Key

**OpenAI:**
1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Register and log in
3. Go to API Keys page
4. Click "Create new secret key"
5. Copy the API Key

**DeepSeek:**
1. Visit [DeepSeek Platform](https://platform.deepseek.com/)
2. Register and log in
3. Go to API Keys
4. Create and copy API Key

**Zhipu AI:**
1. Visit [Zhipu AI Open Platform](https://open.bigmodel.cn/)
2. Register and log in
3. Go to API Keys
4. Create and copy API Key

#### 4. Configure in Extension

1. Select AI service provider
2. Paste API Key
3. Choose model
4. Click "Test Connection"
5. Save settings

### Configure Image Services (Optional)

Configure Unsplash and Pixabay for image search.

#### Unsplash

1. Visit [Unsplash Developers](https://unsplash.com/developers)
2. Register and create application
3. Copy Access Key
4. Paste in extension settings

**Free tier:** 50 requests/hour

#### Pixabay

1. Visit [Pixabay API](https://pixabay.com/api/docs/)
2. Register account
3. Get API Key from settings
4. Paste in extension settings

**Free tier:** 5000 requests/hour

::: tip Note
Even without configuring image services, you can still use preset background templates and solid colors.
:::

---

## 🎯 Basic Usage

### Open Sidebar

**Method 1: Extension Icon**
1. Click SmartEdit AI icon in toolbar
2. Click "Left Sidebar"

**Method 2: Context Menu**
1. Right-click on page
2. Select "SmartEdit AI" → "Open Left Sidebar"

### Use Style Library

1. Open left sidebar
2. Switch to "Style Library" tab
3. Browse style templates
4. Click to insert into editor

### Use AI Writing

1. Open left sidebar
2. Switch to "AI Writing" tab
3. Input content or topic
4. Click corresponding function button
5. View and use generated content

### Search Images

1. Open left sidebar
2. Switch to "Image Center" tab
3. Input search keywords
4. Browse results
5. Click image to insert

### Open Smart Assistant

1. Click extension icon
2. Click "Right Assistant"
3. Or right-click and select "Open Right Assistant"

---

## 💡 Quick Tips

### Keyboard Shortcuts

::: info Coming Soon
Custom keyboard shortcuts will be supported in future versions.
:::

### First-Time Usage Recommendations

1. **Configure AI Service First** - This is the core feature
2. **Try Style Library** - Familiarize with various styles
3. **Test AI Functions** - Experience AI writing capabilities
4. **Explore Smart Assistant** - Discover more useful tools

### Common Issues

**Q: Sidebar won't open?**
- Check if browser version meets requirements
- Try refreshing the page
- Reload the extension

**Q: AI functions not responding?**
- Check if API Key is configured correctly
- Test API connection
- Check network connection
- Verify API quota

**Q: Images won't load?**
- Check network connection
- Verify image service API Key configuration
- Try a different search term

---

## 📚 Next Steps

- [Features](/en/features) - Learn about all features in detail
- [User Guide](/en/guide/) - Detailed usage instructions
- [FAQ](/en/faq) - Common questions and answers

---

::: tip Get Help
If you encounter issues, visit [GitHub Issues](https://github.com/smartedit-ai/smartedit-ai/issues) to report or search for solutions.
:::
