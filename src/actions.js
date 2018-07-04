import fetch from 'cross-fetch'

export function changePage(page) {
  return {
    type: 'CHANGE_PAGE',
    page
  }
}

export function requestRandomQuote() {
  return {
    type: 'REQUEST_RANDOM_QUOTE'
  }
}

export function recieveRandomQuote(quote) {
  return {
    type: 'RECIEVE_RANDOM_QUOTE',
    quote
  }
}

export function requestCategories() {
  return {
    type: 'REQUEST_CATEGORIES'
  }
}

export function recieveCategories(categories) {
  return {
    type: 'RECIEVE_CATEGORIES',
    categories
  }
}

export function requestSearchResults() {
  return {
    type: 'REQUEST_SEARCH_RESULTS'
  }
}

export function recieveSearchResults(quotes) {
  return {
    type: 'RECIEVE_SEARCH_RESULTS',
    quotes
  }
}

export function fetchRandomQuote(category) {
  return function action(dispatch) {
    dispatch(requestRandomQuote())

    const queryString = category ? `?category=${category}` : ''

    return fetch(`https://api.chucknorris.io/jokes/random${queryString}`)
      .then(response => response.json(), error => window.LOG(error))
      .then(quote => {
        dispatch(recieveRandomQuote(quote))
      })
  }
}

export function fetchCategories() {
  return function action(dispatch) {
    dispatch(requestCategories())

    return fetch('https://api.chucknorris.io/jokes/categories')
      .then(response => response.json(), error => window.LOG(error))
      .then(categories => {
        dispatch(recieveCategories(categories))
      })
  }
}

export function fetchSearchResults(term) {
  return function action(dispatch) {
    dispatch(requestSearchResults())

    return fetch(`https://api.chucknorris.io/jokes/search?query=${term}`)
      .then(response => response.json(), error => window.LOG(error))
      .then(quotes => {
        dispatch(recieveSearchResults(quotes.result))
      })
  }
}
