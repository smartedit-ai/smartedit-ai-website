# FAQ

Common questions and answers about SmartEdit AI.

## 📦 Installation & Configuration

### Q: Which browsers are supported?

**A:** SmartEdit AI supports:
- Chrome 114+
- Edge 114+
- Brave
- Opera
- Other Chromium-based browsers

### Q: How to install the extension?

**A:** Two methods:
1. **Chrome Web Store** (Coming soon) - One-click install
2. **From Source** - Clone repository, build, and load unpacked

See [Getting Started](/en/getting-started) for detailed steps.

### Q: Do I need to pay?

**A:** SmartEdit AI itself is completely free. You only need to pay for:
- AI service provider API fees (based on usage)
- Image service API fees (most are free)

No additional subscription or service fees required.

### Q: Where is my data stored?

**A:** All data is stored locally in your browser:
- API Keys stored in browser local storage
- Notes and settings stored locally
- No cloud sync, protecting your privacy

---

## 🤖 AI Features

### Q: Which AI service providers are supported?

**A:** Currently supports:
- OpenAI (GPT-3.5, GPT-4, GPT-4o)
- DeepSeek (DeepSeek-V3)
- Zhipu AI (GLM-4, GLM-4-Flash)
- Alibaba Cloud Bailian (Qwen series)
- SiliconFlow
- Moonshot (Kimi)
- Custom OpenAI-compatible APIs

### Q: How to get an API Key?

**A:** Visit the respective service provider's official website:
1. Register and log in
2. Go to API Keys page
3. Create new API Key
4. Copy and paste into SmartEdit AI settings

See [Installation & Configuration](/en/guide/installation) for detailed steps.

### Q: How much do AI services cost?

**A:** Pricing varies by provider:
- **OpenAI**: GPT-3.5-Turbo ~$0.5/1M tokens, GPT-4 ~$30/1M tokens
- **DeepSeek**: ~$0.14/1M tokens (very cost-effective)
- **Zhipu AI**: GLM-4-Flash ~$0.014/1M tokens (cheapest)

Actual costs depend on usage. Typical article generation costs less than $0.01.

### Q: AI generation quality is poor?

**A:** Try these solutions:
1. **Provide more context** - More detailed input yields better results
2. **Use better models** - GPT-4 > GPT-3.5
3. **Optimize prompts** - Clearly describe requirements
4. **Iterate multiple times** - Regenerate if unsatisfied

### Q: AI functions not responding?

**A:** Check:
1. API Key configured correctly
2. Network connection normal
3. API quota sufficient
4. Service provider status normal

---

## 🎨 Style Library

### Q: How to use style templates?

**A:**
1. Open left sidebar
2. Switch to "Style Library" tab
3. Browse and select style
4. Click to insert into editor

### Q: Can I customize styles?

**A:** Yes:
1. Insert style template
2. Manually modify style code
3. Adjust colors, sizes, spacing, etc.

### Q: How to change colors?

**A:**
1. Select content to change
2. Click "One-Click Color Change"
3. Choose preset color or custom color
4. Click "Apply"

### Q: Styles display incorrectly?

**A:** Possible reasons:
1. Editor compatibility issues
2. Style code modified incorrectly
3. Browser rendering issues

Try:
- Refresh page
- Re-insert style
- Use different browser

---

## 🖼️ Image Center

### Q: Which image services are supported?

**A:**
- **Unsplash** - High-quality professional photography
- **Pixabay** - Rich royalty-free images

Both are free for commercial use.

### Q: Do I need to configure API Keys?

**A:** Optional:
- **With API Key** - Can search Unsplash and Pixabay images
- **Without API Key** - Can still use preset background templates

### Q: How to get image service API Keys?

**A:**

