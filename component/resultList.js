import React, { useState } from "react";

const ResultList = ({ data }) => {
  const [search, setSearch] = useState('');

  const filter = (e) => {
    const keyword = e.target.value;

    setSearch(keyword);
  };
  const results = data.filter((resultItem) => {
    return resultItem.name.toLowerCase().startsWith(search.toLowerCase());
    // Use the toLowerCase() method to make it case-insensitive
  });
  return (
    <div>
      <input
        type="search"
        value={search}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {results.length > 0 ? (
          results.map((item) => (
            <li key={item.id} className="user">
              <span className="">{item.name}</span>
              <span className="">{item.important}</span>
              <span className="">{item.score}</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  )
}

export default ResultList