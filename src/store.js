import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'
import { fetchRandomQuote, fetchCategories } from './actions'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware)
)

store.dispatch(fetchRandomQuote())
store.dispatch(fetchCategories())

export default store
