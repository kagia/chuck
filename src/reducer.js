import { combineReducers } from 'redux'

import page from './reducers/page'
import categories from './reducers/categories'
import searchResults from './reducers/searchResults'
import randomQuote from './reducers/randomQuote'

export default combineReducers({
  page,
  categories,
  searchResults,
  randomQuote
})
