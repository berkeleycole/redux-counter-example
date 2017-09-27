const url = "http://localhost:8080"

export function get() {
	return fetch(url, {
		headers: new Headers({
			'Access-Control-Allow-Origin':'*'
		})
	}).then((resp) => {
		return resp.json()
	})
}

export function increment() {
	return fetch(url, {
		method: 'POST',
		headers: new Headers({
			'Access-Control-Allow-Origin':'*'
		}),
		body: JSON.stringify({
			"action": "INCREMENT"
		})
	}).then((resp) => {
		return resp.json()
	})
}

export function decrement() {
	return fetch(url, {
		method: 'POST',
		headers: new Headers({
			'Access-Control-Allow-Origin':'*'
		}),
		body: JSON.stringify({
			"action": "DECREMENT"
		})
	}).then((resp) => {
		return resp.json()
	})
}
