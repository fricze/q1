import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { albumsApi } from './services/albumsApi';

export const store = configureStore({
  reducer: {
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(albumsApi.middleware),
});

setupListeners(store.dispatch);
