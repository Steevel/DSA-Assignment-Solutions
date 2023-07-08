# Day 15 Solutions

## Question 1

### Algorithm

1. Initialize ans array of size n and a stack
2. Iterate over the array. If the the stack is empty push the current index into the stack and continue comparing the elements from the next element
3. while the stack is not empty check if the current element is greater than the element at the index which is at the top of the stack. If yes add the current element at that index in ans array
4. Push the current index into the stack
5. While the stack is not empty, pop the top index from the stack and assign -1 to that index in ans array
6. Return ans array

### Code

```java
long[] ans = new long[n];
Stack<Integer> st = new Stack<>();

for(int i = 0; i < n; i++){
  
  if(st.isEmpty()){
    st.push(i);
    continue;
  }
  
  while(!st.isEmpty() && arr[i] > arr[st.peek()]){
    ans[st.pop()] = arr[i];
  }
  
  st.push(i);
}

while(!st.isEmpty()){
  ans[st.pop()] = -1;
}

return ans;
```

### Space and Time Complexity

- TC: O(N) - We iterate over the array once
- SC: O(N) - We are using ans of size N

---

## Question 2

### Algorithm

1. Initialize ans array of size n and a stack
2. Iterate over the array. If the the stack is not empty and peek element is greater than the curent element remove the peek element from the stack
3. If the stack is empty push -1 to the list else push the peek element to the list
4. Push the current element into the stack
5. Return ans list

### Code

```java
Stack<Integer> st = new Stack<>();
ArrayList<Integer> ans = new ArrayList<>();

for(int i = 0; i < n; i++){
    
  // If the peek element is greater than the current element remove peek element
  while(!st.isEmpty() && st.peek() >= a[i]){
    st.pop();
  }
  
  // else if stack is empty add -1 to ans
  //  if the stack is not empty add the peek element to the answer
  if(st.isEmpty()){
    ans.add(-1);
  } else {
    ans.add(st.peek());
  }
  
  // Push current element into the stack
  st.push(a[i]);
}

return ans;
```

### Space and Time Complexity

- TC: O(N) - We iterate over the array once
- SC: O(N) - We are using ans of size N

---

## Question 3

### Algorithm

1. Initialize 2 queues q1 and q2
2. To perform `push()` operation add the element into q1
3. To perform `pop()` operation move all elements from q1 to q2 except the last element. Remove the one remaining element from q1. move back all elements from q2 to q1. return the popped element
4. To perform `top()` operation move all elements from q1 to q2 except the last element. Get the top element from q1. move back all elements from q2 to q1. return the retrived top element
5. To perform `empty()` return true if the size of q1 is equal to zero else return false

### Code

```java
Queue<Integer> q1 = new LinkedList<>();
Queue<Integer> q2 = new LinkedList<>();

public MyStack() {
  
}

public void push(int x) {
  q1.add(x);
}

public int pop() {
  while(q1.size() > 1){
    q2.add(q1.remove());
  }

  int popped = q1.remove();

  while(!q2.isEmpty()){
    q1.add(q2.remove());
  }

  return popped;
}

public int top() {
  while(q1.size() > 1){
    q2.add(q1.remove());
  }

  int topmost = q1.peek();
  q2.add(q1.remove());

  while(!q2.isEmpty()){
    q1.add(q2.remove());
  }

  return topmost;
}

public boolean empty() {
  if(q1.size() == 0)
    return true;
  else
    return false;
}
```

### Space and Time Complexity

- TC: O(N) -
- SC: O(N) -

---

## Question 4

### Algorithm

1. Base case: when stack becomes empty return
2. If not then store the peek element of the stack in a variable and reverse the rest of the stack recursively
3. Insert the store peek element at the bottom of the stack
4. For inserting elements at the bottom of the stack check if the stack is empty. If it is empty then push the peek element into the stack
5. If the stack is not empty then pop the top element and store it in a variable. call insertBottom function recursively and push the stored top element into the stack

### Code

```java
static void insertAtBottom(Stack<Integer> st, int top){
  if(st.isEmpty()){
    st.push(top);
    return;
  } else {
    int newTop = st.pop();
    insertAtBottom(st, top);
    st.push(newTop);
  }
}

static void reverse(Stack<Integer> s)
{
  if(s.isEmpty()){
    return;
  }
  
  int x = s.pop();
  reverse(s);
  insertAtBottom(s, x);
}
```

