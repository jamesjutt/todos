import { useContext } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { TodoContext } from "../../store/TodoContext";
import TodoEditForm from "./TodoEditForm";
const TodoWrapper = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <div className="TodoWrapper">
      <h1>Today&apos;s Todo</h1>
      <TodoForm />
      {todoCtx.todos.map((todo) =>
        todo.isEditing ? (
          <TodoEditForm key={todo.id} todo={todo} />
        ) : (
          <Todo key={todo.id} todo={todo} />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
