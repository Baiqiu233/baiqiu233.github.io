import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Divider } from "animal-island-ui";
import { getPostById, posts } from "../../data/posts";
import "./Post.less";

function normalizeLegacyHtml(html: string) {
  const document = new DOMParser().parseFromString(html, "text/html");

  document.querySelectorAll("img").forEach((image) => {
    image.removeAttribute("srcset");
    image.removeAttribute("lazyload");
    image.setAttribute("loading", "eager");

    const rawSrc = image.getAttribute("src") ?? "";
    const decodedSrc = decodeURIComponent(rawSrc);
    const externalUrl = decodedSrc.match(/https?:\/{1,2}[^)\s"']+/)?.[0];

    if (externalUrl) {
      image.setAttribute("src", externalUrl.replace(/^https?:\//, "https://"));
    }
  });

  return document.body.innerHTML;
}

function Post() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const post = getPostById(id);
  const [legacyHtml, setLegacyHtml] = useState("");
  const [contentState, setContentState] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  useEffect(() => {
    if (!post) return;

    let cancelled = false;
    setLegacyHtml("");
    setContentState("loading");

    fetch(`${import.meta.env.BASE_URL}legacy-posts/${post.id}.html`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`正文加载失败：${response.status}`);
        }
        return response.text();
      })
      .then((html) => {
        if (!cancelled) {
          setLegacyHtml(normalizeLegacyHtml(html));
          setContentState("ready");
        }
      })
      .catch(() => {
        if (!cancelled) {
          setContentState("error");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [post]);

  if (!post) {
    return (
      <div className="post-page">
        <Button type="text" onClick={() => navigate("/")}>
          ← 返回首页
        </Button>
        <Card color="app-pink">
          <h2>文章没有找到</h2>
          <p>这篇文章可能不存在，或者链接已经失效。</p>
        </Card>
      </div>
    );
  }

  const currentIndex = posts.findIndex((item) => item.id === post.id);
  const prev = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const next = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <>
      <div className="post-page">
      <div className="post-back">
        <Button type="text" onClick={() => navigate("/")}>
          ← 返回文章列表
        </Button>
      </div>

      <Card color={post.color} className="post-hero">
        <div className="post-hero-cover">{post.cover}</div>
        <div className="post-hero-text">
          <span className="post-tag">#{post.tag}</span>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span>🗓 {post.date}</span>
            <span>⏱ {post.readTime}</span>
          </div>
        </div>
      </Card>

      <p className="post-excerpt">{post.excerpt}</p>
      <Divider type="line-teal" />

      <article className="post-body">
        {contentState === "ready" ? (
          <div className="legacy-markdown" dangerouslySetInnerHTML={{ __html: legacyHtml }} />
        ) : (
          <>
            {contentState === "loading" ? (
              <p className="post-content-note">正文加载中...</p>
            ) : (
              <p className="post-content-note">正文暂时没有加载成功，请稍后再试。</p>
            )}
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </>
        )}
      </article>

      <Card color="app-yellow" className="post-takeaways">
        <h3>🌿 这篇文章的要点</h3>
        <ul>
          {post.takeaways.map((takeaway) => (
            <li key={takeaway}>{takeaway}</li>
          ))}
        </ul>
      </Card>

      <Divider type="wave-yellow" />

      <div className="post-nav">
        {prev ? (
          <Button onClick={() => navigate(`/posts/${prev.id}`)}>← {prev.title}</Button>
        ) : (
          <span />
        )}
        {next ? (
          <Button type="primary" onClick={() => navigate(`/posts/${next.id}`)}>
            {next.title} →
          </Button>
        ) : (
          <span />
        )}
      </div>

      </div>
      <div className="sea-footer" aria-hidden="true" />
    </>
  );
}

export default Post;
