import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { countFetchRequest, countIncrementRequest, countDecrementRequest } from '../actions/counter'

const mapStateToProps = (state) => ({
	count: state.count,
	loading: state.loading
})

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCount: () => {
			dispatch(countFetchRequest())
		},
		handleIncrement: () => {
			dispatch(countIncrementRequest())
		},
		handleDecrement: () => {
			dispatch(countDecrementRequest())
		}
	}
}

const CounterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter)

export default CounterContainer
