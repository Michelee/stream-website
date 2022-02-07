import React from "react";
import { ReactComponent as SearchIcon }  from "../../assets/icons/search-icon.svg";
import style from "./index.module.css";

const SearchInput = ({ handleClick, handleInputChange, inputValue }) => {
  return (
    <div className={style.searchInput}>
      <div className={style.searchInputIcon} onClick={handleClick}><SearchIcon /></div>
      <input type="text" placeholder="Search for query" value={inputValue} onChange={(ev) => handleInputChange(ev.target.value)} />
    </div>
  );
};

export default SearchInput;
