import React, { useRef, useState } from "react";
import CounterAsClass from "./components/CounterAsClass";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Java Script", body: "Java script это язык программирования" },
    { id: 2, title: "Java Script", body: "Java script это язык программирования" },
    { id: 3, title: "Java Script", body: "Java script это язык программирования" }
  ]);

  const [postsAboutJava, setPostsAboutJava] = useState([
    { id: 1, title: "Java", body: "Java это язык программирования" },
    { id: 2, title: "Java", body: "Java это язык программирования" },
    { id: 3, title: "Java", body: "Java это язык программирования" }
  ]);

  const emptyPost = {id: -1, title: '', body: ''}
  const [post, setPost] = useState(emptyPost)

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost  = {
      id: Date.now(),
      title: post.title,
      body: post.body
    }

    setPosts([...posts, newPost])
    setPost(emptyPost)

  }

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.title}
          type="text"
          onChange={e => setPost({...post, title: e.target.value})}
          placeholder="Название поста" />
        <MyInput
          value={post.body}
          type="text"
          onChange={e => setPost({...post, body: e.target.value})}
          placeholder="Описание поста" />

        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов о javaScript" />
      <PostList posts={postsAboutJava} title="Список постов о java" />
    </div>
  );
}

export default App;
