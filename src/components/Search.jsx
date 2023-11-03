/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import "../styles/input.css";
const Search = ({ search, setSearch, classListtester }) => {
  const addClass = (classListtester) => {
    if (classListtester === true) {
      return "slideIn";
    } else {
      return "slideOut";
    }
  };

  return (
    <div className={`search ${addClass(classListtester)}`}>
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
