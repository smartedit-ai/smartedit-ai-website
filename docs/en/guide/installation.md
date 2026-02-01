# Installation & Configuration

Detailed guide for installing and configuring SmartEdit AI.

## 📋 System Requirements

### Browser Requirements

- **Chrome** 114 or higher
- **Edge** 114 or higher  
- **Brave** (latest version)
- **Opera** (latest version)
- Other Chromium-based browsers

### Operating System

- Windows 10/11
- macOS 10.15 or higher
- Linux (mainstream distributions)

### Network Requirements

- Stable internet connection (for API calls)
- Access to AI service provider APIs
- Access to image service APIs (optional)

---

## 🚀 Installation Methods

### Method 1: Chrome Web Store (Recommended)

::: info Coming Soon
SmartEdit AI will be available on the Chrome Web Store soon. Stay tuned!
:::

**Installation Steps:**
1. Visit Chrome Web Store
2. Search for "SmartEdit AI"
3. Click "Add to Chrome"
4. Confirm permissions
5. Installation complete!

### Method 2: Install from Source Code

**Step 1: Clone Repository**

```bash
git clone https://github.com/smartedit-ai/smartedit-ai.git
cd smartedit-ai
```

**Step 2: Install Dependencies**

```bash
npm install
```

**Step 3: Build Project**

```bash
npm run build
```

Build output will be in the `dist` directory.

**Step 4: Load Extension in Chrome**

1. Open Chrome browser
2. Visit `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked"
5. Select the `dist` folder from project
6. SmartEdit AI appears in extension list
7. Pin to toolbar for easy access

**Step 5: Verify Installation**

- Click extension icon in toolbar
- Popup window should appear
- If you see the interface, installation successful!

---

## ⚙️ Configure AI Services

SmartEdit AI requires you to configure your own AI service API Key.

### Supported AI Service Providers

| Provider | Models | Pricing | Features |
|----------|--------|---------|----------|
| OpenAI | GPT-3.5-Turbo, GPT-4, GPT-4o | $$$ | Best quality |
| DeepSeek | DeepSeek-V3, DeepSeek-Chat | $ | Cost-effective |
| Zhipu AI | GLM-4, GLM-4-Flash | $ | Fast in China |
| Alibaba Cloud | Qwen-Turbo, Qwen-Plus | $$ | Stable |
| SiliconFlow | Multiple models | $$ | Flexible |
| Moonshot | Kimi | $$ | Long context |
| Custom | OpenAI-compatible API | Varies | Self-hosted |

### Configuration Steps

#### 1. Open Settings Page

**Method 1: Via Extension Icon**
1. Click SmartEdit AI icon in toolbar
2. Click "Settings" button

**Method 2: Via Context Menu**
1. Right-click on any page
2. Select "SmartEdit AI" → "Settings"

#### 2. Select AI Service Provider

In settings page:
1. Find "AI Service" section
2. Click provider dropdown
3. Select your preferred provider

#### 3. Get API Key

**OpenAI:**

1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Register and log in
3. Go to "API keys" page
4. Click "Create new secret key"
5. Name your key (e.g., "SmartEdit AI")
6. Copy the generated API key
7. **Important:** Save it securely, you won't see it again!

**DeepSeek:**

1. Visit [DeepSeek Platform](https://platform.deepseek.com/)
2. Register and log in
3. Go to API Keys section
4. Click "Create API Key"
5. Copy the key

**Zhipu AI:**

1. Visit [Zhipu AI Open Platform](https://open.bigmodel.cn/)
2. Register and log in (supports WeChat login)
3. Go to "API Keys" management
4. Click "Create new key"
5. Copy the API key

**Alibaba Cloud Bailian:**

1. Visit [Alibaba Cloud Bailian](https://www.aliyun.com/product/bailian)
2. Activate service
3. Get API Key from console
4. Copy the key

**Moonshot (Kimi):**

1. Visit [Moonshot AI](https://platform.moonshot.cn/)
2. Register and log in
3. Go to API management
4. Create and copy API key

#### 4. Configure in Extension

1. Paste API Key in the input field
2. Select model (e.g., GPT-4, DeepSeek-V3)
3. Click "Test Connection"
4. If successful, you'll see "✓ Connection successful"
5. Click "Save"

#### 5. Advanced Settings (Optional)

**API Base URL:**
- For custom OpenAI-compatible APIs
- Default uses official endpoint
- Can configure proxy or self-hosted endpoint

**Temperature:**
- Controls randomness (0-1)
- Lower = more deterministic
- Higher = more creative
- Default: 0.7

**Max Tokens:**
- Maximum response length
- Adjust based on needs
- Default: 2000

---

## 🖼️ Configure Image Services

Configure Unsplash and Pixabay for image search functionality.

### Unsplash Configuration

**Step 1: Create Application**

1. Visit [Unsplash Developers](https://unsplash.com/developers)
2. Click "Register as a developer"
3. Accept terms of service
4. Click "New Application"
5. Fill in application info:
   - **Application name:** SmartEdit AI
   - **Description:** Personal use for content creation
6. Accept API guidelines
7. Click "Create application"

**Step 2: Get Access Key**

1. In application page, find "Keys" section
2. Copy "Access Key"
3. **Don't share your Secret Key**

**Step 3: Configure in Extension**

1. Open SmartEdit AI settings
2. Find "Image Services" section
3. Paste Access Key in Unsplash field
4. Click "Test Connection"
5. Save settings

**Usage Limits:**
- **Free tier:** 50 requests/hour
- Sufficient for normal use
- Can apply for production tier if needed

### Pixabay Configuration

**Step 1: Register Account**

1. Visit [Pixabay](https://pixabay.com/)
2. Click "Sign Up"
3. Register with email or social account
4. Verify email

**Step 2: Get API Key**

1. Visit [Pixabay API Documentation](https://pixabay.com/api/docs/)
2. Log in to your account
3. Find "Your API Key" section
4. Copy the API key

**Step 3: Configure in Extension**

1. Open SmartEdit AI settings
2. Paste API Key in Pixabay field
3. Click "Test Connection"
4. Save settings

**Usage Limits:**
- **Free tier:** 5,000 requests/hour
- More than enough for normal use

### Without Image Service Configuration

Even without configuring image services, you can still:
- ✅ Use preset gradient backgrounds
- ✅ Use solid color backgrounds
- ✅ Upload your own images
- ❌ Cannot search Unsplash images
- ❌ Cannot search Pixabay images

---

## 🔐 Security & Privacy

### Data Storage

**Local Storage:**
- All data stored in browser local storage
- API Keys encrypted before storage
- No data sent to our servers
- Complete privacy protection

**What's Stored:**
- API Keys (encrypted)
- User preferences
- Style favorites
- Quick notes
- Usage history

### API Key Security

**Best Practices:**
1. **Don't share** your API keys
2. **Rotate regularly** - Change keys periodically
3. **Monitor usage** - Check API provider dashboard
4. **Set limits** - Configure spending limits on provider side
5. **Revoke if leaked** - Immediately revoke compromised keys

### Network Requests

**API Calls:**
- Direct to service providers
- Not proxied through our servers
- HTTPS encrypted
- No logging or tracking

---

## ✅ Verify Installation

### Test Checklist

After configuration, verify everything works:

- [ ] Extension icon appears in toolbar
- [ ] Click icon shows popup window
- [ ] Settings page opens correctly
- [ ] AI service connection test passes
- [ ] Image service connection test passes (if configured)
- [ ] Left sidebar opens on supported pages
- [ ] Right assistant opens correctly
- [ ] Style library loads templates
- [ ] AI features respond normally

### Troubleshooting

**Extension doesn't appear:**
- Check if Chrome version meets requirements
- Reload extension in `chrome://extensions/`
- Try reinstalling

