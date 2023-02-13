import { configureStore } from '@reduxjs/toolkit';
import { persistStore} from 'redux-persist';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice.js';

const persistSet ={
  key: 'root',
  storage: storage,
};

const persistContactsReducer = persistReducer(persistSet, contactsReducer);


export const store = configureStore({
  reducer: {
    contact: persistContactsReducer,
    filter: filtersReducer,
  },
  middleware: defaultMiddleware => defaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);