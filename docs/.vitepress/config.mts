import { defineConfig } from 'vitepress'

import { getSidebar } from 'vitepress-plugin-auto-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'HOYOLIFE',
  description: 'HOYOLIFE-PROJECT STONE',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '总目录', link: '/stone/存档/总目录' },
      { text: '仙家军', link: '/stone/存档/仙家军/仙家军' },
      { text: '原神', link: '/stone/存档/原神/原神' },
      { text: '崩坏三', link: '/stone/存档/崩坏三/崩坏三' },
      { text: '崩坏星穹铁道', link: '/stone/存档/崩坏星穹铁道/崩坏星穹铁道' },
      {
        text: '其它游戏',
        items: [
          { text: '崩坏学园2', link: '/stone/存档/崩坏学园2/崩坏学园2' },
          { text: '未定事件簿', link: '/stone/存档/未定事件簿/未定事件簿' },
          { text: '绝区零', link: '/stone/存档/绝区零/绝区零' },
        ]
      },
      { text: '文章', link: '/stone/存档/文章/买量仙人' },
      { text: '档案记录馆', link: '/stone/存档/档案记录馆/档案记录馆' },
      { text: '米哈游以及员工', link: '/stone/存档/米哈游以及员工/米哈游新大楼' },
      { text: '世界树运营', link: '/stone/存档/世界树运营/猛干DLC/猛干DLC' },
      { text: '关于', link: '/stone/关于/百科关于' },
    ],
    sidebar: {
      '/stone/存档/世界树运营': getSidebar({
        contentRoot: '/docs',
        contentDirs: ['stone/存档/世界树运营'],
        collapsible: true,
        collapsed: true,
      }),
      '/stone/存档/仙家军': getSidebar({
        contentRoot: '/docs',
        contentDirs: ['stone/存档/仙家军'],
        collapsible: true,
        collapsed: true,
      }),
      '/stone/存档/原神': getSidebar({
        contentRoot: '/docs',
        contentDirs: ['stone/存档/原神'],
        collapsible: true,
        collapsed: true,
      }),
      '/stone/存档/崩坏三': getSidebar({
        contentRoot: '/docs',
        contentDirs: ['stone/存档/崩坏三'],
        collapsible: true,
        collapsed: true,
      }),
      '/stone/存档/崩坏学园2': getSidebar({
        contentRoot: '/docs',
        contentDirs: ['stone/存档/崩坏学园2'],
        collapsible: true,
        collapsed: true,
      }),
      '/stone/存档/崩坏星穹铁道': getSidebar({
        contentRoot: '/docs',
        contentDirs: ['stone/存档/崩坏星穹铁道'],
        collapsible: true,
        collapsed: true,
      }),
      '/stone/存档/工具': getSidebar({
        contentRoot: '/docs',
        contentDirs: ['stone/存档/工具'],
        collapsible: true,
        collapsed: true,
      }),
      '/stone/存档/文章': getSidebar({
        contentRoot: '/docs',
        contentDirs: ['stone/存档/文章'],
        collapsible: true,
        collapsed: true,
      }),
      '/stone/存档/未定事件簿': getSidebar({
        contentRoot: '/docs',
        contentDirs: ['stone/存档/未定事件簿'],
        collapsible: true,
        collapsed: true,
      }),
      '/stone/存档/档案记录馆': getSidebar({
        contentRoot: '/docs',
        contentDirs: ['stone/存档/档案记录馆'],
        collapsible: true,
        collapsed: true,
      }),
      '/stone/存档/米哈游以及员工': getSidebar({
        contentRoot: '/docs',
        contentDirs: ['stone/存档/米哈游以及员工'],
        collapsible: true,
        collapsed: true,
      }),
      '/stone/存档/绝区零': getSidebar({
        contentRoot: '/docs',
        contentDirs: ['stone/存档/绝区零'],
        collapsible: true,
        collapsed: true,
      }),
      '/stone/关于': getSidebar({
        contentRoot: '/docs',
        contentDirs: ['stone/关于'],
        collapsible: true,
        collapsed: true,
      }),
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/hoyolife' }],
    search: {
      provider: 'local'
    },
    outlineTitle: '页面导航',
    docFooter: {
      prev:"上一页",
      next:"下一页",
    },
    outline: {level: [2,6]},
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 世界树.(HOYOLIFE)'
    }
  },
  vite: {
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.gif', '**/*.webp','**/*.zip','**/*.pdf'],
  },
  ignoreDeadLinks: true
})
