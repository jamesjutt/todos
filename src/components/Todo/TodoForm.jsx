import { useContext, useState } from "react";
import { TodoContext } from "../../store/TodoContext";
import Button from "../UI/Button";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const todoCtx = useContext(TodoContext);

  const handleClick = (event) => {
    event.preventDefault();
    if (todo) {
      todoCtx.addTodo(todo);
      event.target.reset();
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleClick} className="TodoForm">
      <input
        placeholder="Add Todo"
        className="todo-input"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <Button type="submit" text="Add Todo" className="todo-btn-form" />
    </form>
  );
};

export default TodoForm;
