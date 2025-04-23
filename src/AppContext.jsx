import { createContext, useContext, useState } from "react";
import data from "./data/data";

export const BlogsContext = createContext();
export const ValidSlugsContext = createContext();
export const GetBlogContext = createContext();
export const BlogTagsContext = createContext();

const AppProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(data);

  const validSlugs = blogs.map((blog) => blog.slug);

  const getBlog = (slug) => blogs.find((blog) => blog.slug === slug);

  // Get all unique blog tags
  const tags = [];

  for (let i = 0; i < blogs.length; i++) {
    for (let j = 0; j < blogs[i].tags.length; j++) {
      if (!tags.includes(blogs[i].tags[j])) {
        tags.push(blogs[i].tags[j]);
      }
    }
  }
  // ---------------------------------------------------------

  return (
    <BlogsContext.Provider value={{ blogs, setBlogs }}>
      <ValidSlugsContext.Provider value={validSlugs}>
        <GetBlogContext.Provider value={getBlog}>
          <BlogTagsContext.Provider value={tags}>
            {children}
          </BlogTagsContext.Provider>
        </GetBlogContext.Provider>
      </ValidSlugsContext.Provider>
    </BlogsContext.Provider>
  );
};

export default AppProvider;
