import React, { useContext, useEffect, useState } from "react";
import "./Comments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { BlogsContext } from "../AppContext";
import { v4 as uuidv4 } from "uuid";

const Comments = ({ blogId }) => {
  const [formData, setFormData] = useState({});
  const { blogs, setBlogs } = useContext(BlogsContext);

  useEffect(() => {
    // Syncing blog comments from the localstorage to the blogs context state
    const comments = localStorage.getItem(blogId);
    const parsedComments = comments ? JSON.parse(comments) : [];

    setBlogs((prevBlogs) => {
      const updatedBlogs = prevBlogs.map((prevBlog) => {
        if (prevBlog.slug === blogId) {
          const currentCommentsIds = prevBlog.comments.map(
            (comment) => comment.commentId
          );

          const newComments = parsedComments.filter(
            (parsedComment) =>
              !currentCommentsIds.includes(parsedComment.commentId)
          );

          return {
            ...prevBlog,
            comments: [...prevBlog.comments, ...newComments],
          };
        }
        return prevBlog;
      });

      return updatedBlogs;
    });
    // ---------------------------------------------------------
  }, [blogId]);

  // Get current blog comments from the blogs state
  const comments = blogs.find((blog) => blog.slug === blogId).comments;
  // ---------------------------------------------------------

  const handleChange = (e) => {
    // Saving new comment to the formData component state
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // ---------------------------------------------------------
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Saving new comment to the local storage and blogs context state
    const newComment = { ...formData, commentId: uuidv4() };

    const comments = localStorage.getItem(blogId);
    const parsedComments = comments ? JSON.parse(comments) : [];

    localStorage.setItem(
      blogId,
      JSON.stringify([...parsedComments, newComment])
    );

    setBlogs((prevBlogs) => {
      const updatedBlogs = prevBlogs.map((prevBlog) =>
        prevBlog.slug === blogId
          ? { ...prevBlog, comments: [...prevBlog.comments, newComment] }
          : prevBlog
      );

      return updatedBlogs;
    });
    // ---------------------------------------------------------

    setFormData({ name: "", message: "" });
  };

  return (
    <div className="comments-wrapper">
      <div className="comments">
        <h4>Comments ({comments.length})</h4>
        <form action="#" onSubmit={handleFormSubmit}>
          <h5>Leave a comment</h5>
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <textarea
            name="message"
            placeholder="Enter your message..."
            value={formData.message}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        <div className="messages">
          {comments.map((comment, i) => (
            <div key={i} className="message">
              <div className="author">
                <FontAwesomeIcon icon={faUser} />
                {comment.name}
              </div>
              <div className="text">{comment.message}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
