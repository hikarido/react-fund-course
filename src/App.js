import React from "react";
import CounterAsClass from "./components/CounterAsClass";
import './styles/App.css';
import PostItem from "./components/PostItem";

function App() {
  const [countName, setCountName] = React.useState('Имя счетчика')
  const [likes, setLikes] = React.useState(0);

  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'JavaScript', body: 'Description'}}/>      
      <PostItem post={{id: 2, title: 'JavaScript', body: 'Description'}}/>      
      <PostItem post={{id: 3, title: 'JavaScript', body: 'Description'}}/>      
      <PostItem post={{id: 4, title: 'JavaScript', body: 'Description'}}/>      
      <PostItem post={{id: 5, title: 'JavaScript', body: 'Description'}}/>      
      <PostItem post={{id: 6, title: 'JavaScript', body: 'Description'}}/>      
      <PostItem post={{id: 7, title: 'JavaScript', body: 'Description'}}/>      
      <PostItem post={{id: 1, title: 'JavaScript', body: 'Description'}}/>      
      <PostItem post={{id: 2, title: 'JavaScript', body: 'Description'}}/>      
      <PostItem post={{id: 3, title: 'JavaScript', body: 'Description'}}/>      
      <PostItem post={{id: 4, title: 'JavaScript', body: 'Description'}}/>      
      <PostItem post={{id: 5, title: 'JavaScript', body: 'Description'}}/>      
      <PostItem post={{id: 6, title: 'JavaScript', body: 'Description'}}/>      
      <PostItem post={{id: 7, title: 'JavaScript', body: 'Description'}}/>      
    </div>
  );
}

export default App;
