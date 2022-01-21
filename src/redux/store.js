// Imports from Redux Toolkit
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// Imports of middleware
import logger from 'redux-logger';
// Imports of reducers
import { phonebookReducer } from './contacts-reducers';

const middleware = [...getDefaultMiddleware(), logger];

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
  middleware,
  customizedMiddleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export { store };