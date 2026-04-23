const initialState = {
  list: [],
  page: 1,
  loading: false,
  error: null,
  limit: 4,
  count: 0,
}

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LIST_REQUEST':
      return { ...state, loading: true, error: null }
    case 'FETCH_LIST_SUCCESS':
      return { ...state, loading: false, list: action.payload.list }
    case 'FETCH_LIST_FAILURE':
      return { ...state, loading: false, error: action.payload.error }
    case 'SET_PAGE':
      return { ...state, page: action.payload.page }
    case 'SET_COUNT':
      return { ...state, count: action.payload.count }
    case 'ADD_ITEM_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_ADD_FAILURE':
      return { ...state, loading: false, error: action.payload.error }
    default:
      return state
  }
}

export default listReducer