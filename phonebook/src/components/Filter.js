import React from "react";

const Filter = ({ searchName, handleSearchChange }) => (
  <div>
    Filter shown with:{" "}
    <input value={searchName} onChange={handleSearchChange} />
  </div>
);

export default Filter;
