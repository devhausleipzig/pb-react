import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import About from "./routes/About";
import Blog from "./routes/Blog";
import Home from "./routes/Home";
import Post from "./routes/Post";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<Post />} />
          <Route path="*" element={<p>404 - Not found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
