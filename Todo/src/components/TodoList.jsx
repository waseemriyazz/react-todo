import { TodoItem } from "./TodoItem";
export default function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo} todo={todo} />
      ))}
    </div>
  );
}
