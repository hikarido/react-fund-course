import React, { useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "Java", body: "Java это язык" },
    { id: 2, title: "Java", body: "Java это язык программирования" },
    { id: 3, title: "Java", body: "Пост" }
  ]);


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title="Список постов о java" />
    </div>
  );
}

export default App;
