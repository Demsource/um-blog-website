import React, { useContext } from "react";
import { Link, Navigate, useParams } from "react-router";
import { GetBlogContext, ValidSlugsContext } from "../AppContext";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import SocIcons from "../components/SocIcons";
import Comments from "../components/Comments";

const Blog = () => {
  const params = useParams();

  // Handling urls in case there is not such a blog for slug.
  // Redirect to any non app page e.g: "error" to display Error Page
  const validSlugs = useContext(ValidSlugsContext);

  if (!validSlugs.includes(params.blog)) {
    return <Navigate to="/error" replace />;
  }
  // ---------------------------------------------------------

  // Get a single blog
  const getBlog = useContext(GetBlogContext);
  const blog = getBlog(params.blog);
  // ---------------------------------------------------------

  return (
    <div className="blog">
      <div className="go-back">
        <Link to="/">
          <span>
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Home Page
          </span>
        </Link>
      </div>
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
      {/*Note: Social sharing functionality will not work properly on localhost. 
      Here is the app deployed on the github pages: https://demsource.github.io/um-blog-website/ */}
      <SocIcons blog={blog} />
      {/* --------------------------------------------------------- */}
      <Comments blogId={blog.slug} />
    </div>
  );
};

export default Blog;
