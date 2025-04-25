import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";

const SocIcons = ({ blog }) => {
  return (
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
  );
};

export default SocIcons;
