import React from "react";

const PersonForm = ({
  addPerson,
  name,
  number,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        Name: <input value={name} onChange={handleNameChange} />
      </div>
      <br />
      <div>
        Number: <input value={number} onChange={handleNumberChange} />
      </div>
      <br />
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PersonForm;
