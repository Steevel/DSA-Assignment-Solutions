# Day 13 Solutions

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
