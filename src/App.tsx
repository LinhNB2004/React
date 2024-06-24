import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodo] = useState([
    { id: 1, title: "To do 1", complete: true },
    { id: 2, title: "To do 2", complete: true },
    { id: 3, title: "To do 3", complete: true },
  ]);
  const [count, setCount] = useState(0);

  const [inputValue, setInputvalue] = useState("");

  const handleClick = () => {
    const newTodo = {
      id: todos.length + 1,
      title: inputValue,
      complete: true,
    };
    setTodo([...todos, newTodo]);
    setInputvalue("");

    setCount(count + 1);
  };
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="title"
        value={inputValue}
        onChange={(b) => setInputvalue(b.target.value)}
      />

      <button onClick={handleClick}>Test</button>
    </>
  );
}

export default App;
