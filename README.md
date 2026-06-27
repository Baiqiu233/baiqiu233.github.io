# 柏丘博客文件说明

这个仓库现在按源码和发布文件分开管理：

```text
Blog/
  index.html              # GitHub Pages 直接读取的新版入口
  assets/                 # 新版构建后的静态资源
  legacy-posts/           # 新版文章正文 HTML
  animal-island-react/    # 新版 React/Vite 博客源码
  CNAME                   # GitHub Pages 自定义域名配置
```

## 发布版本

仓库根目录就是 GitHub Pages 发布目录。根目录的 `index.html`、`assets/` 和 `legacy-posts/` 都来自 `animal-island-react` 的构建结果。

旧版静态博客已经不再保留在仓库里。

## 源码版本

新版源码在 `animal-island-react/`。

常用文件：

```text
animal-island-react/src/data/posts.ts             # 首页文章列表和文章元数据
animal-island-react/public/legacy-posts/*.html    # 源码里的文章正文 HTML
animal-island-react/src/pages/Home/               # 首页代码
animal-island-react/src/pages/Post/               # 文章页代码
```

## 发布流程

每次改完源码后，在 `animal-island-react/` 里构建：

```bash
pnpm build
```

然后把 `animal-island-react/dist/` 里的内容复制到仓库根目录，再提交和推送。这样 GitHub Pages 会直接显示新版。

## 新增文章

当前版本还没有接入 Markdown 自动读取，所以新增文章先改源码里的两个地方。

1. 在 `animal-island-react/public/legacy-posts/` 新增正文文件，例如：

```text
animal-island-react/public/legacy-posts/my-new-post.html
```

正文可以先写普通 HTML，例如：

```html
<h2>标题</h2>
<p>这里写文章内容。</p>
<pre><code>echo "代码块"</code></pre>
```

2. 在 `animal-island-react/src/data/posts.ts` 的 `posts` 数组最前面新增一条文章数据。

示例：

```ts
{
  id: "my-new-post",
  title: "我的新文章",
  date: "2026-06-27",
  tag: "随笔",
  color: "app-teal",
  cover: "🌿",
  readTime: "3 分钟",
  legacyPath: "/2026/06/27/my-new-post/",
  excerpt: "这是一段显示在首页卡片上的摘要。",
  sections: [
    {
      heading: "文章摘要",
      paragraphs: ["正文加载失败时会显示这里的备用摘要。"],
    },
  ],
  takeaways: ["要点一", "要点二"],
}
```

注意：`id` 必须和正文文件名一致。比如 `id: "my-new-post"` 对应 `public/legacy-posts/my-new-post.html`。

3. 重新构建，并把 `animal-island-react/dist/` 复制到仓库根目录。

以后如果把内容源升级成 Markdown，就可以只新增 `.md` 文件，不再手动改 `posts.ts`。
