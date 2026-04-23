import axios from 'axios';

export const fetchListSuccess = (list) => ({
    type: 'FETCH_LIST_SUCCESS',
    payload: list,
});

export const fetchListError = (error) => ({
    type: 'FETCH_LIST_ERROR',
    payload: error,
});

export const setTotalCount = (count) => ({
    type: 'SET_TOTAL_COUNT',
    payload: count,
});

export const setLoading = (loading) => ({
    type: 'SET_LOADING',
    payload: loading,
});

export const setCurrentPage = (page) => ({
    type: 'SET_CURRENT_PAGE',
    payload: page,
});

// Thunk: загрузка всего списка (для подсчёта количества)
export const fetchAllList = () => {
    return (dispatch) => {
        axios
            .get('http://localhost:8080/list/all')
            .then((response) => {
                const count = response.data.list ? response.data.list.length : 0;
                dispatch(setTotalCount(count));
            })
            .catch((error) => {
                dispatch(fetchListError(error.message));
            });
    };
};

// Thunk: загрузка страницы списка
export const fetchListPage = (offset, limit) => {
    return (dispatch) => {
        dispatch(setLoading(true));
        axios
            .get(`http://localhost:8080/list/lim?offset=${offset}&limit=${limit}`)
            .then((response) => {
                dispatch(fetchListSuccess(response.data.list));
                dispatch(setLoading(false));
            })
            .catch((error) => {
                dispatch(fetchListError(error.message));
                dispatch(setLoading(false));
            });
    };
};

// Thunk: добавление нового элемента
export const addListItem = (formData, onSuccess) => {
    return (dispatch) => {
        axios
            .post('http://localhost:8080/list/add', formData)
            .then(() => {
                if (onSuccess) onSuccess();
            })
            .catch((error) => {
                dispatch(fetchListError(error.message));
            });
    };
};