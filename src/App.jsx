import { createHashRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";
import AppProvider from "./AppContext";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <AppProvider>
        <Layout />
      </AppProvider>
    ),
    errorElement: (
      <AppProvider>
        <Layout error={<ErrorPage />} />
      </AppProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog/:blog",
        element: <Blog />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="blog-website">
      <RouterProvider basename="/um-blog-website" router={router} />
    </div>
  );
}

export default App;
