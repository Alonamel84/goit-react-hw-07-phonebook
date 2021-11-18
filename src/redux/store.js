import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts.reducers';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});
const store = configureStore({ reducer: rootReducer });
export default store;
