import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo, onAddTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value.title, value.description); // Assuming your updateTodo function takes title and description
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    const todoToEdit = todos.find((todo) => todo.id === edit.id);
    return (
      <TodoForm
        edit={edit}
        onSubmit={submitUpdate}
        initialValue={todoToEdit}
        onAddTodo={onAddTodo}
      />
    );
  }

  return todos.map((todo) => (
    <div
      className={todo.completed ? "todo-row complete" : "todo-row"}
      key={todo.id}
    >
      <div onClick={() => completeTodo(todo.id)}>{todo.title}</div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
