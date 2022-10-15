import React from "react";
import CounterAsClass from "./components/CounterAsClass";

function App() {
  const [countName, setCountName] = React.useState('Имя счетчика')
  const [likes, setLikes] = React.useState(0);

  return (
    <div className="App">
      <CounterAsClass/>
    </div>
  );
}

export default App;
