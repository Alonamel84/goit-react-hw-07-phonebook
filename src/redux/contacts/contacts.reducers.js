import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  filterContactError,
  filterContactRequest,
  filterContactSuccess,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  addContactSuccess,
  addContactRequest,
  addContactError,
} from './actions';

const filterReducer = createReducer('', {
  [filterContactSuccess]: (state, { payload }) => payload,
});
const itemsReducer = createReducer([], {
  [addContactSuccess]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContactSuccess]: (state, { payload }) => state.filter(item => item.id !== payload),
});

const loading = createReducer(false, {
  [deleteContactSuccess]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactError]: () => true,
  [addContactSuccess]: () => false,
  [addContactRequest]: () => true,
  [addContactError]: () => true,
  [filterContactSuccess]: () => false,
  [filterContactRequest]: () => true,
  [filterContactError]: () => true,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
