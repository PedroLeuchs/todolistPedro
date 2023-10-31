/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import "../styles/input.css";
const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
        <input
          className="inputSearch"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="&nbsp;"
        />
    </div>
  );
};

export default Search;
