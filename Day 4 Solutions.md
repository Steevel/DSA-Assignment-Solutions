# Day 4 Solutions - 1, 2, 4, 5, 6, 7, 8

## Question 1

### Algorithm

1. Initialize a vector to store the answer.
2. Loop through all the elements of the first array and check if the current element is eqaul to the previous element.If yes it means that it is a duplicate element and we need to exclude it.
3. Check if that element is present in the other two arrays using binary search. If true, add the element to the answer vector.

### Code

```c
bool binarySearch(int arr[], int n, int target){
  int start = 0, end = n-1;
  
  while(start <= end){
    int mid = start + (end - start) / 2;
    
    if(arr[mid] == target){
      return true;
    } else if(arr[mid] > target){
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  
  return false;
}

vector <int> commonElements (int A[], int B[], int C[], int n1, int n2, int n3)
{
  //code here.
  vector<int> ans;
  
  for(int i = 0; i < n1; i++){
    if(i != 0 && A[i] == A[i-1]) continue;
    
    // Check if the element exists in B and C
    if(binarySearch(B, n2, A[i]) && binarySearch(C, n3, A[i])){
      ans.push_back(A[i]);
    }
  }
  
  return ans;
}
```

### Space and Time Complexity

- TC: O(n1(log(n2*n3))
- SC: O(1)

---

## Question 2

### Algorithm

1. Initialize 2 hashsets
2. Iterate over the input arrays and store their values in hashset
3. Initialize 2 arraylists
4. Iterate over each of the hashsets and check if the value is present in another hashset. If it is not present push the element into the arraylist
5. add both the arraylists to a list of arraylists and return the resultant list

### Code

```java
Set<Integer> set1 = new HashSet<>();
Set<Integer> set2 = new HashSet<>();

for(int num: nums1){
  set1.add(num);
}

for(int num: nums2){
  set2.add(num);
}

List<List<Integer>> result = new ArrayList<>();
ArrayList<Integer> list1 = new ArrayList<>();
ArrayList<Integer> list2 = new ArrayList<>();

for(int num: set1){
  if(!set2.contains(num)){
    list1.add(num);
  }
}

for(int num: set2){
  if(!set1.contains(num)){
    list2.add(num);
  }
}

result.add(list1);
result.add(list2);

return result;
```

### Space and Time Complexity

- TC: O(M+N) - time required to iterate over both arrays
- SC: O(max(M,N)) - the array which has maximum unique elment its set will be of maximum size

---

## Question 3

### Algorithm

1. Calculate number of rows and columns of the given 2d array
2. Initialize result array with column size of the input 2d array as row size and row size of the given 2d array as column size.(because in transpose rows become columns and columns become rows)
3. Iterate over the input 2d array and copy the elements arr[i][j] into the result array at res[j][i]
4. Return the result array

### Code

```java
int m = matrix.length;
int n = matrix[0].length;
int[][] res = new int[n][m]; // **** row and column sizes interchange

for(int i = 0; i < m; i++){
  for(int j = 0; j < n; j++){
    res[j][i] = matrix[i][j]; // **
  }
}

return res;
```

### Space and Time Complexity

- TC: O(m * n) - Since we iterate over given 2d array
- SC: O(m * n) - Since we use result array

---

## Question 4

### Algorithm

1. Sort the give . Initialize the sum
2. Iterater over the array in the steps of 2 and add the current element to the sum
3. Return the sum

### Code

```java
Arrays.sort(nums);
int sum = 0;

for(int i = 0; i < nums.length; i+=2){
    sum = sum + nums[i];
}

return sum;
```

### Space and Time Complexity

- TC: O(nlogn) - Since we are sorting the array
- SC: O(1) - Since we are not using any extra space

---

## Question 5

### Algorithm

1. Assume number of rows completed is k. These rows contain 1+2+3+..+k=k(k+1)/2 coins.
2. We need to find the maximum k where k <= N. Apply binary search from 0 to n.
3. If coins are equal to n return k. if coins are less thatn n start = k+1 else end = k-1
4. return end

### Code

```java
long start = 0, end = n - 1;
long k, curr;

while(start <= end){
  k = start + (end - start)/2;
  coins = k * (k + 1)/2;

  if(coins == n) return (int)k;
  if(coins < n){
    start = k + 1;
  } else {
    end = k - 1;
  }
}

return (int)end;
```

### Space and Time Complexity

- TC: O(logN) - Since we are using Binary search
- SC: O(1) - Since we are not using any extra space

---

## Question 6

### Algorithm

1. Initialize an res array, start and end pointer
2. Iterate over the input array backwards. If the absolute value of arr[start] is greater than absolute value of arr[end] then multiply arr[start] with iteself and store it in res array else do the same thing with arr[end]
3. Return the result array

### Code

```java
int n = nums.length;
int[] res = new int[n];

int start = 0, end = n - 1;
for(int i = n-1; i >= 0; i--){

  if(Math.abs(nums[start]) > Math.abs(nums[end])){
    res[i] = nums[start] * nums[start];
    start++;
  } else {
    res[i] = nums[end] * nums[end];
    end--;
  }
}

return res;
```

### Space and Time Complexity

- TC: O(n) - since we are iterating over the input array
- SC: O(n) - since we are using extra space

---

## Question 7

### Algorithm

1. Initialize row and column with m and n respectively
2. Iterate over the ops array and find the minimum value the current row and column values and the current value of ops array
3. Return the product of row and column values

### Code

```java
int r = m, c = n;

for(int i = 0; i < ops.length; i++){
  r = Math.min(r, ops[i][0]);
  c = Math.min(c, ops[i][1]);
}

return r * c;
```

### Space and Time Complexity

- TC: O(n) - since we are iterating over the input array
- SC: O(1) - since we are not using any extra space

---

## Question 8

### Algorithm

1. Iterate over the input array
2. For each number in array left shift the number at ith place by 10 bits and or(|) it with the number at i+nth place inorder to store both numbers in the same position
3. Iterate backwards from the middle of the array. retrive y from the number by anding(&) it with 1023 (which in binary becomes 10 set bits i.e 1111111111). retrive x from the number shifting it 10 bits to the right
4. return the modified arrray

### Code

```java
for(int i = 0; i < n; i++){
  nums[i] = nums[i] << 10; // shift current value by 10 bits
  nums[i] = nums[i] | nums[i+n]; // store the value y in x
}

int j = 2 * n - 1;
for(int i = n-1; i >= 0; i--){
  int y = nums[i] & (int)(Math.pow(2,10)-1); // retrive y
  int x = nums[i] >> 10; // retrive x

  nums[j] = y;
  nums[j-1] = x;
  j -= 2;
}

return nums;
```

### Space and Time Complexity

- TC: O(n) - since we are iterating over the input array
- SC: O(1) - since we are not using any extra space

---
