import axios from 'axios'

const URL = "/api/persons/";

const fetchAll = () => {
  return axios.get(URL)
              .then( (response) => response.data);
}

const addOne = (person) => {
  return axios.post(URL, person)
              .then((response) => response.data);
}

const remove = (id) => {
  return axios.delete(URL + id)
              .then( response => response );
}

const replace = (person, id) => {
  const putURL = URL +id;
  return axios.put(putURL, person)
              .then((response) => response.data)
}

export default {fetchAll, addOne, remove, replace}
