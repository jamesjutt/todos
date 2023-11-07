/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { v4 } from "uuid";

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  removeTodo: (id) => {},
  isCompletedTodo: ({ id, isCompleted }) => {},
  editTodo: ({ id, value }) => {},
  isEditingTodo: ({ id, isEditing }) => {},
});

const todoReducer = (state, action) => {
  if (action.type === "ADD_TODO") {
    const updatedTodos = [
      ...state.todos,
      { id: v4(), value: action.todo, isCompleted: false, isEditing: false },
    ];
    return { ...state, todos: updatedTodos };
  }
  if (action.type === "REMOVE_TODO") {
    const todoIndex = state.todos.findIndex((todo) => todo.id === action.id);
    const updatedTodos = [...state.todos];
    updatedTodos.splice(todoIndex, 1);
    return { ...state, todos: updatedTodos };
  }
  if (action.type === "IS_COMPLETED_TODO") {
    const todoIndex = state.todos.findIndex((todo) => todo.id === action.id);
    const updatedTodos = [...state.todos];
    updatedTodos[todoIndex].isCompleted = action.isCompleted;
    return { ...state, todos: updatedTodos };
  }
  if (action.type === "EDIT_TODO") {
    const todoIndex = state.todos.findIndex((todo) => todo.id === action.id);
    const updatedTodos = [...state.todos];
    updatedTodos[todoIndex].value = action.value;
    updatedTodos[todoIndex].isEditing = false;
    return { ...state, todos: updatedTodos };
  }
  if (action.type === "IS_EDITING_TODO") {
    const todoIndex = state.todos.findIndex((todo) => todo.id === action.id);
    const updatedTodos = [...state.todos];
    updatedTodos[todoIndex].isEditing = action.isEditing;
    return { ...state, todos: updatedTodos };
  }
};

export const TodoContextProvider = ({ children }) => {
  const [todos, dispatchTodoAction] = useReducer(todoReducer, { todos: [] });
  const addTodo = (todo) => {
    dispatchTodoAction({ type: "ADD_TODO", todo });
  };
  const removeTodo = (id) => {
    dispatchTodoAction({ type: "REMOVE_TODO", id });
  };
  const isCompletedTodo = ({ id, isCompleted }) => {
    dispatchTodoAction({ type: "IS_COMPLETED_TODO", id, isCompleted });
  };
  const isEditingTodo = ({ id, isEditing }) => {
    dispatchTodoAction({ type: "IS_EDITING_TODO", id, isEditing });
  };
  const editTodo = ({ id, value }) => {
    dispatchTodoAction({ type: "EDIT_TODO", id, value });
  };
  const todoContext = {
    todos: todos.todos,
    addTodo,
    removeTodo,
    isCompletedTodo,
    editTodo,
    isEditingTodo,
  };
  return (
    <TodoContext.Provider value={todoContext}>{children}</TodoContext.Provider>
  );
};
