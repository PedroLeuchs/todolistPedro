/* eslint-disable react/prop-types */
import { useState } from "react";
import TodoForm from "./TodoForm";
import Search from "./search";
import Filter from "./filter";
import icon from "../img/icons/searchIcon.png";
import icon2 from "../img/icons/filterIcon.png";
import icon3 from "../img/icons/newTodoIcon.png";

function Functions({ search, setSearch, filter, setFilter, setSort, addTodo }) {
  const [activeComponent, setActiveComponent] = useState(null);

  // Função para lidar com o clique em um ícone
  const handleIconClick = (component) => {
    if (activeComponent === component) {
      // Se o componente já está ativo, desative-o clicando novamente
      setActiveComponent(null);
    } else {
      // Caso contrário, ative o componente clicado e revele as funções
      setActiveComponent(component);
      // Adicione a classe para aplicar a animação
      document.querySelector(".functions").classList.add("reveal");
    }
  };

  return (
    <div className={`functions ${activeComponent ? "reveal" : ""}`}>
      <div className="iconContainer">
        <div className="circle1">
          <img
            className={`icon ${activeComponent === "search" ? "active" : ""}`}
            src={icon}
            alt="Search"
            onClick={() => handleIconClick("search")}
          />
        </div>
        {activeComponent === "search" && (
          <Search search={search} setSearch={setSearch} />
        )}
        <div className="circle2">
          <img
            className={`icon ${activeComponent === "filter" ? "active" : ""}`}
            src={icon2}
            alt="Filter"
            onClick={() => handleIconClick("filter")}
          />
        </div>
        {activeComponent === "filter" && (
          <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        )}
        <div className="circle3">
          <img
            className={`icon ${activeComponent === "newTodo" ? "active" : ""}`}
            src={icon3}
            alt="New Todo"
            onClick={() => handleIconClick("newTodo")}
          />
        </div>
        {activeComponent === "newTodo" && <TodoForm addTodo={addTodo} />}
      </div>
    </div>
  );
}

export default Functions;
