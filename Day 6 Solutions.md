# Day 6 Solutions -  7

## Question 1

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC: O() -
- SC: O() -

---

## Question 2

### Algorithm

1. Calculate number of rows and columns in the given 2d matrix. Initialize start and end pointers
2. while start is less than or equal to end, calculate mid
3. If matrix[mid/columns][mid%columns] is equal to the target then return true
4. Else if matrix[mid/columns][mid%column] is greater than the target then return end pointer to mid-1
5. Else move start pointer to mid+1
6. If control comes out of the while loop return false

### Code

```java
int m = matrix.length; // No. of rows
int n = matrix[0].length; // No. of cols
int start = 0, end = m * n - 1;

while(start <= end){
  int mid = start + (end - start) / 2;

  if(matrix[mid/n][mid%n] == target){
    return true;
  } else if(matrix[mid/n][mid%n] > target){
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

return false;
```

### Space and Time Complexity

- TC: O(log(m*n)) - Since we are using binary search
- SC: O(1) - Since we are not using any extra space

---

## Question 3

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC: O() -
- SC: O() -

---

## Question 4

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC: O() -
- SC: O() -

---

## Question 5

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC: O() -
- SC: O() -

---

## Question 6

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC: O() -
- SC: O() -

---

## Question 7

### Algorithm

1. Initialize left, right, top, bottom pointers. Initialize a n*n answer matrix. Initialize count and total to track total elements
2. While count less than total start inserting numbers in the first row. After completing the first row increment the top pointer
3. Next insert numbers in the last column. After completing the last column decrement the right pointer
4. Next insert numbers in the last row. After completing the last row decrement the bottom pointer
5. Next insert numbers in the first column. After completing the first column increment the left pointer
6. Return the matrix

### Code

```java
int left = 0;
int right = n - 1;
int top = 0;
int bottom = n - 1;
int[][] matrix = new int[n][n];
int count = 0, total = n * n, num = 1;

while(count < total){
  for(int col = left; col <= right; col++){
    matrix[top][col] = num;
    num++;count++;
  }
  top++;

  for(int row = top; row <= bottom; row++){
    matrix[row][right] = num;
    num++;count++;
  }
  right--;

  if(top <= bottom){
    for(int col = right; col >= left; col--){
      matrix[bottom][col] = num;
      num++;count++;
    }
    bottom--;
  }

  if(left <= right){
    for(int row = bottom; row >= top; row--){
      matrix[row][left] = num;
      num++;count++;
    }
    left++;
  }
}

return matrix;
```

### Space and Time Complexity

- TC: O(n^2) - Since we are traversing the entire 2d array
- SC: O(1) - Since we ar not using any extra space

---

## Question 8

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC: O() -
- SC: O() -

---

Day 6 - Question 2 completed
