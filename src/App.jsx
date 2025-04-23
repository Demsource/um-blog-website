import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="blog-website">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog/:blog" element={<Blog />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