### Space and Time Complexity

- TC: O(N)
- SC: O(N)

---

## Question 5

### Algorithm

1. Initialize a stack of characters
2. Iterate over the given string and push each character onto the stack
3. While the stack is not empty, pop each character from the stack and append it to the ans string
4. Return the ans string

### Code

```java
int n = S.length();
Stack<Character> st = new Stack<>();

for(int i = 0; i < n; i++){
  st.push(S.charAt(i));
}

String ans = "";
while(!st.isEmpty()){
  ans = ans + st.pop();
}

return ans;
```

### Space and Time Complexity

- TC: O(N) - we are traversing the string of length n
- SC: O(N) - we are using a stack of size n

---

## Question 6

### Algorithm

1. Initialize a stack. Loop over the input string.
2. If the current character is not an operator convert the stirng to integer and push it onto the stack.
3. Else pop last 2 elements from the stack and perform operation on it and again store the answer in the stack.
4. Return the top of the stack as answer

### Code

```java
int len = S.length();
Stack<Integer> st = new Stack<>();

for(int i = 0; i < len; i++){
  char ch = S.charAt(i);
  if(ch == '*' || ch == '/' || ch == '+' || ch == '-'){
    int val1 = st.pop();
    int val2 = st.pop();
    
    switch(ch){
      case '*': 
        st.push(val2 * val1);
        break;
      case '/': 
        st.push(val2 / val1);
        break;
      case '+': 
        st.push(val2 + val1);
        break;
      case '-': 
        st.push(val2 - val1);
        break;
    }
  } else {
    int num = Integer.parseInt(String.valueOf(ch));
    st.push(num);
  }
}

return st.pop();
```

### Space and Time Complexity

- TC: O(N) - Since we iterate over the string
- SC: O(N) - Since we are using stack

---

## Question 7

### Algorithm

1. Initialize 2 stacks one to store the incoming values(st) and another(minStack) to store the minimum values encountered so far
2. For `push()` operation if the min stack is empty or the current value is less than or equal to the peek value of the minStack add the current element to the minStack. Also add the current value to the st.
3. For `pop()` operation if the peek element of the st is also the current minimum value(peek of the minStack) pop st as well as minStack. If not only pop st
4. For `top()` operation return peek value of st
5. Fort `getMin()` operation return

### Code

```java
class MinStack {
  Stack<Integer> st = new Stack<>();
  Stack<Integer> minSt = new Stack<>();

  public MinStack() {

  }
  
  public void push(int val) {
    st.push(val);
    if(minSt.isEmpty() || val <= minSt.peek()){
      minSt.push(val);
    }
  }
  
  public void pop() {
    if(st.peek().equals(minSt.peek())){
      minSt.pop();
    } 
    st.pop();
  }
  
  public int top() {
    return st.peek();
  }
  
  public int getMin() {
    return minSt.peek();
  }
}
```

### Space and Time Complexity

- TC: O(1) - push, pop, top and getMin operations take constant time
- SC: O(N) - we are using a stack of size n

---

## Question 8

### Algorithm

1. Initialize left and right pointers. Initialized leftMax and rightMax for keeping track of maximum left and right heights
2. while left pointer is less than right pointer check if leftMax is less than rightMax. if yes increment left pointer, update leftMax and calculate units of water by leftMax - arr[left ptr]
3. If no, decrease right pointer, update rightMax and calculate units of water by rightMax - arr[right ptr]
4. Return water

### Code

```java
int l = 0, r = height.length-1;
int leftMax = height[l];
int rightMax = height[r];
int water = 0;

while(l < r){
  if(leftMax < rightMax){
    l++;
    leftMax = Math.max(leftMax, height[l]);
    water += leftMax - height[l];
  }else {
    r--;
    rightMax = Math.max(rightMax, height[r]);
    water += rightMax - height[r];
  }
}

return water;
```

### Space and Time Complexity

- TC: O(N) - Since we iterate over the array
- SC: O(1) - Since we are not using any extra space

---
