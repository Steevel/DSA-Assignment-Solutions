# Mock Test 3 - Java

## Question 1 code

```java
class MyQueue
{
  QueueNode front, rear;
  
  //Function to push an element into the queue.
  void push(int a)
 {
    // Your code here
    QueueNode newNode = new QueueNode(a);

    if(front == null){
      front = newNode;
      rear = front;
    } else {
      rear.next = newNode;
      rear = newNode;
    }
 }

//Function to pop front element from the queue.
  int pop()
  {
    // Your code here
    if(front != null){
      int popped = front.data;
      front = front.next;
      return popped; 
    } else {
      return -1;
    }
  }
}
```

## Question 2 code

```java
public class Stack {
  private int maxSize; // Maximum size of the stack
  private int[] stackArray; // Array to store stack elements
  private int top; // Top of the stack

  // Constructor to initialize the stack
  public Stack(int size) {
    maxSize = size;
    stackArray = new int[maxSize];
    top = -1; // Empty stack
  }

  // Method to add an element to the stack
  public void push(int value) {
    if (isFull()) {
      System.out.println("Stack is full. Cannot push element.");
    } else {
      top++;
      stackArray[top] = value;
      System.out.println("Pushed " + value + " to the stack.");
    }
  }

  // Method to remove an element from the stack
  public int pop() {
    if (isEmpty()) {
      System.out.println("Stack is empty. Cannot pop element.");
      return -1; // Or throw an exception
    } else {
      int poppedValue = stackArray[top];
      top--;
      return poppedValue;
    }
  }

  // Method to check if the stack is empty
  public boolean isEmpty() {
    return (top == -1);
  }

  // Method to check if the stack is full
  public boolean isFull() {
    return (top == maxSize - 1);
  }

  // Method to get the top element of the stack
  public int peek() {
    if (isEmpty()) {
      System.out.println("Stack is empty.");
      return -1; // Or throw an exception
    } else {
      return stackArray[top];
    }
  }

  // Method to get the size of the stack
  public int size() {
    return top + 1;
  }

  // Method to display the elements of the stack
  public void display() {
    if (isEmpty()) {
      System.out.println("Stack is empty.");
    } else {
      System.out.print("Stack: ");
      for (int i = top; i >= 0; i--) {
        System.out.print(stackArray[i] + " ");
      }
      System.out.println();
    }
  }

  // Example usage
  public static void main(String[] args) {
    Stack stack = new Stack(5);
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.display(); // Stack: 30 20 10
    System.out.println("Top element: " + stack.peek()); // Top element: 30
    System.out.println("Popped element: " + stack.pop()); // Popped element: 30
    stack.display(); // Stack: 20 10
    System.out.println("Is stack empty? " + stack.isEmpty()); // Is stack empty? false
    System.out.println("Stack size: " + stack.size()); // Stack size: 2
  }
}
```
