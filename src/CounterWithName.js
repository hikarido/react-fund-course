import React from "react";

function CounterWithName() {
  const [countName, setCountName] = React.useState('Имя счетчика')
  const [likes, setLikes] = React.useState(0);
  
  function increment() {
    setLikes(likes + 1)
  }

  function decrement() {
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h1>{countName}</h1>
      <h1>{likes}</h1>
      <input type = 'text' value={countName} onChange={event => setCountName(event.target.value)}></input>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterWithName;
