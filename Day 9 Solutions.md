# Day 11 Solutions - 1, 2, 3, 4, 5, 6, 8

## Question 1

### Algorithm

1. Define funtion `isPowerOfTwo` which takes an integer n as input
2. Base case: if the n <= 0 return false since n is not a power of two. If n is equal to one return true since 1 is the power of two
3. else check if n%2 == 0. If not return false since the power of two will always be completely divisible by 2
4. If n%2 == 0, return the result of recursive call to isPowerOfTwo with n/2

### Code

```java
public static boolean isPowerOfTwo(int n) {
  if (n <= 0) {
    return false; // Base case: non-positive integers are not powers of two
  } else if (n == 1) {
    return true; // Base case: 1 is a power of two
  } else if (n % 2 == 0) {
    return isPowerOfTwo(n / 2); // Recursive case: check if n/2 is a power of two
  } else {
    return false; // n is not divisible by 2, hence not a power of two
  }
}
```

### Space and Time Complexity

- TC: O(log n) - Since in each recursive call n is halved
- SC: O(log n) - Since in each recursive call n is halved

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

1. Define a function `findPermutations` that takes input string and an empty string as input
2. Base case: whenver the length of the input string becomes 0 print the answer string
3. iterate over the input string and at every iteration i add the corresponding character to the answer string and reomve that character from the input string. Make recursive calls with this new string

### Code

```java
public static void findPermutations(String str, String ans) {
  // base case
  if (str.length() == 0) {
    System.out.println(ans);
    return;
  }

  // recursion
  for (int i = 0; i < str.length(); i++) {
    char curr = str.charAt(i);
    String Newstr = str.substring(0, i) + str.substring(i + 1);
    findPermutations(Newstr, ans + curr);
  }
}
```

### Space and Time Complexity

- TC: O(n * n!) - It n! to find total permutations. It will take n time for each calculation
- SC: O(n) - depth of the call stack is equal to the length of the string n

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
