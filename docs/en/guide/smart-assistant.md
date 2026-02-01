# Smart Assistant

SmartEdit AI's right-side smart assistant uses Chrome's native Side Panel API to provide an independent browser side panel.

## 🎯 Overview

The right-side smart assistant includes four modules:

- **Quick Tools** - Word count, copy link, QR code generation, etc.
- **Quick Notes** - Record ideas anytime, auto-save
- **AI Assistant** - Text summarization, translation, polishing, expansion
- **Page Info** - View page metadata and statistics

---

## 🚪 Open Smart Assistant

### Method 1: Via Extension Icon

1. Click SmartEdit AI icon in browser toolbar
2. Click "Right Assistant" button
3. Right side opens independent side panel

### Method 2: Via Context Menu

1. Right-click anywhere on page
2. Select "SmartEdit AI" → "Open Right Assistant"
3. Side panel opens on right

### Features

**Difference from Traditional Overlays:**
- ✅ Independent browser panel, not floating mask
- ✅ Uses browser native API, better performance
- ✅ Browser auto-adjusts page width
- ✅ Stays open when switching tabs
- ✅ Press ESC to quickly close

---

## 🔧 Quick Tools

### Word Count

**Function:** Count words in current page or selected text

**How to Use:**
1. Open right assistant
2. Switch to "Quick Tools" tab
3. Click "Word Count"

**Statistics:**
- Total word count
- Chinese character count
- English word count
- Paragraph count
- Estimated reading time

**Use Cases:**
- Check article length
- Control word count requirements
- Estimate reading time

### Copy Link

**Function:** Quickly copy current page link and title

**Options:**
- Copy URL
- Copy title
- Copy Markdown format link
- Copy HTML format link

**Markdown Format:**
```markdown
[Page Title](https://example.com)
```

**HTML Format:**
```html
<a href="https://example.com">Page Title</a>
```

**Use Cases:**
- Share article links
- Reference materials
- Create link lists

### Generate QR Code

**Function:** Generate QR code for current page

**How to Use:**
1. Click "Generate QR Code"
2. Auto-generates QR code for current page
3. Can download or share

**Use Cases:**
- Mobile access
- Share with others
- Print for distribution

### Page Translation

**Function:** Quickly translate current page

**Supported Translations:**
- Chinese → English
- English → Chinese
- Other language pairs

**How to Use:**
1. Click "Page Translation"
2. Select target language
3. View translation result

**Use Cases:**
- Read foreign materials
- Translate article content
- Learn foreign languages

### Screenshot Tool

::: info In Development
Screenshot feature is under development, coming soon.
:::

**Planned Features:**
- Full page screenshot
- Area screenshot
- Scrolling screenshot
- Annotation editing

---

## 📝 Quick Notes

### How It Works

Record ideas and inspiration anytime, auto-save to browser local storage.

### How to Use

**1. Open Notes**
- Switch to "Quick Notes" tab
- Type content in text box

**2. Auto-Save**
- Content auto-saves as you type
- No need to manually click save
- Content persists after closing browser

**3. Export Notes**
- Click "Export" button
- Choose export format:
  - Plain text (.txt)
  - Markdown (.md)
  - HTML (.html)

**4. Clear Notes**
- Click "Clear" button
- Confirm to clear all content

### Features

**Real-Time Save:**
- Each input auto-saves
- No worry about losing content

**Character Count:**
- Real-time character count display
- Know note length

**Markdown Support:**
- Supports Markdown syntax
- Preserves format when exporting

**Multi-Device Sync:**
::: info Coming Soon
Cloud sync feature under development.
:::

### Use Cases

**Record Inspiration:**
- Sudden ideas
- Article topics
- Creative thoughts

**Temporary Notes:**
- Meeting points
- To-do items
- Temporary information

**Collect Materials:**
- Good sentences
- Reference materials
- Quoted content

**Draft Editing:**
- Article drafts
- Outline planning
- Content organization

---

## ✨ AI Assistant

### How It Works

Quickly process text content, supporting summarization, translation, polishing, expansion, etc.

### Text Summarization

**Function:** Summarize long text into brief summary

**How to Use:**
1. Input or paste content in text box
2. Or select page text then click "Use Selected Text"
3. Click "Summarize" button
4. View AI-generated summary

**Summary Types:**
- **Brief Summary** - 1-2 sentences overview
- **Key Points** - List main points
- **Detailed Summary** - Paragraph-style summary

**Use Cases:**
- Quickly understand article content
- Extract core viewpoints
- Create content summaries

**Example:**

**Original (500 words):**
> "AI technology has made breakthrough progress in recent years... (omitted)"

**Summary (50 words):**
> "AI technology is developing rapidly, widely applied in healthcare, education, finance, and other fields, but also faces challenges like data privacy and algorithm bias, requiring comprehensive regulatory mechanisms."