**API connection fails:**
- Verify API key is correct
- Check network connection
- Confirm API quota available
- Try different API endpoint

**Sidebar won't open:**
- Refresh the page
- Check browser console for errors
- Try on different website
- Verify extension permissions

---

## 🔄 Update Extension

### Update from Chrome Web Store

Extensions auto-update by default:
1. Chrome checks for updates automatically
2. Updates install in background
3. Restart browser to apply

**Manual update:**
1. Visit `chrome://extensions/`
2. Click "Update" button at top
3. Wait for update to complete

### Update from Source Code

```bash
# Pull latest code
git pull origin main

# Install new dependencies
npm install

# Rebuild
npm run build

# Reload extension in Chrome
# Visit chrome://extensions/
# Click reload icon on SmartEdit AI
```

---

## 🗑️ Uninstall

### Remove Extension

1. Visit `chrome://extensions/`
2. Find SmartEdit AI
3. Click "Remove"
4. Confirm removal

### Clean Up Data

Extension data is automatically removed when uninstalled. To manually clear:

1. Visit `chrome://settings/clearBrowserData`
2. Select "Advanced"
3. Choose "All time"
4. Check "Site settings"
5. Click "Clear data"

---

## 📚 Next Steps

- [Basic Usage](/en/guide/basic-usage) - Learn basic operations
- [AI Writing](/en/guide/ai-writing) - Master AI features
- [Style Library](/en/guide/style-library) - Explore style templates

---

::: tip Configuration Tips
Start with a cost-effective provider like DeepSeek or Zhipu AI to test features before committing to more expensive options like GPT-4.
:::
