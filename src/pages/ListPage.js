import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "../components/list";
import Pagination from "../components/pagination";
import AddForm from "../components/аddform";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function ListPage() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [listPerpage] = useState(4);
  const [totalList, setTotalList] = useState(0);

  const lastListIndex = currentPage * listPerpage;
  const firstListIndex = lastListIndex - listPerpage;

  const paginate = (pageNamber) => {
    setCurrentPage(pageNamber);
  };

  const loadCount = async () => {
    try {
      const data = await axios.get("http://localhost:8080/list/all");
      setTotalList(data.data.count);
    } catch (error) {
      console.log(error);
    }
  };

  const loadList = async () => {
    setLoading(true);

    try {
      const data = await axios.get(
        `http://localhost:8080/list/lim?offset=${firstListIndex}&limit=${listPerpage}`
      );
      setList(data.data.list);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // всегда после завершения
    }
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
    <div className="container">
      <Navbar />

      <main className="container flex-grow-1 mt-4">
        <h1 className="text-center mb-4">Список товаров</h1>

        <p className="text-center fs-5">
          аываываыавыаы.
        </p>

        <div className="container mt-4" style={{ maxWidth: "800px" }}>
          <List list={list} loading={loading} />
          <Pagination
            listPerpage={listPerpage}
            totalList={totalList}
            paginate={paginate}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ListPage;