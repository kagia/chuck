import { connect } from 'react-redux'
import Categories from './Categories'
import { fetchRandomQuote } from '../actions'

const mapStateToProps = state => ({ categories: state.categories.categories })
const mapDispatchToProps = dispatch => ({
  onCategorySelect: category => dispatch(fetchRandomQuote(category))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)
