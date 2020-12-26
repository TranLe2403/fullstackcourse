import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAllPersons = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const addPerson = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const updatePersonInfo = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

const exports = {
  getAllPersons,
  addPerson,
  deletePerson,
  updatePersonInfo,
};

export default exports;
