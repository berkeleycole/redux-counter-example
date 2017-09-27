export const COUNT_INCREMENT_REQUEST = 'COUNT_INCREMENT_REQUEST'

export function countIncrementRequest() {
	return {
		type: COUNT_INCREMENT_REQUEST
	}
}

export const COUNT_DECREMENT_REQUEST = 'COUNT_DECREMENT_REQUEST'

export function countDecrementRequest() {
	return {
		type: COUNT_DECREMENT_REQUEST
	}
}

export const COUNT_FETCH_REQUEST = 'COUNT_FETCH_REQUEST'

export function countFetchRequest() {
	return {
		type: COUNT_FETCH_REQUEST
	}
}

export const COUNT_RECIEVE_SUCCESS = 'COUNT_RECIEVE_SUCCESS'

export function countRecieveSuccess(payload) {
	return {
		type: COUNT_RECIEVE_SUCCESS,
		count: payload.count
	}
}
