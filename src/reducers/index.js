import {
    COUNT_INCREMENT_REQUEST,
    COUNT_DECREMENT_REQUEST,
    COUNT_RECIEVE_SUCCESS,
    COUNT_FETCH_REQUEST
} from '../actions/counter'

const defaultState = {
    count: 0,
    loading: true
}

const counter = (state = defaultState, action) => {
  switch (action.type) {
    case COUNT_FETCH_REQUEST:
        return Object.assign({}, state, {
            loading: true
        })

    case COUNT_RECIEVE_SUCCESS:
        return Object.assign({}, state, {
            count: action.count,
            loading: false
        })

    case COUNT_INCREMENT_REQUEST:
        return Object.assign({}, state, {
            loading: true
        })

    case COUNT_DECREMENT_REQUEST:
        return Object.assign({}, state, {
            loading: true
        })

    default:
        return state

  }
}

 export default counter
