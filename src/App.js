import "./App.css";
import NavBar from "./utils/navbar";
import SearchBar from "./utils/searchbar";
import PostList from "./utils/postlist";
import Profile from "./utils/profile";
import { useState, useEffect } from "react";
import Login from "./account/login";
import configureInterceptor from "./utils/httpinterceptors";
import { getPosts } from "./service/data-service";

function App() {
  const [posts, setPosts] = useState();
  const [search, setSearch] = useState("");
  const [section, setSection] = useState("posts");
  const [loginOk, setLoginOk] = useState(false);

  let timerOnSearch;
  configureInterceptor();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      return;
    }
    setLoginOk(true);
    searchPosts();
    return () => {
      clearTimer();
    };
  }, [loginOk]);

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
    <div className="App">
      <main>
        {loginOk ? (
          <>
            <NavBar
              onLogoClick={() => setSection("posts")}
              onProfileClick={() => setSection("profile")}
            />
            <div className="container">
              {section == "posts" ? (
                <>
                  <SearchBar value={search} onSearch={handleChange} />
                  <PostList posts={posts} />
                </>
              ) : (
                <Profile
                  avatar={require("./images/diego.jpeg")}
                  username={"@diego"}
                  bio={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.`}
                />
              )}
            </div>
          </>
        ) : (
          <Login onLoginComplete={() => setLoginOk(true)} />
        )}
      </main>
    </div>
  );
}

export default App;
