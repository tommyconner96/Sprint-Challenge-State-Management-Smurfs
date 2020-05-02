1. What problem does the context API help solve?
It helps avoid props drilling, making data easier to use and reference in different parts of the app
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions: payloads of information that send data to the store through dispatch()
reducers: reducers take the previous state and an action and determine the next state. the actions are imported into the reducer.
store: store holds the state for a redux app in a immutable object tree.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global, shared across the whole App and Component state lives just in the specific component and can only be passed down through props.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk lets you interact with actions dispatched to the store before they reach the reducer. it can be used for asynch requests among other things like logging.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
I like the simplicity of Context API for smaller apps, but overall I think my favorite is Redux. Once you get it set up, it's very powerful and it makes more sense and is less indimitading every day.