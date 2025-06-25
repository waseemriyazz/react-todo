import { useState } from "react";
import styles from "./Form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);

    setTodo("");
  }
  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        <button className={styles.button}>Add</button>
      </form>
    </div>
  );
}
