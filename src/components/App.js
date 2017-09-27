import React, { Component } from 'react'
import Counter from '../containers/counter'

class App extends Component {
	render() {
		return (
			<div>
				<h1>Counter App</h1>
				<Counter />
			</div>
		)
	}
}

export default App
