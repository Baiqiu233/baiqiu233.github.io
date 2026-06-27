import { HashRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Cursor, Loading } from "animal-island-ui";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";

function App() {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setLoading(false), 900);
    const contentTimer = window.setTimeout(() => setContentVisible(true), 1700);

    return () => {
      window.clearTimeout(loadingTimer);
      window.clearTimeout(contentTimer);
    };
  }, []);

  return (
    <HashRouter>
      <Cursor>
        <div className="app-loading-stage">
          <div className={`app-content ${contentVisible ? "app-content--visible" : ""}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts/:id" element={<Post />} />
            </Routes>
          </div>
          <Loading
            active={loading}
            style={{ position: "fixed", inset: 0, height: "100vh" }}
          />
        </div>
      </Cursor>
    </HashRouter>
  );
}

export default App;
