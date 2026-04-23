export const fetchListRequest = (state) => ({
  type: 'FETCH_LIST_REQUEST',
  payload: state,
})

export const fetchListSuccess = (list) => ({
  type: 'FETCH_LIST_SUCCESS',
  payload: { list },
})

export const fetchListFailure = (error) => ({
  type: 'FETCH_LIST_FAILURE',
  payload: { error },
})

export const setPage = (page) => ({
  type: 'SET_PAGE',
  payload: { page },
})

export const setCount = (count) => ({
  type: 'SET_COUNT',
  payload: { count },
})

export const addItem = (formData) => ({
  type: 'ADD_ITEM_REQUEST',
  payload: { formData },
})

export const fetchAddFailure = (error) => ({
  type: 'FETCH_ADD_FAILURE',
  payload: { error },
})