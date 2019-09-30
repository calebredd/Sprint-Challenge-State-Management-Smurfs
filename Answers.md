1. What problem does the context API help solve?

Universal state passing, less props drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions decide what will be reduced. Reducers return copies of states with updates based on information passed in actions. Store is like the database for state. Store is immutable which is what keeps it protected and credible. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state would be better for local changes, example could be mapping through a list. Application state is used more fluidly throughout the site. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Middleware used to help the flow of redux and react work more smoothly.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Context-API because it's simple and straight forward.