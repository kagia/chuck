import { connect } from 'react-redux'
import SearchResults from './SearchResults'

const mapStateToProps = state => ({ searchResults: state.searchResults })

export default connect(mapStateToProps)(SearchResults)
