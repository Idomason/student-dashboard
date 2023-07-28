import { createSlice, payloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import dataValue from '../../../public/data/data.json';

const initialState = {
  value: {
    id: '',
    name: {},
    image: '',
    courses: '',
  },
};

export const data = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchData: (state, action) => {
      return {
        value: {
          id: dataValue.id,
          name: dataValue.name,
          image: dataValue.image,
          courses: dataValue.courses,
        },
      };
    },
  },
});

export const dataSlice = createSlice({
  name: 'newData',
  initialState,
  reducers: {
    // Action to add comment
    data: (state, action) => {
      state.value = [...state.value, action.payload];
    },

    // Special reducer for hydrating the state
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.data,
        };
      },
    },
  },
});

export const { newData } = dataSlice.actions;
export const newDataValue = (state) => state.data.value;
export default dataSlice.reducer;
