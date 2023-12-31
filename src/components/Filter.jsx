/* eslint-disable react/prop-types */
import { useState } from "react";

const Filter = ({ filter, setFilter, setSort, classListtester }) => {
  const [selectOpen, setSelectOpen] = useState(false);

  const toggleSelect = () => {
    setSelectOpen(!selectOpen);
  };
  const addClass = (classListtester) => {
    if (classListtester === true) {
      return "slideIn2";
    } else {
      return "slideOut2";
    }
  };

  return (
    <div className={`filter ${addClass(classListtester)}`}>
      <div
        className={`select-box ${selectOpen ? "open" : ""}`}
        onClick={toggleSelect}
      >
        <label htmlFor="select-box1" className="label select-box1">
          <span className="label-desc">selecione uma opção para filtrar</span>{" "}
        </label>
        <select
          id="select-box1"
          className="select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">Todas</option>
          <option value="completed">Completas</option>
          <option value="Incomplete">Incompletas</option>
        </select>
      </div>
      <div className="ordem">
        <button onClick={() => setSort("Asc")}>A - Z</button>
        <button onClick={() => setSort("Desc")}>Z - A</button>
      </div>
    </div>
  );
};

export default Filter;
