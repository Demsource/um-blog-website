import React, { useContext, useState } from "react";
import { BlogsContext, BlogTagsContext } from "../AppContext";
import "./Home.css";
import Search from "../components/Search";
import BlogTags from "../components/BlogTags";
import BlogList from "../components/BlogList";

const Home = () => {
  const { blogs } = useContext(BlogsContext);
  const [searchText, setSearchText] = useState("");
  const tags = useContext(BlogTagsContext);
  const [activeTags, setActiveTags] = useState(tags);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  // Handle filter blogs by tags
  const toggleActiveTags = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags((prevActiveTags) =>
        prevActiveTags.filter((prevTag) => prevTag !== tag)
      );
    } else {
      setActiveTags((prevActiveTags) => [...prevActiveTags, tag]);
    }
  };
  // ---------------------------------------------------------

  // Handle searched and tag filtered blog display functionality
  const displayBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchText.toLowerCase()) &&
      blog.tags.find((tag) => activeTags.includes(tag))
  );
  // ---------------------------------------------------------

  return (
    <div className="home">
      <Search searchText={searchText} handleSearch={handleSearch} />
      <BlogTags activeTags={activeTags} toggleActiveTags={toggleActiveTags} />
      <BlogList displayBlogs={displayBlogs} />
    </div>
  );
};

export default Home;
