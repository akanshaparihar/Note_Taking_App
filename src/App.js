import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = (inputTitle, inputDescription) => {
    setTodoList((prevTodoList) => {
      return [
        ...prevTodoList,
        {
          title: inputTitle,
          description: inputDescription,
          id: Math.random().toString(),
          completed: false,
        },
      ];
    });
  };

  const completeTodo = (todoId) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) =>
        todo.id === todoId ? { ...todo, completed: true } : todo
      );
    });
  };
  const updateTodo = (todoId, newTitle, newDescription) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) =>
        todo.id === todoId
          ? { ...todo, title: newTitle, description: newDescription }
          : todo
      );
    });
  };
  const removeTodo = (todoId) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== todoId)
    );
  };






  return (
    <div className="todo-app">
      <TodoForm onAddTodo={addTodoHandler} />
      <TodoList todos={todoList} />
      <Todo
        todos={todoList}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        onAddTodo={addTodoHandler}
      />
    </div>
  );
}
export default App;
