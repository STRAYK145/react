import { SET_LIST, SET_LOADING, SET_TOTAL, SET_PAGE } from '../actions/actionTypes';

const initialState = {
  list: [],
  loading: false,
  totalList: 0,
  currentPage: 1,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      return { ...state, list: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_TOTAL:
      return { ...state, totalList: action.payload };
    case SET_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default listReducer;