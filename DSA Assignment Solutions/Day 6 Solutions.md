# Day 6 Solutions -  1, 2, 3, 5, 6, 7, 8

## Question 1

### Algorithm

1. Calculate the length of the string. Intialize low and high to 0 and size the string. Also initialize the result array with size+1 as it's size
2. Iterate over the string and check if the current character is 'I' if yes add low at res[i] and increment low else add high and decrement high
3. At the last position add either low or high

### Code

```java
int size = s.length();
int low = 0;
int high = size;

int[] res = new int[size+1];

for(int i = 0; i < size; i++){
    if(s.charAt(i) == 'I'){
        res[i] = low;
        low++;
    } else {
        res[i] = high;
        high--;
    }
}

res[size] = high;
return res;
```

### Space and Time Complexity

- TC: O(N) - Since we are iterating over the string
- SC: O(1) - Since we are not using any extra space

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

1. If length of array is less than 3 it cannot form mountain array so return false
2. Iterate over the array and check if arr[i] < arr[i+1]. If yes continue else break out of the loop
3. Check if i equal to 0 or n-1. If yes return false. If the entire array is either decreasing or increasing then i will be equal to 0 or n-1 respectively
4. Now check from the end of the array. if arr[j] < arr[j-1]. If no then return false
5. Finally return true

### Code

```java
if(arr.length < 3) return false;

int n = arr.length, i;

for(i = 0; i < n-1; i++){
  if(arr[i] < arr[i+1]){
      continue;
  } else {
      break;
  }
}

if(i == 0 || i == n-1){
    return false;
}

for(int j = n-1; j > i; j--){
  if(arr[j] < arr[j-1]){
      continue;
  } else {
      return false;
  }
}

return true;
```

### Space and Time Complexity

- TC: O(n) - Since we are visiting each and every element of the array
- SC: O(1) - Since we are not using any extra space

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

1. Sort both the arrays. Initialize sum with 0.
2. Iterate from 0 to n. Multiply minimum element of array1 with maximum element of array2 and it to the sum
3. Return sum

### Code

```java
Arrays.sort(a);
Arrays.sort(b);

long sum = 0;

for(int i = 0; i < n; i++){
    sum = sum + (a[i] * b[(int)n - i - 1]);
}

return sum;
```

### Space and Time Complexity

- TC: O(nlogn) - Since we are sorting the array
- SC: O(1) - Since we are not using any extra space

---

## Question 6

### Algorithm

1. Check if the array legth is odd. If yes return empty array
2. Initialize a result array of size n/2. Also intialize a map
3. Iterate through the array and store the values and their frequencies in the map
4. Iterate over the map and for each key x check if value x is > value x+x. If yes return empty array.
5. If not then decrement the frequency of the elements and push x into the result array
6. return the result array

### Code

```java
int n = changed.length, i = 0;

// Check if the array lenght is odd or there is only one element in the array
if(n % 2 == 1) return new int[0];
// Initalize result array
int[] res = new int[n/2];
// Create a map
Map<Integer, Integer> map = new TreeMap<>();
for(int a: changed){
    map.put(a, map.getOrDefault(a,0)+1);
}
for(int x: map.keySet()){
    if(map.get(x) > map.getOrDefault(x+x, 0))
        return new int[0];
    for(int j = 0; j < map.get(x); ++j){
        res[i++] = x;
        map.put(x+x, map.get(x+x) - 1);
    }
}

return res;
```

### Space and Time Complexity

- TC: O(Nlogk)
- SC: O(n)

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

1. Calculate the number of rows in matrix1, number of columns in matrix2 and number of rows in matrix2
2. Iterate over the given matrices and calculate a[i][j]
3. return ans

### Code

```java
int m = mat1.length; 
int n = mat2.length; 
int l = mat2[0].length; 

int[][] ans = new int[m][l];

for (int i = 0; i < m; i++) { // i from 0 to rows of mat1
  for (int j = 0; j < l; j++) { // j from 0 to cols of mat2
    for (int k = 0; k < n; k++) { // k from 0 rows of mat2/cols of mat1
      ans[i][j] += mat1[i][k] * mat2[k][j];
    }
  }
}

return ans;
```

### Space and Time Complexity

- TC: O(mnl)
- SC: O(ml)

---
