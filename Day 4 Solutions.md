# Day 4 Solutions

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

### Code

```c

```

### Space and Time Complexity

---

## Question 3

### Algorithm

### Code

```c

```

### Space and Time Complexity

---

## Question 4

### Algorithm

### Code

```c

```

### Space and Time Complexity

---

## Question 5

### Algorithm

1. Assume number of rows completed is k. These rows contain 1+2+3+..+k=k(k+1)/2 <= N.
2. Apply binary search to find k which is less than or equal to k. If current is equal to k return k
3. return end

### Code

```c
long start = 0, end = n;
long k, curr;

while(start <= end){
  k = start + (end - start) / 2;
  curr = k * (k+1)/2;

  if(curr == n) return (int)k;

  if(n < curr) {
      end = k - 1;
  }else {
      start = k + 1;
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

### Code

```c

```

### Space and Time Complexity

---

## Question 7

### Algorithm

### Code

```c

```

### Space and Time Complexity

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
