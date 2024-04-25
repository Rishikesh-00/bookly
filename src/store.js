import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './Authentication/AuthSlice';
import ProductSlice from './Features/Product/ProductSlice';

export const store = configureStore({
   reducer: {
      Auth: AuthSlice,
      Product:ProductSlice
   }
});
