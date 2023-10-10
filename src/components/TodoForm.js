import React, { useState } from "react";

function TodoForm(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setInputDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputTitle.trim().length === 0 || inputDescription.trim().length === 0)
      return;
    props.onAddTodo(inputTitle, inputDescription);
    setInputTitle("");
    setInputDescription("");
  };

  return (
    <div>
      
      <h1>What's the Plan for Today?</h1>
      <form className="todo-form" onSubmit={submitHandler}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Add a todo"
          value={inputTitle}
          name="text"
          className="todo-input"
          onChange={titleChangeHandler}
        />
        <label>Description</label>
        <input
          type="text"
          placeholder="Add description"
          value={inputDescription}
          name="text"
          className="todo-input"
          onChange={descriptionChangeHandler}
        />
        <button className="todo-button">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
