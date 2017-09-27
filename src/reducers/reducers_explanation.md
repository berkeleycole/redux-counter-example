# About Redux Reducers

From the Redux documentation: (http://redux.js.org/docs/basics/Reducers.html)

Redux Actions describe the fact that something happened, but don't specify how the application's state should change in response. This is the job of reducers.

A reducer is a pure function that takes the previous state and an action, and returns the next state. Reducers are the only pieces in Redux that are allowed to change the store.

It's called a reducer because it's the type of function you would pass to:
Array.prototype.reduce(reducer, ?initialValue)

It's very important that the reducer stays pure. This means, that given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.

## Things You Should Never Do in a Reducer

1. Mutate its arguments
2. Perform side effects like API calls and routing transitions
3. Call non-pure functions, e.g. Date.now() or Math.random().

## Switch Statements

You will often see Reducers written as javascript switch statements. A basic explanation of switch statements can be found here (https://www.w3schools.com/js/js_switch.asp).

This is a typical reducer structure and syntax:

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    default:
      return state
  }
}

In this example, each case of the switch statement corresponds to a particular action TYPE. When the action is dispatched, it will be matched with the case, and the state change will be carried out.
