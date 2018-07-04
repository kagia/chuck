import { connect } from 'react-redux'
import MainPage from './MainPage'
import { changePage } from '../actions'

const mapStateToProps = state => ({ page: state.page })
const mapDispatchToProps = dispatch => ({
  onPageSelect: page => dispatch(changePage(page))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage)
