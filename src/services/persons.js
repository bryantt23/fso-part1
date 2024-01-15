import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/persons';

export const getAll = () => {
  return axios.get(baseUrl);
};

export const create = newObject => {
  return axios.post(baseUrl, newObject);
};

export const deletePerson = id => {
  return axios.delete(`${baseUrl}/${id}`);
};

export const updatePerson = (id, updatedObject) => {
  return axios.put(`${baseUrl}/${id}`, updatedObject);
};
