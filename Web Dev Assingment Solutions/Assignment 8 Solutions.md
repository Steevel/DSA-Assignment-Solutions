# Assignment 8

## Q.1  Whats React and its pros and cons?

- React is an open-source front-end JavaScript library that is used for building user interfaces [with components], especially for single-page applications.

- Pros:
    1. **Easy to Learn and Use:** ReactJS is much easier to learn and use. It comes with a good supply of documentation, tutorials, and training resources
    2. **Component based Architecture:** A ReactJS web application is made up of multiple components, and each component has its own logic and controls. These components are responsible for outputting a small, reusable piece of HTML code
    3. **Virtual DOM and Performance Optimization:** React utilizes a Virtual DOM, which enables efficient updates to the actual DOM, resulting in improved performance.
    4. **Creating Dynamic Web Applications Becomes Easier**: Less coding is necessary compared to regular JS applications inorder to create dynamic web applications
- Cons:  
    1. **The high pace of development**: It may become hard to adopt all the changes with all the continuous updates
    2. **Not a full-featured framework**: React is not a full-featured framework. For large enterprise applications lot of third party libraries are required
    3. **Problems with SEO**: Google used to have problems with indexing websites that were rendered on the client-side.

## Q.2 What do you understand by Virtual Dom?

- It is a programming concept where a “virtual" representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation
- The Virtual DOM works in three simple steps.
    1. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM.
    2. Then the difference between the previous DOM representation and the new one is calculated.
    3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

## Q.3 Difference between Virtual Dom vs Real Dom

Below are the main differences between Real DOM and Virtual DOM,

|Real dom| Virtual dom|
| ------ | ----- |
| Updates are slow                     | Updates are fast                     |
| DOM manipulation is very expensive.  | DOM manipulation is very easy        |
| You can update HTML directly.        | You Can’t directly update HTML       |
| It causes too much of memory wastage | There is no memory wastage           |
| Creates a new DOM if element updates | It updates the JSX if element update |

## Q.4 Whats component? Types of component

- Components are independent and reusable bits of code. They are similar to JavaScript functions, but work in isolation and return HTML. There are two types of components
    1. Functional components
    2. Class components

## Q.5 Difference between class & function based component

|Class Component | Functional Component|
|---- | ---- |
|Extend from React.Component| Doesn’t extend from React.Component|
|Known as stateful components| Known as stateless components|
|Can respond to lifecycle events| Doesn’t respond to lifecycle events |
|Maintain state information|Don’t maintain state information|
|Support props|Will accept any type of data (props)|
|Constructor are used as it needs to store state| Constructors are not used |
|Require a render function that returns React element (JSX)|There is no render method used in functional components.|

## Q.6 Explain react component life cycle

- Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are:
- Mounting which deals with adding elements into the DOM. componentDidMount() method is invoked immediately after the component is rendered to the DOM
- Updating where a component is updated. componentDidUpdate() method is invoked after the component is re-rendered with new props or state.
- Unmounting where a component is removed from the DOM, or unmounting. componentWillUnmount() method is called right before the component is removed from the DOM

## Q.7 Explain Prop Drilling in React & Ways to avoid it

- It is the process by which you pass data from one component of the React Component tree to another by passing it through multiple other components that do not need the data but only help in passing it around.
- We can avoid it by using Context API or Redux or other state management libraries that provide a centralised store that can be accessed by any component in the application, eliminating the need for prop drilling.
- HOCs can be used to wrap components and inject the required props

## Q.8 Create a Counter Web App using React

- [Github repo link](https://github.com/Steevel/DSA-Assignment-Solutions/tree/master/Web%20Dev%20Assingment%20Solutions/Projects/Assignment%208%20-%20Question%208)

## Q.9  Develop a GitHub User Finder web application using React The application should allow users to enter a GitHub username and display relevant information about the user

-

## Q.10  Develop a simple website using React, fetch and display products from the "<https://fakestoreapi.com/products>" API

- [Github repo link](https://github.com/Steevel/DSA-Assignment-Solutions/tree/master/Web%20Dev%20Assingment%20Solutions/Projects/Assignment%208%20-%20Question%2010)
