# Day 11 Solutions - 2, 3, 4, 5, 6, 8

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

1. Define function `factorial` which recives an interger N
2. Base Case: when N is equal to 1 return 1
3. Calculate the factorial by mulitplying current number N with the result of recursive call to the factorial function with N-1 and return it

### Code

```java
public static int factorial(int N){
  if(N == 1){
    return 1;
  }
  
  return N * factorial(N-1);
}
```

### Space and Time Complexity

- TC: O(n) - because we will be going thorough n natural numbers
- SC: O(n) - because we are making n recursive calls

---

## Question 4

### Algorithm

1. Define function `exponent` which recives two integers N and P as input
2. Base Case: when P is equal to 0 return 1
3. Calculate the halfPower by recursive call to exponent function with P/2
4. Calculate the power by multiplying halfPower with itself. If the P is even then return this power
5. Else if P is odd multiply the power with N and return it

### Code

```java
public static int exponent(int N, int P){
  if(P == 0){
    return 1;
  }
  
  int halfPower = exponent(N, P/2);
  int power = halfPower * halfPower;

  if(P % 2 != 0){
    power = N * power;
  }
  
  return power;
}
```

### Space and Time Complexity

- TC: O(log P) - because at each recursive call the power is halved
- SC: O(log P) - because at each recursive call the power is halved

---

## Question 5

### Algorithm

1. Define function `maxEle` which recives an input array and an interger as starting index
2. Base Case: when index is equal to 0 return the first array element
3. return the maximum elemnt between current array element and the result of recursive call to maxEle function with index-1

### Code

```java
public static int maxEle(int[] arr, int idx){
  if(idx == 0){
    return arr[idx];
  }
  return Math.max(arr[idx], maxEle(arr, idx-1));
}
```

### Space and Time Complexity

- TC: O(n) - because we will be going thorough n natural numbers
- SC: O(n) - because we are making n recursive calls

---

## Question 6

### Algorithm

1. Define function `ap` which recives three integers namely first term, common difference and N
2. Base Case: when N is equal to 1 print the first term
3. Calculate the next term by adding first term  and the common
4. Call function ap recursively with the newly calculated next term, difference and N-1

### Code

```java
public static void ap(int a, int d, int N){
  if(N == 1){
    System.out.println(a);
    return;
  }
  int num = a+d;
  ap(num, d, N-1);
}
```

### Space and Time Complexity

- TC: O(n) - because we will be going thorough n natural numbers
- SC: O(n) - because we are making n recursive calls

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
