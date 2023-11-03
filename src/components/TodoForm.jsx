/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [selectOpen, setSelectOpen] = useState(false);
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
  const toggleSelect = () => {
    setSelectOpen(!selectOpen);
  };

  return (
    <div className="newTodo">
      <form onSubmit={handleSubmit}>
        <div className="topNewtd">
          <input
            className="inputSearch"
            type="text"
            placeholder="Digite o título da nova tarefa"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </div>
        <div className="bottomNewtd">
          <div
            className={`select-box ${selectOpen ? "open" : ""}`}
            onClick={toggleSelect}
          >
            <label htmlFor="select-box1" className="label select-box1">
              <span className="label-desc">Selecione uma opção para filtrar</span>
            </label>
            <select
              value={category}
              name=""
              id=""
              className="select"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="trabalho">Trabalho</option>
              <option value="estudo">Estudo</option>
              <option value="pessoal">Pessoal</option>
            </select>
          </div>
          <button type="submit">Criar tarefa</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;

