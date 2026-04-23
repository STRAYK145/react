import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import List from "./components/list";
import Pagination from "./components/pagination";
import AddForm from "./components/аddform";
import { setList, setLoading, setTotal, setPage } from "./features/listSlice";

function App() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.tours.list);
  const loading = useSelector((state) => state.tours.loading);
  const currentPage = useSelector((state) => state.tours.currentPage);
  const totalList = useSelector((state) => state.tours.totalList);

  const listPerpage = 4;
  const lastListIndex = currentPage * listPerpage;
  const firstListIndex = lastListIndex - listPerpage;

  const paginate = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };

  const loadCount = async () => {
    try {
      const data = await axios.get("http://localhost:8080/list/all");
      dispatch(setTotal(data.data.count));
    } catch (error) {
      console.log(error);
    }
  };

  const loadList = async () => {
    dispatch(setLoading(true));
    try {
      const data = await axios.get(
        `http://localhost:8080/list/lim?offset=${firstListIndex}&limit=${listPerpage}`
      );
      dispatch(setList(data.data.list));
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    loadCount();
  }, []);

  useEffect(() => {
    loadList();
  }, [currentPage]);

  const refreshAfterAdd = () => {
    loadCount();
    loadList();
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "800px" }}>
      <AddForm onAdded={refreshAfterAdd} />
      <List list={list} loading={loading} />
      <Pagination
        listPerpage={listPerpage}
        totalList={totalList}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
