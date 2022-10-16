import React, { useState } from "react";
import CounterAsClass from "./components/CounterAsClass";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, tytle: "Java Script", body: "Java script это язык программирования"},
    {id: 2, tytle: "Java Script", body: "Java script это язык программирования"},
    {id: 3, tytle: "Java Script", body: "Java script это язык программирования"}    
  ]);

  const [postsAboutJava, setPostsAboutJava] = useState([
    {id: 1, tytle: "Java", body: "Java это язык программирования"},
    {id: 2, tytle: "Java", body: "Java это язык программирования"},
    {id: 3, tytle: "Java", body: "Java это язык программирования"}    
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="Список постов о javaScript"/>
      <PostList posts={postsAboutJava} title="Список постов о java"/>
    </div>
  );
}

export default App;
