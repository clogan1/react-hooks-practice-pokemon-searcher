import React from "react";

function Search({setSearch}) {

  function handleSearch(e){
    setSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input type="text" className="prompt" name="searchField" onChange={handleSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
