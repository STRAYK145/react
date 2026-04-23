import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllList, fetchListPage, setCurrentPage } from './actions/listActions';
import List from './components/list';
import Pagination from './components/pagination';
import AddForm from './components/аddform';

const LIST_PER_PAGE = 4;

const App = () => {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.list);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const totalCount = useSelector((state) => state.totalCount);
  const currentPage = useSelector((state) => state.currentPage);

  const firstListIndex = (currentPage - 1) * LIST_PER_PAGE;

  useEffect(() => {
    dispatch(fetchAllList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchListPage(firstListIndex, LIST_PER_PAGE));
  }, [dispatch, currentPage]);

  const paginate = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const refreshAfterAdd = () => {
    dispatch(fetchAllList());
    dispatch(fetchListPage(firstListIndex, LIST_PER_PAGE));
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '800px' }}>
      {error && <p className="text-danger">Ошибка: {error}</p>}
      <AddForm onAdded={refreshAfterAdd} />
      <List list={list} loading={loading} />
      <Pagination listPerpage={LIST_PER_PAGE} totalList={totalCount} paginate={paginate} />
    </div>
  );
};

export default App;
