const initialState = {
  isFetching: false,
  quotes: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_SEARCH_RESULTS':
      return { isFetching: true, quotes: null }

    case 'RECIEVE_SEARCH_RESULTS':
      return { isFetching: false, quotes: action.quotes }

    default:
      return state
  }
}
