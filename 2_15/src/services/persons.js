import axios from 'axios'

const URL = "http://localhost:3001/persons";

const fetchAll = () => {
  return axios.get(URL)
              .then( (response) => response.data);
}

const addOne = (person) => {
  return axios.post(URL, person)
              .then((response) => response.data);
}

export default {fetchAll, addOne}
