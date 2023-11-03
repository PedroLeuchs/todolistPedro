/* eslint-disable react/prop-types */
import { useState } from "react";
import TodoForm from "./TodoForm";
import Search from "./Search";
import Filter from "./Filter";
import icon from "../img/icons/searchIcon.png";
import icon2 from "../img/icons/filterIcon.png";
import icon3 from "../img/icons/newTodoIcon.png";

function Functions({ search, setSearch, filter, setFilter, setSort, addTodo }) {
  const [activeComponent, setActiveComponent] = useState(null);
  const [classListtester, setClassList] = useState(false);

  // Função para lidar com o clique em um ícone
  const handleIconClick = (component) => {
    setActiveComponent(
      (prevComponent) => (prevComponent === component ? null : component),
      setClassList((setClassListPar) =>
        setClassListPar === classListtester ? true : false
      )
    );
  };

  return (
    <div className="functions">
      <div className="iconContainer">
        <div
          className={`circle1 ${activeComponent === "search" ? "active" : ""}`}
          onClick={() => handleIconClick("search")}
        >
          <img
            className={`icon ${activeComponent === "search" ? "active" : ""}`}
            src={icon}
            alt="Search"
          />
        </div>
        {activeComponent === "search" ? (
          <Search
            search={search}
            setSearch={setSearch}
            classListtester={classListtester}
          />
        ) : (
          <Search />
        )}
        <div
          className={`circle2 ${activeComponent === "filter" ? "active" : ""}`}
          onClick={() => handleIconClick("filter")}
        >
          <img
            className={`icon ${activeComponent === "filter" ? "active" : ""}`}
            src={icon2}
            alt="Filter"
          />
        </div>
        {activeComponent === "filter" ? (
          <Filter
            filter={filter}
            setFilter={setFilter}
            setSort={setSort}
            classListtester={classListtester}
          />
        ) : (
          <Filter />
        )}
        <div
          className={`circle3 ${activeComponent === "newTodo" ? "active" : ""}`}
          onClick={() => handleIconClick("newTodo")}
        >
          <img
            className={`icon ${activeComponent === "newTodo" ? "active" : ""}`}
            src={icon3}
            alt="New Todo"
          />
        </div>
        {activeComponent === "newTodo" ? (
          <TodoForm addTodo={addTodo} classListtester={classListtester} />
        ) : (
          <TodoForm />
        )}
      </div>
    </div>
  );
}

export default Functions;
