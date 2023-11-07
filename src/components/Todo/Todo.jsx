/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TodoContext } from "../../store/TodoContext";
import {
  faCheck,
  faPenToSquare,
  faXmark,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable no-unused-vars */
const Todo = ({ todo }) => {
  const todoCtx = useContext(TodoContext);
  return (
    <div className="Todo">
      <p
        className={
          todo.isCompleted ? "single-todo completed" : "single-todo incompleted"
        }
        onClick={() =>
          todoCtx.isCompletedTodo({
            id: todo.id,
            isCompleted: todo.isCompleted ? false : true,
          })
        }
      >
        {todo.value}
      </p>
      <div className="icons">
        {todo.isCompleted ? (
          <FontAwesomeIcon className="completed-icon" icon={faCheck} />
        ) : (
          <FontAwesomeIcon className="incompleted-icon" icon={faXmark} />
        )}
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() =>
            todoCtx.isEditingTodo({ id: todo.id, isEditing: true })
          }
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => todoCtx.removeTodo(todo.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
