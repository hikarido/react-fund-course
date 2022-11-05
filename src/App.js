import React, { useRef, useState } from "react";
import CounterAsClass from "./components/CounterAsClass";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, tytle: "Java Script", body: "Java script это язык программирования" },
    { id: 2, tytle: "Java Script", body: "Java script это язык программирования" },
    { id: 3, tytle: "Java Script", body: "Java script это язык программирования" }
  ]);

  const [postsAboutJava, setPostsAboutJava] = useState([
    { id: 1, tytle: "Java", body: "Java это язык программирования" },
    { id: 2, tytle: "Java", body: "Java это язык программирования" },
    { id: 3, tytle: "Java", body: "Java это язык программирования" }
  ]);

  const [title, setTitle] = useState('');

  const addNewPost = (e) => {
    e.preventDefault()
    // console.log(title)
    console.log(bodyInputRef.current.value)
    console.log(bodyInputRef.current)
  }

  const bodyInputRef = useRef();

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          type="text"
          onChange={e => setTitle(e.target.value)}
          placeholder="Название поста" />
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Описание поста" />

        {/* <input ref={bodyInputRef} type="text"/> */}

        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов о javaScript" />
      <PostList posts={postsAboutJava} title="Список постов о java" />
    </div>
  );
}

export default App;
