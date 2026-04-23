import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchListRequest } from './actions/listActions'
import List from './components/list'
import Pagination from './components/pagination'
import AddForm from './components/аddform'

const App = () => {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page)
  const error = useSelector((state) => state.error)

  useEffect(() => {
    dispatch({ type: 'FETCH_COUNT_REQUEST' })
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchListRequest())
  }, [dispatch, page])

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">Ошибка: {error}</div>
      </div>
    )
  }

  return (
    <div className="container mt-4" style={{ maxWidth: '800px' }}>
      <AddForm />
      <List />
      <Pagination />
    </div>
  )
}

export default App