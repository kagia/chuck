const initialState = {
  isFetching: false,
  categories: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_CATEGORIES':
      return { isFetching: true, categories: null }

    case 'RECIEVE_CATEGORIES':
      return { isFetching: false, categories: action.categories }

    default:
      return state
  }
}
