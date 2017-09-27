# About Redux actions


...From the Redux documentation (http://redux.js.org/docs/basics/Actions.html)

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().

Here's an example action which represents adding a new todo item:

const ADD_TODO = 'ADD_TODO'

{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}

---------------------------------------------------------------------------------------------------------

Actions are javascript objects must contain a "type" key and value, there is also an optional payload value that can be added, to transport necessary data. Notice the ADD_TODO action above that contains both.

Types should typically be defined as string constants. -- See the example actions/counter.js file for an example of this.

Once your app is large enough, you may want to move your actions into a separate module.

Actions are created by pure functions -- conveniently called action creators.

## Action Creators

Action creators are exactly that -- functions that create actions. It's easy to conflate the terms “action” and “action creator,” so do your best to use the proper term.

In Redux, action creators simply return an action:

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

This makes actions portable and easy to test.

## Using Actions

But how do we use these actions?
How will they be sent to the reducer to create the necessary changes in the store?

To actually initiate a dispatch, pass the result to the dispatch() function. Which may look like this:

dispatch(addTodo(text))
