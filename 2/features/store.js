import { configureStore } from '@reduxjs/toolkit';
import listReducer from './listSlice';

const store = configureStore({
  reducer: {
    tours: listReducer,
  },
});

export default store;