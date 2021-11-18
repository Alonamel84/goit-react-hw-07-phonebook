import axios from 'axios';
import {
  addContactSuccess,
  addContactRequest,
  addContactError,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
} from './actions';
axios.defaults.baseURL = 'http://localhost:4040';

const fetchContact = () => dispatch => {
  dispatch(fetchContactRequest());
  axios
    .get('./contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)));
};
const addContact =
  ({ name, number, id }) =>
  dispatch => {
    const contact = { name, number, id };
    dispatch(addContactRequest());
    axios
      .post('/contacts', contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error)));
  };
const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

export default { addContact, deleteContact, fetchContact };
