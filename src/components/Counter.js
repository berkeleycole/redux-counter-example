import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    componentWillMount() {
        const { fetchCount } = this.props

        fetchCount()
    }

  render() {
    const { count, loading, handleIncrement, handleDecrement } = this.props

    const output = loading ? 'Loading...' : "Clicks: " + count

    return (
      <p>
        {output}

        <br />
        {' '}
        <button onClick={handleIncrement}>
          +
        </button>
        {' '}
        <button onClick={handleDecrement}>
          -
        </button>
      </p>
    )
  }
}

// Counter.propTypes = {
//   count: PropTypes.number.isRequired,
//   handleIncrement: PropTypes.func.isRequired,
//   handleDecrement: PropTypes.func.isRequired
// }

export default Counter
