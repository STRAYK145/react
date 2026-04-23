const initialState = {
    list: [],
    totalCount: 0,
    loading: false,
    error: null,
    currentPage: 1,
};

const listReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_LIST_SUCCESS':
            return { ...state, list: action.payload, error: null };

        case 'FETCH_LIST_ERROR':
            return { ...state, list: [], error: action.payload };

        case 'SET_TOTAL_COUNT':
            return { ...state, totalCount: action.payload };

        case 'SET_LOADING':
            return { ...state, loading: action.payload };

        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.payload };

        default:
            return state;
    }
};

export default listReducers;