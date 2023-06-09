# Day 10 Solutions - 1, 3, 4

## Question 1

### Algorithm

1. Define funtion `isPowerOfThree` which takes an integer n as input
2. Base case: if the n <= 0 return false since negative numbers are not power of three. If n is equal to one return true since 1 is the power of three
3. else check if n%3 == 0. If not return false since the power of two will always be completely divisible by 3
4. If n%3 == 0, return the result of recursive call to isPowerOfThree with n/3

### Code

```java
public static boolean isPowerOfThree(int n){
  if(n <= 0){
      return false; // Base case: non-positive integers are not powers of three
  } else if(n == 1){
      return true; // Base case: 1 is a power of two
  } else if(n % 3 == 0){
      return isPowerOfThree(n/3); // Recursive case: check if n/3 is a power of three
  } else {
      return false;
  }
}
```

### Space and Time Complexity

- TC: O(log n) - Since in each recursive call n is halved
- SC: O(log n) - Since in each recursive call n is halved

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

1. Define function `findSubsets` which takes a string as input
2. Base case: If i is equal to length of the string. If length of ans string is 0 then print null else print ans else print ans and return
3. For the current character there are two choices. 1. to be included in the subset and 2. not to be included in the subset. For the first choice add current character to ans and make recursive call with i+1. For the second choice just make recursive call with i+1

### Code

```java
public static void findSubsets(String str, String ans, int i) {
  // base case
  if (i == str.length()) {
    if (ans.length() == 0) {
      System.out.println("null");
    } else {
      System.out.println(ans);
    }
    return;
  }
  // recursion
  // yes choice to be included in subset
  findSubsets(str, ans + str.charAt(i), i + 1);
  // No choice
  findSubsets(str, ans, i + 1);
}
```

### Space and Time Complexity

- TC: O(n \*2^n) - Total subsets for a string of lenght n is 2^n and time required to calculate each subset is n. Threfore n* 2^n is the time complexity
- SC: O(n) - because max depth of the recursion stack is equal to the length of the string

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
