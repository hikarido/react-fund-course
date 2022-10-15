import React from "react";
import Counter from "./components/Counter";

function App() {
  const [countName, setCountName] = React.useState('Имя счетчика')
  const [likes, setLikes] = React.useState(0);

  return (
    <div className="App">
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
