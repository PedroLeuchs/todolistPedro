/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value, category);
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="digite um ditulo"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <select
          value={category}
          name=""
          id=""
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">selecione uma categoria</option>
          <option value="trabalho">trabalho</option>
          <option value="estudo">estudo</option>
          <option value="pessoal">pessoal</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