### Chinese-English Translation

**Function:** Translate between Chinese and English

**How to Use:**
1. Input text to translate
2. Click "Translate" button
3. AI auto-detects language and translates

**Translation Features:**
- Intelligent language detection
- Preserves original tone
- Follows expression habits
- High accuracy

**Use Cases:**
- Translate foreign materials
- Write English content
- Learn foreign languages

**Examples:**

**Chinese to English:**
> Original: "人工智能正在改变我们的生活方式。"
> Translation: "Artificial intelligence is transforming the way we live."

**English to Chinese:**
> Original: "The future of AI is promising."
> Translation: "人工智能的未来充满希望。"

### Content Polishing

**Function:** Optimize text expression, improve article quality

**How to Use:**
1. Input text to polish
2. Click "Polish" button
3. View optimized content

**Polishing Directions:**
- Optimize word choice
- Improve sentence structure
- Enhance expressiveness
- Improve writing style

**Use Cases:**
- Optimize article expression
- Improve text quality
- Enhance writing style

**Example:**

**Original:**
> "This method is very good, everyone can try it."

**Polished:**
> "This method has been proven effective through practice, and I highly recommend everyone give it a try."

### Text Expansion

**Function:** Expand content, add details

**How to Use:**
1. Input brief text
2. Click "Expand" button
3. Get expanded content

**Expansion Strategy:**
- Add detailed descriptions
- Supplement background information
- Add example explanations
- Enrich expression methods

**Use Cases:**
- Content too brief
- Need to add details
- Enrich article content

**Example:**

**Original:**
> "Time management is important."

**Expanded:**
> "Time management is crucial for modern professionals. Good time management not only significantly improves work efficiency but also helps us maintain clarity in busy work and achieve work-life balance. By properly arranging time, we can better complete tasks, reduce anxiety, and improve quality of life. Mastering time management skills means taking control of your life."

### Use Selected Text

**Function:** Directly use selected text from page

**How to Use:**
1. Select text on page
2. Open right assistant
3. Click "Use Selected Text"
4. Selected text auto-fills in text box
5. Choose operation to perform

**Advantages:**
- No need to manually copy-paste
- Quickly process page content
- Improve operation efficiency

---

## 📄 Page Info

### How It Works

View detailed information and statistics for current page.

### Page Metadata

**Display Information:**
- **Title** - Page title
- **URL** - Complete web address
- **Description** - Meta Description
- **Keywords** - Meta Keywords
- **Author** - Article author
- **Publish Time** - Publication date
- **Last Modified** - Update time

**One-Click Copy:**
- Each item can be copied with one click
- Convenient for reference and recording

### Statistics

**Content Statistics:**
- **Character Count** - Total characters
- **Word Count** - English words
- **Paragraph Count** - Number of paragraphs
- **Sentence Count** - Number of sentences

**Media Statistics:**
- **Image Count** - Number of page images
- **Video Count** - Number of videos
- **Audio Count** - Number of audio files

**Link Statistics:**
- **Internal Links** - Within-site links
- **External Links** - Off-site links
- **Total Links** - All links

**Technical Info:**
- **Character Encoding** - Page encoding
- **Language** - Page language
- **Framework** - Framework used
- **Load Time** - Page load time

### Use Cases

**Content Analysis:**
- Analyze article structure
- Evaluate content quality
- Optimize SEO

**Competitor Research:**
- Analyze competitor articles
- Learn from excellent cases
- Reference data metrics

**Quality Check:**
- Check link integrity
- Verify metadata
- Optimize page information

---

## 💡 Usage Tips

### Improve Efficiency

**Keyboard Shortcuts:**
- `ESC` - Quickly close sidebar
- `Ctrl+C` - Copy content
- `Ctrl+V` - Paste content

**Pin Common Functions:**
- Pin frequently used tools at top
- Quick access

**Combine with Left Sidebar:**
- Left: Style library, AI writing, images
- Right: Tools, notes, assistant
- Double efficiency

### Workflow

**Content Creation Process:**
1. Record inspiration and outline in right notes
2. Generate content with left AI writing
3. Optimize and polish with right AI assistant
4. Beautify formatting with left style library
5. Check word count and info with right tools

**Material Collection Process:**
1. Browse pages, select important content
2. Summarize key points with right AI assistant
3. Record summary in quick notes
4. Copy link to save source
5. Export notes to organize materials

---

## 📚 Related Resources

- [Basic Usage](/en/guide/basic-usage) - Learn basic operations
- [AI Writing](/en/guide/ai-writing) - Detailed AI features
- [FAQ](/en/faq) - More common questions

---

::: tip Usage Advice
The right-side smart assistant is your capable helper. Make good use of various tools to greatly improve work efficiency. Recommend memorizing common functions and forming your own workflow.
:::
