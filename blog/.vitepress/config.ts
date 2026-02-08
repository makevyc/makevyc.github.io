import { getBlogs } from "./theme/serverUtils";
import mdKatex from "./theme/markdown-it-katex";
import { buildBlogRSS } from "./theme/rss";
import * as SECRETS from "./secret";
import MarkdownIt from "markdown-it";

async function configs() {
  return {
    title: "makevyc的博客",
    head: [
      // live2d widget
      [
        "script",
        {
          src: "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js",
        }
      ],
      // KaTex stylesheet for markdown-it-katex
      [
        "link",
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.css",
        },
      ],
      // markdown-it 
      [
        "link",
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css",
        },
      ],
      // font-awesome
      [
        "link",
        {
          rel: "stylesheet",
          href:
            "https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css",
        },
      ],
      // ionicons used in `about-me` page
      [
        "link",
        {
          rel: "stylesheet",
          href: "https://cdn.staticfile.org/ionicons/2.0.1/css/ionicons.min.css",
        },
      ],
      // site resources
      [
        "link",
        {
          rel: "icon",
          type: "image/png",
          href: "/logo.png",
        },
      ],
      [
        "meta",
        {
          name: "author",
          content: "makevyc",
        },
      ],
      [
        "meta",
        {
          property: "og:title",
          content: "Home",
        },
      ],
      [
        "meta",
        {
          property: "og:description",
          content: "Home of makevyc",
        },
      ],
    ],
    locales: {
      root: {
        label: 'English', lang: 'en',
        description: "Personal Blog",
        themeConfig: {
          lastUpdatedText: "Last Updated",
          nav: [
            { text: "🏡Homepage", link: "/" },
            { text: "🦹‍♂️About Me", link: "/about-me/" },
            {
              text: "📓Blogs",
              items: [
                { text: "📃Archives", link: "/zh/blogs/" },
                { text: "🔖Tags", link: "/zh/blogs/tags/" },
              ],
            },
            {
              text: "🔥RSS",
              link: "https://makevyc.github.io/feed.xml",
            },
          ],
        }
      },
      zh: {
        label: '中文', lang: 'zh-CN', link: '/zh/',
        description: "个人博客",
        themeConfig: {
          lastUpdatedText: "上次更新",
          nav: [
            { text: "🏡主页", link: "/zh/" },
            { text: "🦹‍♂️关于我", link: "/zh/about-me/" },
            {
              text: "📓博客",
              items: [
                { text: "📃所有博客", link: "/zh/blogs/" },
                { text: "🔖标签分类", link: "/zh/blogs/tags/" },
              ],
            },
            {
              text: "🔥RSS",
              link: "https://makevyc.github.io/feed.xml",
            },
          ],
        }
      },
    },
    themeConfig: {
      logo: "/assets/logo.png",
      homeLottie: "/assets/lottie-developer.json",
      i18nRouting: false,
      // refer to the `VPNavBarTitle.vue` in default theme,
      // we have to set it to null to disable the text in navigation bar,
      // the undefined is not applicable here,
      siteTitle: null,
      blogs: await getBlogs(),
      // select two latest posts to display on the index page
      latestNum: 2,
      // gitalk comments configurations
      gitalk: {
        admin: ["makevyc"],
        repo: 'makevyc.github.io',
        clientID: SECRETS.GITALK_ID,
        clientSecret: SECRETS.GITALK_SECRET,
        owner: "makevyc",
      },
      // algolia search configurations
      algolia: {
        indexName: 'forswornsio',
        appId: SECRETS.ALGOLIA_ID,
        apiKey: SECRETS.ALGOLIA_SECRET,
      },
      socialLinks: [
        { icon: "github", link: "https://github.com/makevyc" },
      ],
    },
    markdown: {
      config: (md: MarkdownIt) => {
        md.use(mdKatex);
      },
    },
    buildEnd: buildBlogRSS,
  };
}

export default configs();
