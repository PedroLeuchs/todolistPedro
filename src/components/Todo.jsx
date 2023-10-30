/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Todo = ({ todo, removeTodo, completeTodo, getBackgroundColor }) => {
  return (
    <div className={`todo ${getBackgroundColor(todo)}`}>
      <div className="content">
        <p className={`numero`}>{todo.id}</p>
        <div className="textos">
          <p className="tarefa">tarefa: {todo.text}</p>
          <p className="categoria">categoria: {todo.category}</p>
        </div>
      </div>
      <div className="options">
        <label className="form-control">
          <input
            onChange={() => completeTodo(todo.id)}
            type="checkbox"
            name="checkbox"
          />
        </label>
        <button
          onClick={() => removeTodo(todo.id)}
          role="button"
          className="delete"
        >
          <div className="x-icon"></div>
          <div className="remove">remover</div>
        </button>
      </div>
    </div>
  );
};

export default Todo;
