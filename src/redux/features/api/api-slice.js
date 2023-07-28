import dataAPI from '../../../../public/data/data.json';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const apiSlice = createSlice({
  name: 'apiData',
  initialState,

  reducers: {
    fetchData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { fetchData } = apiSlice.actions;
export default apiSlice.reducer;

export function getAPIData() {
  return async function getAPIDataThunk(dispatch, getState) {
    // const data = await fetch('');
    // const result = await data.json();
    // dispatch(fetchData(result));
    // dispatch(fetchData(dataAPI));
  };
}
