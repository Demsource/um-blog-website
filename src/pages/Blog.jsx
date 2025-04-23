import React, { useContext } from "react";
import { Navigate, useParams } from "react-router";
import { GetBlogContext, ValidSlugsContext } from "../AppContext";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  XIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Blog = () => {
  const params = useParams();

  // handling urls in case there is not such a blog for slug
  const validSlugs = useContext(ValidSlugsContext);

  if (!validSlugs.includes(params.blog)) {
    return <Navigate to="/error" replace />;
  }
  // ---------------------------------------------------------

  // Get a single blog
  const getBlog = useContext(GetBlogContext);
  const blog = getBlog(params.blog);
  // ---------------------------------------------------------

  console.log(blog);

  return (
    <div className="blog">
      <h2>{blog.title}</h2>
      <div className="image">
        <img src={blog.image} alt={blog.title} width="500px" />
      </div>
      <p className="content">{blog.content}</p>
      <div className="publish-date">
        <span>
          <FontAwesomeIcon icon={faCalendarDays} /> {blog.publishDate}
        </span>
      </div>
      {/*Note: Social sharing functionality will not work properly on localhost  */}
      <div className="soc-icons">
        <FacebookShareButton
          url={window.location.href}
          quote={blog.title}
          hashtag={`#${blog.tags[0]}`}
        >
          <FacebookIcon round size="40px" />
        </FacebookShareButton>
        <TwitterShareButton
          url={window.location.href}
          title={blog.title}
          hashtags={blog.tags}
        >
          <XIcon round size="40px" />
        </TwitterShareButton>
        <LinkedinShareButton url={window.location.href} title={blog.title}>
          <LinkedinIcon round size="40px" />
        </LinkedinShareButton>
      </div>
      {/* --------------------------------------------------------- */}
    </div>
  );
};

export default Blog;
