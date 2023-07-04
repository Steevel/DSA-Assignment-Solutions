# Execution context

- Execution context refers to the environment in which JavaScript code is executed. It contains all the necessary information for the interpreter to execute the code, such as variables, function declarations, scope chains, and the value of "this" keyword. Each time a function is called or a block of code is executed, a new execution context is created.

- The types of execution context in JavaScript are:

- Global Execution Context/GEC
- Functional Execution Context/FEC
- Eval Execution Context

- GEC / Global Execution Context is also called the base/default execution. Any JavaScript code which does not reside in any function will be present in the global execution context. The reason behind its name 'default execution context' where the code begins its execution when the file first loads in the web browser.

- FEC or Functional Execution Code is that type of context which is created by the JavaScript engine when any function call is found. Every function has its own execution context, and thus unlike GEC, the FEC can be more than one. Also, FEC can access the entire code of the GEC, but it is not possible for GEC to access all the code of the FEC.

- Any JS code that gets executed within the eval function creates and holds its own execution context. However, the eval function is not used by the JavaScript developers, but it is a part of the Execution Context.
