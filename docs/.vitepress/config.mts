import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "SmartEdit AI",
  description: "智能编辑助手 - AI写作·样式库·一键排版",
  lang: 'zh-CN',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#667eea' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'SmartEdit AI - 智能编辑助手' }],
    ['meta', { property: 'og:description', content: '专为微信公众号创作者打造的 Chrome 浏览器扩展，提供 AI 写作、样式库、一键排版、配图中心等功能' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '功能特性', link: '/features' },
      { text: '快速开始', link: '/getting-started' },
      { text: '使用指南', link: '/guide/' },
      { text: '开发文档', link: '/development/' },
      { 
        text: '更多',
        items: [
          { text: '更新日志', link: '/changelog' },
          { text: 'FAQ', link: '/faq' },
          { text: 'GitHub', link: 'https://github.com/smartedit-ai/smartedit-ai' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '使用指南',
          items: [
            { text: '概述', link: '/guide/' },
            { text: '安装配置', link: '/guide/installation' },
            { text: '基本使用', link: '/guide/basic-usage' },
            { text: 'AI 写作', link: '/guide/ai-writing' },
            { text: '样式库', link: '/guide/style-library' },
            { text: '配图中心', link: '/guide/image-center' },
            { text: '智能助手', link: '/guide/smart-assistant' },
          ]
        }
      ],
      '/development/': [
        {
          text: '开发文档',
          items: [
            { text: '开发指南', link: '/development/' },
            { text: '项目结构', link: '/development/project-structure' },
            { text: '构建部署', link: '/development/build-deploy' },
            { text: '技术栈', link: '/development/tech-stack' },
            { text: '贡献指南', link: '/development/contributing' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/smartedit-ai/smartedit-ai' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 SmartEdit Team'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/smartedit-ai/smartedit-ai/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  }
})
