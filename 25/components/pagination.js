import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPage } from '../actions/listActions'

const Pagination = () => {
  const dispatch = useDispatch()
  const { limit, count, page: currentPage } = useSelector((state) => state)

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(count / limit); i++) {
    pageNumbers.push(i)
  }

  const handlePageChange = (page) => {
    dispatch(setPage(page))
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination