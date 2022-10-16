import React, { useState } from "react";
import CounterAsClass from "./components/CounterAsClass";
import './styles/App.css';
import PostItem from "./components/PostItem";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, tytle: "Java Script", body: "Java script это яхык программирования"},
    {id: 2, tytle: "Java Script", body: "Java script это яхык программирования"},
    {id: 3, tytle: "Java Script", body: "Java script это яхык программирования"}    
  ]);

  console.log(posts);

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Список постов</h1>
      {posts.map(post =>
          <PostItem key={post.id} post={post}/>
      )}
    </div>
  );
}

export default App;