**Unsplash:**
1. Visit [Unsplash Developers](https://unsplash.com/developers)
2. Create application
3. Copy Access Key

**Pixabay:**
1. Visit [Pixabay API](https://pixabay.com/api/docs/)
2. Register account
3. Get API Key from settings

### Q: Search returns no results?

**A:** Try:
1. Use more general keywords
2. Try English keywords
3. Check network connection
4. Verify API Key configuration

### Q: Are there usage limits?

**A:**
- **Unsplash**: 50 requests/hour (free tier)
- **Pixabay**: 5000 requests/hour (free tier)

Sufficient for normal use.

---

## 🛠️ Smart Assistant

### Q: What is the Smart Assistant?

**A:** The right-side smart assistant is an independent browser side panel providing:
- Quick tools (word count, copy link, QR code)
- Quick notes
- AI assistant (summarize, translate, polish)
- Page information

### Q: How to open it?

**A:** Two methods:
1. Click extension icon → "Right Assistant"
2. Right-click page → "SmartEdit AI" → "Open Right Assistant"

### Q: Notes data lost?

**A:** Notes are stored in browser local storage. May be lost if:
- Browser data cleared
- Extension uninstalled

**Prevention:**
- Regularly export notes
- Backup important content

### Q: AI Assistant not working?

**A:** Check:
1. AI service configured
2. API Key valid
3. Network connection normal

---

## 🔧 Technical Issues

### Q: Sidebar won't open?

**A:** Try:
1. Refresh page
2. Reload extension
3. Check browser version (requires 114+)
4. Try different page

### Q: Extension not working?

**A:** Troubleshooting steps:
1. Check if extension is enabled
2. Check browser version
3. Reload extension
4. Reinstall extension
5. Check browser console for errors

### Q: High memory usage?

**A:** Possible reasons:
1. Too many images cached
2. Too much note content
3. Multiple sidebars open

Solutions:
- Clear cache
- Close unused sidebars
- Restart browser

### Q: Conflicts with other extensions?

**A:** If conflicts occur:
1. Disable other extensions one by one to identify
2. Report issue on GitHub
3. Temporarily disable conflicting extension

---

## 📱 Usage Scenarios

### Q: Can it be used on mobile?

**A:** Currently only supports desktop browsers. Mobile browser support is not available yet.

### Q: Works on which websites?

**A:** Primarily designed for WeChat Official Account editor, but can be used on any webpage supporting content editing.

### Q: Can it be used offline?

**A:** Partial offline use:
- Style library works offline
- AI features require network (API calls)
- Image search requires network

---

## 🔐 Privacy & Security

### Q: Is my data secure?

**A:** Yes:
- All data stored locally
- No cloud sync
- API Keys encrypted
- No data collection

### Q: Will API Keys leak?

**A:** API Keys are:
- Stored in browser local storage
- Encrypted
- Only used for API calls
- Never uploaded to servers

**Security recommendations:**
- Don't share API Keys
- Regularly rotate keys
- Monitor API usage

### Q: Open source and auditable?

**A:** Yes:
- Complete source code on GitHub
- MIT License
- Community auditable
- Transparent and trustworthy

---

## 💬 Feedback & Support

### Q: How to report bugs?

**A:**
1. Visit [GitHub Issues](https://github.com/smartedit-ai/smartedit-ai/issues)
2. Click "New Issue"
3. Select "Bug Report" template
4. Fill in detailed information
5. Submit issue

### Q: How to suggest features?

**A:**
1. Visit [GitHub Issues](https://github.com/smartedit-ai/smartedit-ai/issues)
2. Click "New Issue"
3. Select "Feature Request" template
4. Describe your idea
5. Submit suggestion

### Q: How to contribute code?

**A:** See [Contributing Guide](/en/development/contributing) for:
- Development environment setup
- Code standards
- Commit guidelines
- Pull Request process

### Q: How to contact the team?

**A:**
- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - General discussions
- **Email** - support@smartedit.app

---

::: tip Still Have Questions?
If your question isn't answered here, visit [GitHub Issues](https://github.com/smartedit-ai/smartedit-ai/issues) to ask or search for similar questions.
:::
