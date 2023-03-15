import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // checkStatus: (state) => {
    //   const newState = { ...state };
    //   newState.status = 'Under Construction';
    //   return newState;
    // },
    checkStatus: ({ ...state }) => ({
      ...state,
      status: 'Under Construction',
    }),
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
