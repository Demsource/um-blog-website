import React from "react";
import { Link } from "react-router";
import "./BlogPreview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const BlogPreview = ({ blog }) => {
  return (
    <li className="blog-item">
      <Link to={`/blog/${blog.slug}`}>
        <div>
          <img src={blog.image} alt={blog.title} width="300px" height="300px" />
        </div>
        <div className="meta">
          <span>
            <FontAwesomeIcon icon={faCalendarDays} /> {blog.publishDate}
          </span>
          <h3>{blog.title}</h3>
          <p className="content">{blog.content}</p>
          <h4>Read more</h4>
        </div>
      </Link>
    </li>
  );
};

export default BlogPreview;
