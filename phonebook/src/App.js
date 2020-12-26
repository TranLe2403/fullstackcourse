import React, { useEffect, useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/notes";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [info, setInfo] = useState({ name: "", number: "" });
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    personService.getAllPersons().then((allPersons) => {
      setPersons(allPersons);
    });
  }, []);

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

    personService.addPerson(nameObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setInfo({ name: "", number: "" });
    });
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
