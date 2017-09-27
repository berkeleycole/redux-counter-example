import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import counter from './reducers'

const store = createStore(counter)

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
)

render()

store.subscribe(render)
