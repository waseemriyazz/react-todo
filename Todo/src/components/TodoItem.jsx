import styles from "./todoitem.module.css";
export function TodoItem({ todo }) {
  return <h3 className={styles.todoitemContainer}>{todo}</h3>;
}
