import { SET_LIST, SET_LOADING, SET_TOTAL, SET_PAGE } from './actionTypes';

export const setList = (list) => ({
  type: SET_LIST,
  payload: list,
});

export const setLoading = (bool) => ({
  type: SET_LOADING,
  payload: bool,
});

export const setTotal = (count) => ({
  type: SET_TOTAL,
  payload: count,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});