import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [info, setInfo] = useState({ name: "", number: "" });
  const [searchName, setSearchName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const nameObject = {
      name: info.name,
      number: info.number,
    };
    const personsCopy = [...persons];
    const availableNameIndex = personsCopy.findIndex(
      (person) => person.name === nameObject.name
    );

    if (availableNameIndex > -1) {
      window.alert(`${nameObject.name} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat(nameObject));
    setInfo({ name: "", number: "" });
  };

  const handleNumberChange = (event) => {
    setInfo({ ...info, number: event.target.value });
  };

  const handleNameChange = (event) => {
    setInfo({ ...info, name: event.target.value });
  };

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearchChange={handleSearchChange} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        name={info.name}
        number={info.number}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} searchName={searchName} />
    </div>
  );
};

export default App;
