import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "SmartEdit AI",
  description: "智能编辑助手 - AI写作·样式库·一键排版",
  
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#667eea' }],
  ],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
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
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        outline: {
          label: '页面导航'
        },
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Features', link: '/en/features' },
          { text: 'Getting Started', link: '/en/getting-started' },
          { text: 'Guide', link: '/en/guide/' },
          { text: 'Development', link: '/en/development/' },
          { 
            text: 'More',
            items: [
              { text: 'Changelog', link: '/en/changelog' },
              { text: 'FAQ', link: '/en/faq' },
              { text: 'GitHub', link: 'https://github.com/smartedit-ai/smartedit-ai' }
            ]
          }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'User Guide',
              items: [
                { text: 'Overview', link: '/en/guide/' },
                { text: 'Installation', link: '/en/guide/installation' },
                { text: 'Basic Usage', link: '/en/guide/basic-usage' },
                { text: 'AI Writing', link: '/en/guide/ai-writing' },
                { text: 'Style Library', link: '/en/guide/style-library' },
                { text: 'Image Center', link: '/en/guide/image-center' },
                { text: 'Smart Assistant', link: '/en/guide/smart-assistant' },
              ]
            }
          ],
          '/en/development/': [
            {
              text: 'Development',
              items: [
                { text: 'Development Guide', link: '/en/development/' },
                { text: 'Project Structure', link: '/en/development/project-structure' },
                { text: 'Build & Deploy', link: '/en/development/build-deploy' },
                { text: 'Tech Stack', link: '/en/development/tech-stack' },
                { text: 'Contributing', link: '/en/development/contributing' },
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/smartedit-ai/smartedit-ai/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'short'
          }
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        outline: {
          label: 'On this page'
        },
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Theme',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme'
      }
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/smartedit-ai/smartedit-ai' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 SmartEdit Team'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear search',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate'
                }
              }
            }
          }
        }
      }
    }
  }
})
