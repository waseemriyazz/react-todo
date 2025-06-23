import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);

    setTodo("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        value={todo}
      />
      <button>Add</button>
    </form>
  );
}
