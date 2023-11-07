import { useContext, useState } from "react";
import { TodoContext } from "../../store/TodoContext";
import Button from "../UI/Button";

/* eslint-disable react/prop-types */
const TodoEditForm = ({ todo }) => {
  const [value, setValue] = useState(todo.todo);
  const todoCtx = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue(value);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        onChange={(event) => setValue(event.target.value)}
        className="todo-input"
        placeholder={todo.value}
      />
      <Button
        type="submit"
        text="Update"
        className="todo-btn-form"
        onClick={() => todoCtx.editTodo({ id: todo.id, value })}
      />
    </form>
  );
};

export default TodoEditForm;
