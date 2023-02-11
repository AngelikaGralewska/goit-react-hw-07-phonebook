import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload
      //.toLowerCase();
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
///export const getFilter = state => state.filter;