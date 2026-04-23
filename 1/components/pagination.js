import React from 'react'

const Pagination = ({ listPerpage, totalList, paginate }) => {

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalList / listPerpage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button className="page-link" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination