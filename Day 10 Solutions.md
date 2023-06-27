# Day 10 Solutions

## Question 1

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC: O(n) -
- SC: O(n) -

---

## Question 2

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC: O(n) -
- SC: O(n) -

---

## Question 3

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC: O(n) -
- SC: O(n) -

---

## Question 4

### Algorithm

1. Define function `lengthOfStr` which takes a string as input
2. If the string is empty return 0
3. Return the result of adding 1 to the result of the recursive call with substring starting from 1st index

### Code

```java
public static int lengthOfStr(String s){
  // Base case
  if(s.equals("")){
    return 0;
  }
  
  // recursion
  return 1 + lengthOfStr(s.substring(1));
}
```

### Space and Time Complexity

- TC: O(n) - becuase we need to iterate over the entire string
- SC: O(n) - becuase the depth of recursion stack is equal to the length of the string

---

## Question 5

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC: O(n) -
- SC: O(n) -

---

## Question 6

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC: O(n) -
- SC: O(n) -

---

## Question 7

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC: O(n) -
- SC: O(n) -

---

## Question 8

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC: O(n) -
- SC: O(n) -

---
