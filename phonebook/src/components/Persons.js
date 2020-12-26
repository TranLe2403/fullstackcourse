import React from "react";

const Persons = ({ persons, searchName, deletePersonHandler }) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(searchName.toLowerCase())
        )
        .map((person) => (
          <p key={person.number}>
            {person.name} {person.number}
            <button onClick={() => deletePersonHandler(person.id)}>
              Delete
            </button>
          </p>
        ))}
    </div>
  );
};

export default Persons;
