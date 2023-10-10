import React from 'react'


const TodoList=(props) =>{
    
  return (
        <ul>
            {props.todos.map((todo)=> (
            <li key={todo.id}>
                {todo.title}{todo.description}
            </li>))}
        </ul> 
  );
};

export default TodoList