import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ConstasJ的创作园地",
  description: "这里可以看到我关于打算创作的原创和二创作品的企划、设定与草稿",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "《渡边君的青空》", link: "/watanabe-kun/proposal.md" },
      { text: "《秀知院物语》", link: "/shumono/draft/interlogue-1.md" },
    ],

    sidebar: {
      "/watanabe-kun/": [
        {
          text: "总览",
          items: [
            { text: "作品企划", link: "/watanabe-kun/proposal.md" },
            { text: "想说的话", link: "/watanabe-kun/author-talk.md" },
          ],
        },
        {
          text: "归档",
          items: [
            { text: "作品企划(旧版)", link: "/watanabe-kun/proposal-old.md" }
          ],
        }
      ],
      '/shumono/': [
        {
          text: '草稿',
          items: [
            {
              text: '间章第1话',
              link: '/shumono/draft/interlogue-1.md',
            },
            {
              text: '间章第2话',
              link: '/shumono/draft/interlogue-2.md',
            },
            {
              text: '间章If:众议院虚拟答辩',
              link: '/shumono/draft/shugiin-consult-virt.md',
            },
            {
              text: '间章第3话',
              link: '/shumono/draft/interlogue-3.md',
            },
            {
              text: '间章第4话',
              link: '/shumono/draft/interlogue-4.md',
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/ConstasJ" },
      {
        "icon": "twitter",
        "link": "https://twitter.com/ConstasJ",
      },
      { 
        icon: { 
          svg: '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/></svg>' 
        }, 
        link: "https://space.bilibili.com/168223531" 
      },
    ],
    outline: {
      level: 'deep',
      label: '目录',
    },
    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2025131681号</a>',
      copyright: 'Copyright © 2025 <a href="https://github.com/ConstasJ" target="_blank">ConstasJ</a> | 本网站一切原创内容按照 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans" target="_blank">CC BY-NC-SA 4.0</a> 授权'
    }
  },
});
