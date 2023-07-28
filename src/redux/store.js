import { configureStore } from '@reduxjs/toolkit';
// import { dataSlice } from './features/data/data-slice';
import apiSlice from './features/api/api-slice';

const store = configureStore({
  reducer: {
    apiData: apiSlice,
    // data: dataSlice,
  },
});

export default store;
