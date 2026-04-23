import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import listReducer from './reducers/listReducer'
import listSaga from './sagas/listSaga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(listReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(listSaga)

export default store