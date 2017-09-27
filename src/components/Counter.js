import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  render() {
    const { value, handleIncrement, handleDecrement } = this.props

    return (
      <p>
        Clicked: {value} times
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

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired
}

export default Counter
