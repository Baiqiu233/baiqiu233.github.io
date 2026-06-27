import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Divider,
  Input,
  Switch,
  Time,
  Title,
  Typewriter,
  Wallet,
} from "animal-island-ui";
import { posts, tags } from "../../data/posts";
import "./Home.less";

function Home() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);
  const [keyword, setKeyword] = useState("");

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredPosts = useMemo(() => {
    const value = keyword.trim().toLowerCase();
    if (!value) return posts;
    return posts.filter((post) => {
      return [post.title, post.tag, post.excerpt].some((text) => text.toLowerCase().includes(value));
    });
  }, [keyword]);

  return (
    <>
      <div className={`blog ${dark ? "blog--dark" : ""}`}>
      <header className="blog-header">
        <div className="blog-header-brand">
          <span className="blog-logo-mark">柏</span>
          <div className="blog-logo-text">
            <div className="blog-logo-title">柏丘</div>
            <div className="blog-logo-sub">生活明朗 万物可爱</div>
          </div>
        </div>
        <nav className="blog-nav">
          <button type="button" onClick={() => scrollToSection("posts")}>📖 文章</button>
          <button type="button" onClick={() => scrollToSection("tags")}>🏷 标签</button>
        </nav>
        <Switch checked={dark} onChange={setDark} checkedChildren="🌙" unCheckedChildren="☀️" />
      </header>

      <section className="blog-hero">
        <div className="blog-hero-text">
          <Title color="app-teal" size="large">
            柏丘
          </Title>
          <div className="blog-hero-title">
            <Typewriter speed={70}>把零散笔记整理成一座小岛。</Typewriter>
          </div>
          <p className="blog-hero-sub">
            这里记录 Openwrt、Frp、Linux、模拟计算和日常折腾，也放一些细碎但有用的技术笔记。
          </p>
          <div className="blog-hero-actions">
            <Button type="primary" size="large" onClick={() => document.getElementById("posts")?.scrollIntoView({ behavior: "smooth" })}>
              开始阅读
            </Button>
          </div>
        </div>
        <div className="blog-hero-side">
          <div className="blog-time-card">
            <Time />
          </div>
          <Card color="app-yellow" className="blog-side-card">
            <div className="blog-side-number">{posts.length}</div>
            <div className="blog-side-label">篇文章</div>
          </Card>
          <Card color="app-pink" className="blog-side-card">
            <div className="blog-side-number">{tags.length}</div>
            <div className="blog-side-label">个标签</div>
          </Card>
        </div>
      </section>

      <Divider type="wave-yellow" />

      <section className="blog-section">
        <div className="blog-stats">
          <Card color="app-yellow">
            <div className="blog-stat">
              <Wallet value={posts.length} />
              <div className="blog-stat-label">已发布文章</div>
            </div>
          </Card>
          <Card color="app-teal">
            <div className="blog-stat">
              <div className="blog-stat-value">{tags.length}</div>
              <div className="blog-stat-label">标签</div>
            </div>
          </Card>
          <Card color="app-pink">
            <div className="blog-stat">
              <div className="blog-stat-value">{posts[0]?.date.slice(5) ?? "--"}</div>
              <div className="blog-stat-label">最近更新</div>
            </div>
          </Card>
        </div>
      </section>

      <Divider type="line-teal" />

      <section id="posts" className="blog-section">
        <div className="blog-section-head">
          <div>
            <h2 className="blog-section-title">最新文章</h2>
            <p className="blog-section-sub">按时间整理最近的笔记和记录。</p>
          </div>
          <Input value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="搜索标题、标签或摘要" allowClear />
        </div>
        <div className="blog-posts-grid">
          {filteredPosts.map((post) => (
            <Card key={post.id} color={post.color} onClick={() => navigate(`/posts/${post.id}`)} className="blog-post-card">
              <div className="blog-post-cover">{post.cover}</div>
              <div className="blog-post-tag">#{post.tag}</div>
              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-post-excerpt">{post.excerpt}</p>
              <div className="blog-post-meta">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Divider type="line-white" />

      <section id="tags" className="blog-section">
        <h2 className="blog-section-title">标签</h2>
        <div className="blog-tags">
          {tags.map((tag) => (
            <Card key={tag} color="app-teal" className="blog-tag-card">
              #{tag}
            </Card>
          ))}
        </div>
      </section>

      </div>
      <div className="sea-footer" aria-hidden="true" />
    </>
  );
}

export default Home;
