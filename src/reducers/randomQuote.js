const initialState = {
  isFetching: false,
  quote: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_RANDOM_QUOTE':
      return { isFetching: true, quote: null }

    case 'RECIEVE_RANDOM_QUOTE':
      return { isFetching: false, quote: action.quote }

    default:
      return state
  }
}
