import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { increment, decrement } from '../actions/counter'

const mapStateToProps = (state) => ({
	value: state
})

const mapDispatchToProps = (dispatch) => ({
	handleIncrement: increment,
	handleDecrement: decrement
})

const CounterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter)

export default CounterContainer
