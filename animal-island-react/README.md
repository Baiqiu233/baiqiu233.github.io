# 柏丘 React/Vite 博客

这个目录是新版博客源码，使用 `React + Vite + animal-island-ui`。

## 文件边界

- 新版源码只放在 `animal-island-react/`。
- 旧版静态博客归档在仓库根目录的 `legacy-static-blog/`。
- 仓库根目录的 `CNAME` 是 GitHub Pages 自定义域名配置，不属于旧版或新版源码。

## 目录结构

```text
animal-island-react/
  package.json              # 新版项目依赖和脚本
  vite.config.ts            # Vite 配置
  index.html                # React 挂载入口
  src/
    main.tsx                # React 入口
    App.tsx                 # 路由入口
    data/posts.ts           # 首页文章列表和文章元数据
    pages/Home/             # 首页
    pages/Post/             # 文章详情页
  public/
    legacy-posts/           # 当前文章正文 HTML
```

## 本地运行

需要安装项目依赖后才能运行：

```bash
pnpm install
pnpm dev
```

## 新增文章

当前版本新增文章需要同步修改：

- `public/legacy-posts/<文章 id>.html`
- `src/data/posts.ts`

其中 `posts.ts` 里的 `id` 必须和正文 HTML 文件名一致。
