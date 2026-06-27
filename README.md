# 柏丘博客文件说明

这个仓库现在按新旧版本分开管理：

```text
Blog/
  legacy-static-blog/     # 旧版静态博客归档
  animal-island-react/    # 新版 React/Vite 博客源码
  CNAME                   # GitHub Pages 自定义域名配置
```

## 旧版博客

旧版静态页面已经集中放到 `legacy-static-blog/`，里面保留原来的 `2025/`、`2026/`、`archives/`、`tags/`、`css/`、`js/` 等文件。

这个目录主要用于备份和对照，不建议继续手动修改。

## 新版博客

新版源码在 `animal-island-react/`。

常用文件：

```text
animal-island-react/src/data/posts.ts             # 首页文章列表和文章元数据
animal-island-react/public/legacy-posts/*.html    # 文章正文 HTML
animal-island-react/src/pages/Home/               # 首页代码
animal-island-react/src/pages/Post/               # 文章页代码
```

注意：仓库目前没有 GitHub Pages 自动构建脚本。现在只是把新旧版本分开管理；后续正式部署新版时，需要让 GitHub Pages 发布 `animal-island-react` 的构建结果。

## 新增文章

当前版本还没有接入 Markdown 自动读取，所以新增文章需要改两个地方。

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

以后如果把内容源升级成 Markdown，就可以只新增 `.md` 文件，不再手动改 `posts.ts`。
