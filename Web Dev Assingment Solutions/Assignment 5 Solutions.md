# Assignment 5

## Q.1 What’s difference between Synchronous and Asynchronous?

- Synchronous: In synchronous programming, code is executed in a sequential and blocking manner. Each operation is performed one after another, and the program waits for each operation to complete before moving on to the next one. In other words, the program "blocks" and waits for each operation to finish before proceeding to the next line of code
- Asynchronous: Asynchronous: In asynchronous programming, code is executed in a non-blocking manner. Instead of waiting for each operation to complete, the program initiates an operation and moves on to the next line of code without waiting for the result. When the operation completes or an event occurs, a callback function or a promise is used to handle the result or event. This allows the program to continue executing other tasks while waiting for the asynchronous operation to finish.

## Q.2 What are Web Apis ?

- Web APIs provide a standardized way for web developers to access and manipulate web resources, perform actions, retrieve data, and integrate with external services. They allow developers to build dynamic and interactive web applications by accessing and leveraging functionalities provided by the browser or server.

## Q.3 Explain SetTimeOut and setInterval ?

- setTimeout: The setTimeout function is used to execute a function or a code block after a specified delay (in milliseconds). It takes two arguments: a callback function to execute and the delay in milliseconds.

```javascript
setTimeout(function() {
  console.log("Delayed task");
}, 2000);
```

- setInterval: The setInterval function is used to repeatedly execute a function or a code block at a fixed interval. It takes two arguments: a callback function to execute and the interval duration in milliseconds.

```javascript
setInterval(() => {
  console.log("Print this after every 2 seconds");
}, 2000);
```

## Q.4 how can you handle Async code in JavaScript ?

1. Callbacks: Callbacks are a traditional way to handle asynchronous code in JavaScript. You can pass a function (callback) as an argument to an asynchronous function, and the callback is invoked once the asynchronous operation is complete. However, deeply nested callbacks can lead to callback hell, making code hard to read and maintain.

2. Promises: Promises provide a more structured and manageable way to handle asynchronous operations. A promise represents the eventual completion (or failure) of an asynchronous operation and allows you to chain operations together using .then() and .catch() methods. Promises simplify error handling and provide a more organized control flow.

3. Async/await: Async/await is a syntax introduced in ECMAScript 2017 (ES8) that builds upon promises and provides a more synchronous-like way to write asynchronous code. By using the async keyword to declare a function as asynchronous and the await keyword to pause the execution until a promise is resolved, you can write asynchronous code that resembles synchronous code in terms of readability and flow.

## Q.5 What are Callbacks &  Callback Hell ?

- A callback is a function passed as an argument to another function. Callbacks helps us achieve asynchronous behaviour in JavaScript.

```javascript
// function
function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

// callback function
function callMe() {
  console.log("I am callback function");
}

// passing function as an argument
greet("Steevel", callMe);
```

- Callback Hell (also known as the Pyramid of Doom) is a term used to describe a situation in asynchronous programming where there is excessive nesting of callbacks which depend of the result of each other leading to a long chain of nested callbacks. This makes the code difficult to debug and maintan.

```javascript
asyncOperation1(function(result1) {
  asyncOperation2(result1, function(result2) {
    asyncOperation3(result2, function(result3) {
      // More nested callbacks...
      // ...
    });
  });
});
```

## Q.6 What are Promises & Explain Some Three Methods of Promise ?

- In js a promise is a way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not. To create a promise we use Promise() constructor.

```javascript
let promise = new Promise(function(resolve, reject) {
  // do something
})
```

- To make use of promises that we created we use 3 different methods  
   **1 .then():** This  method is used to handle the fulfillment of a promise. This method is used to access the result when the promise is fulfilled.  
   **2 .catch():** This method is used to handle the rejection of a promise. This method is used to access the result/error when the promise is rejected.  
   **3 .finally():** This method will be executed regardless of whether the promise is fulfilled or rejected. It is commonly used for cleanup or finalization tasks that need to be performed after the promise is settled.

- A promise may have 3 states:  
    **1. pending:** The initial state of a promise. This state represents that the promise has neither been fulfilled nor been rejected, it is in the pending state.  
    **2. fulfilled:** This state represents that the promise has been fulfilled, meaning the async operation is completed.  
    **3. rejected:** This state represents that the promise has been rejected for some reason, meaning the async operation has failed.

## Q.7 What’s async & await Keyword in JavaScript ?

- async & await is used to perform asynchronous operations in JavaScript. The `async` keyword is used to define an asynchronous function. An asynchronous function always returns a promise. Within an async function, you can use the `await` keyword to pause the execution of the function until a Promise is resolved or rejected.
- In a nutshell async & await allows us to write asynchronous code in a more synchronous and readable manner.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
    }, 2000);
  });
}

async function getData() {
  try {
    const result = await fetchData(); // Pauses execution until the promise is resolved
    console.log(result); // Output: Data fetched successfully
  } catch (error) {
    console.error('Error:', error);
  }
}

getData();
```

## Q.8 Explain Purpose of Try and Catch Block & Why do we need it?

- The `try and catch blocks` are used in JavaScript for error handling and to gracefully handle exceptions that may occur during the execution of code. They provide a way to handle and recover from errors, preventing them from causing the program to crash or behave unpredictably.
- The purpose of the try block is to enclose the code that might potentially throw an exception. Within the try block, you write the code that you want to monitor for exceptions.
- If an exception occurs within the try block, the execution is immediately transferred to the corresponding catch block. The catch block allows you to specify how to handle the exception. It contains the code that will be executed when an exception is thrown.

```javascript
try {
  // Code that may throw an exception
  throw new Error('Something went wrong');
} catch (error) {
  // Handling the exception
  console.error("Error Name: ", error.name);
  console.error('Error Message:', error.message);
}
```

## Q.9 Explain fetch ?

- The fetch() method in JavaScript is used to request data from a server. The request can be to any type of API that returns the data in JSON or XML. The fetch() method takes a `url` as parameter and returns a Promise that resolves to a Response object.

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Handle the retrieved data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });
```

## Q.10 How do you define an asynchronous function in JavaScript using async/await?

- In JavaScript, you can define an asynchronous function using the `async` keyword. An asynchronous function returns a promise and allows you to use the await keyword to pause the execution until a promise is resolved or rejected. This provides a more synchronous-like flow in handling asynchronous operations.

```javascript
async function functionName() {
  // Asynchronous code
  // ...
}
```
