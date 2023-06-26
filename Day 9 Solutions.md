# Day 11 Solutions - 2

## Question 1

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC:
- SC:

---

## Question 2

### Algorithm

1. Define function `naturalSum` which recives an interger n as input
2. Base Case: when n is equal to 1 return 1
3. Calculate sum by adding n and the result of recursive call to naturalSum function with n-1
4. Return sum

### Code

```java
public static int naturalSum(int n) {
  if (n == 1) {
    return 1;
  }
  int sum = n + naturalSum(n - 1);
  return sum;
}
```

### Space and Time Complexity

- TC: O(n) - because we will be going thorough n natural numbers
- SC: O(n) - because we are making n recursive calls

---

## Question 3

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC:
- SC:

---

## Question 4

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC:
- SC:

---

## Question 5

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC:
- SC:

---

## Question 6

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC:
- SC:

---

## Question 7

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC:
- SC:

---

## Question 8

### Algorithm

1. Define function `product` which recives an input array and an interger as starting index
2. Base Case: when index is equal to 0 return the first array element
3. Calculate the product by mulitplying current array element with the result of recursive call to product function with index-1
4. Return the product

### Code

```java
public static int product(int[] arr, int idx){
  if(idx == 0){
    return arr[0];
  }
  
  return arr[idx] * product(arr, idx-1);
}
```

### Space and Time Complexity

- TC: O(n) - because we will be going thorough n natural numbers
- SC: O(n) - because we are making n recursive calls

---
