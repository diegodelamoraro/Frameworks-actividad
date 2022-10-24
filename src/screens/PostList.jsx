import SearchBar from "../utils/searchbar";
import PostListComponent from "../utils/postlist";
import { useState, useEffect } from "react";
import { getPosts } from "../service/data-service";
export default function PostList() {
  let timerOnSearch;
  const [posts, setPosts] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {
    searchPosts();
    return () => {
      clearTimer();
    };
  }, []);

  function searchPosts(value) {
    setPosts();
    getPosts().then((response) => {
      if (typeof value === "undefined" || value == null) setPosts(response);
      else {
        value = value.toLowerCase();
        var items = response.filter(
          (item) =>
            item.author?.username.toLowerCase().includes(value) ||
            item.text.toLowerCase().includes(value)
        );
        setPosts(items);
        setSearch(value);
      }
    });
  }

  function clearTimer() {
    if (timerOnSearch != null) {
      clearTimeout(timerOnSearch);
    }
  }

  function handleChange(e) {
    clearTimer();
    timerOnSearch = setTimeout(() => searchPosts(e.target.value), 500);
  }
  return (
    <>
      <SearchBar value={search} onSearch={handleChange} />
      <PostListComponent posts={posts} />
    </>
  );
}
