import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'tours',
  initialState: {
    list: [],
    loading: false,
    totalList: 0,
    currentPage: 1,
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setTotal: (state, action) => {
      state.totalList = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setList, setLoading, setTotal, setPage } = listSlice.actions;
export default listSlice.reducer;