import { createAction } from '@reduxjs/toolkit';
// export const addContact = createAction('contactItem/addContact');

export const fetchContactError = createAction('contactItem/fetchContactError');
export const fetchContactSuccess = createAction('contactItem/fetchContactSuccess');
export const fetchContactRequest = createAction('contactItem/fetchContactRequest');
// export const filterContact = createAction('contactItem/filterContact');
export const filterContactError = createAction('contactItem/filterContactError');
export const filterContactSuccess = createAction('contactItem/filterContactSuccess');
export const filterContactRequest = createAction('contactItem/filterContactRequest');

// export const deleteContact = createAction('contactItem/deleteContact');
export const deleteContactSuccess = createAction('contactItem/deleteContactSuccess');
export const deleteContactRequest = createAction('contactItem/deleteContactRequest');
export const deleteContactError = createAction('contactItem/deleteContactError');

export const addContactSuccess = createAction('contactItem/addContactSuccess');
export const addContactRequest = createAction('contactItem/addContactRequest');
export const addContactError = createAction('contactItem/addContactError');

// export default {
//   fetchContactError,
//   fetchContactRequest,
//   fetchContactSuccess,
//   filterContactError,
//   filterContactRequest,
//   filterContactSuccess,
//   deleteContactSuccess,
//   deleteContactRequest,
//   deleteContactError,
//   addContactSuccess,
//   addContactRequest,
//   addContactError,
// };

///------------REDUX VERSION ACTIONS------------------///
// import { FILTERContact, SETContact, REMOVEContact } from './contacts/contacts.vars';
// export const addContact = contact => {
//   return {
//     type: SETContact,
//     payload: contact,
//   };
// };
// export const filterContact = value => {
//   return {
//     type: FILTERContact,
//     payload: value,
//   };
// };
// export const deleteContact = id => {
//   return {
//     type: REMOVEContact,
//     payload: id,
//   };
// };
// export default addContact;
//-------------------------------------------------------------//
