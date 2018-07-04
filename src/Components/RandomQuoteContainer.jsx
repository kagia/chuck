import { connect } from 'react-redux'
import RandomQuote from './RandomQuote'

const mapStateToProps = state => ({ randomQuote: state.randomQuote })

export default connect(mapStateToProps)(RandomQuote)
