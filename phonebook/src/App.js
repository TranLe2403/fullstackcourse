import React, { useEffect, useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [info, setInfo] = useState({ name: "", number: "" });
  const [searchName, setSearchName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAllPersons().then((allPersons) => {
      setPersons(allPersons);
    });
  }, []);

  const handleSetMessage = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 3000);
  };

  const updatePhoneNumber = (index) => {
    const personsCopy = [...persons];
    const addConfirm = window.confirm(
      `${personsCopy[index].name} is already added to phonebook, replacethe old number with a new one?`
    );

    if (!addConfirm) return;

    const changedInfo = {
      ...personsCopy[index],
      number: info.number,
    };
    personService
      .updatePersonInfo(personsCopy[index].id, changedInfo)
      .then((response) => {
        setPersons(
          personsCopy.map((person) =>
            person.id !== personsCopy[index].id ? person : response.data
          )
        );
        setInfo({ name: "", number: "" });
        handleSetMessage(
          `${personsCopy[index].name}'s has changed successfully!`
        );
      })
      .catch((_) => {
        handleSetMessage(
          `Information of ${personsCopy[index].name}'s has already been removed from server!`
        );
        setPersons(personsCopy.filter((n) => n.id !== personsCopy[index].id));
      });
  };

  const handleClickAdd = (event) => {
    event.preventDefault();
    const nameObject = {
      name: info.name,
      number: info.number,
    };

    const personsCopy = [...persons];
    const availableNameIndex = personsCopy.findIndex(
      (person) => person.name === nameObject.name
    );

    if (availableNameIndex === -1) {
      personService.addPerson(nameObject).then((returnedPerson) => {
        setPersons(returnedPerson);
        handleSetMessage(`Added ${info.name}`);
        setInfo({ name: "", number: "" });
      });

      return;
    }

    updatePhoneNumber(availableNameIndex);
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

  const deletePersonHandler = (id) => {
    const findPersonIndex = persons.findIndex((person) => person.id === id);
    const deleteConfirm = window.confirm(
      `Delete ${persons[findPersonIndex].name}?`
    );
    if (!deleteConfirm) return;
    personService.deletePerson(id).then(() => {
      const copyPersons = [...persons];
      copyPersons.splice(findPersonIndex, 1);
      setPersons(copyPersons);
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter searchName={searchName} handleSearchChange={handleSearchChange} />
      <h3>Add a new</h3>
      <PersonForm
        handleClickAdd={handleClickAdd}
        name={info.name}
        number={info.number}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        searchName={searchName}
        deletePersonHandler={deletePersonHandler}
      />
    </div>
  );
};

export default App;
