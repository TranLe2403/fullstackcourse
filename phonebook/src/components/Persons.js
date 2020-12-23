import React from "react";

const Persons = ({ persons, searchName }) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(searchName.toLowerCase())
        )
        .map((person) => (
          <p key={person.number}>
            {person.name} {person.number}
          </p>
        ))}
    </div>
  );
};

export default Persons;
