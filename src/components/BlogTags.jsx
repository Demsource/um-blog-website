import React, { useContext } from "react";
import "./BlogTags.css";
import { BlogTagsContext } from "../AppContext";

const BlogTags = ({ activeTags, toggleActiveTags }) => {
  // Get all unique blog tags
  const tags = useContext(BlogTagsContext);
  // ---------------------------------------------------------

  return (
    <div className="tags">
      <ul>
        {tags.map((tag, i) => (
          <li
            key={i}
            className={`tag ${activeTags.includes(tag) ? "active" : ""}`}
            onClick={() => toggleActiveTags(tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogTags;
