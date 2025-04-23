import React from "react";
import BlogPreview from "./BlogPreview";
import "./BlogList.css";

const BlogList = ({ displayBlogs }) => {
  return (
    <ul className="blog-list">
      {displayBlogs?.length ? (
        displayBlogs.map((blog, i) => <BlogPreview key={i} blog={blog} />)
      ) : (
        <p className="no-blogs">No blogs to show</p>
      )}
    </ul>
  );
};

export default BlogList;
