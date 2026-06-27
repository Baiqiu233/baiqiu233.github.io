# 柏丘 React/Vite 新版博客

这个目录是新版博客源码，目标是迁移成 `React + Vite + animal-island-ui` 风格的博客。

## 文件边界

- 旧版静态博客仍然保留在仓库根目录，例如 `index.html`、`2025/`、`2026/`、`archives/`。
- 新版源码只放在 `animal-island-react/`。
- 迁移完成前，不移动、不删除、不覆盖旧版文章文件。

## 目录结构

```text
animal-island-react/
  package.json              # 新版项目依赖和脚本
  vite.config.ts            # Vite 配置
  index.html                # React 挂载入口
  src/
    main.tsx                # React 入口
    App.tsx                 # 路由入口
    data/posts.ts           # 迁移后的文章数据
    pages/Home/             # 首页
    pages/Post/             # 文章详情页
```

## 下一步

需要安装项目依赖后才能运行：

```bash
pnpm install
pnpm dev
```

我会在安装依赖前单独向你确认。
