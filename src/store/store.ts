import { getTtnApi } from './apiQuery/getTtnInfoQuery';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import { mainSliceReducer } from './slices/mainSlice';
import { getOfficesApi } from './apiQuery/getOfficesQuery';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const reducers = combineReducers({
  slice: persistReducer(persistConfig, mainSliceReducer),
  [getTtnApi.reducerPath]: getTtnApi.reducer,
  [getOfficesApi.reducerPath]: getOfficesApi.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(getTtnApi.middleware, getOfficesApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;
export type TypeRootState = ReturnType<typeof store.getState>;
