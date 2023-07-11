# Day 1 Solutions

## Question 1

### Algorithm

1. Initialize map. Loop over the entier array
2. Find the difference between arr[i] and target
3. Check if the difference exists in the map
    1. __*if exists*__ return the index of the difference and the current value
    2. __*if not*__ store the index of current value in the map

### Code

```c
int n = nums.size();
unordered_map<int, int> mpp;

for(int i = 0; i < n; i++){
    int num = nums[i];
    int moreNeeded = target - num;
    if(mpp.find(moreNeeded) != mpp.end()){
      return {mpp[moreNeeded], i};
    }
    mpp[num] = i;
}

return {-1, -1};
```

### Space and Time Complexity

- TC: O(N) - The loop runs N times in the worst case
- SC: O(N) - Becuase of the use the map data structure.

---

## Question 2

### Algorithm

1. Initialize count i
2. Loop over the array. If the current element is not equal to the target element then copy the current element at i'th position and increment i. If the current element is not equal to the target element then continue.
3. return i

### Code

```c
int i = 0, n = nums.size();

for(int j = 0; j < n; j++){
  if(nums[j] != val){
    nums[i] = nums[j];
    i++;
  }
}

return i;
```

### Space and Time Complexity

- TC: O(n) - We go over all the elements of the array
- SC: O(1) - We are not using any extra space

---

## Question 3

### Algorithm

1. Perfrom binary search and return the value of mid

### Code

```c
int start = 0;
int end = nums.size() - 1;
int mid = start + (end - start) / 2;

while(start <= end){
    if(nums[mid] == target){
        return mid;
    } else if(nums[mid] > target){
        end = mid - 1;
    } else {
        start = mid + 1;
    }
    mid = start + (end - start) / 2;
}

return mid;
```

### Space and Time Complexity

- TC: O(logN) - Since we are using binary search
- SC: O(1) - We are not using any extra space

---

## Question 4

### Algorithm

1. Loop over the array from the end.
2. if last digit is not equal 9 increment the last digit and return the array
3. if last digit is equal 9 make it 0 and move ahead(in reverse order)
4. Check if the first element of the now modified array  
    a. if it is equal to 0 that means the given number is increased in size (ex: 999 has become 1000). Initialize the original array with 0
    Create a new vector of size n+1. Make the first element of the new vector as 1 and return it.  
    b. if it is not equal to 0 return the original array

### Code

```c
int n = digits.size();

for(int i = n - 1; i >= 0; i--){
    if(digits[i] != 9){
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
}

// to handle '999' => 999 + 1 = 1000
digits.push_back(0);
digits[0] = 1;

return digits;
```

### Space and Time Complexity

- TC: O(n) - Since we are traversing array of size n
- SC: O(1) - We are not using any extra space

---

## Question 5

### Algorithm

1. Initialize 3 pointers i = m - 1, j = n - 1 and k = m+n-1(used for placing the largest element) where m is the number of elements in the array 1 and n is the number of elements in the array2 and k is the number of elements that can fit in the array1
2. Loop over array2. if i >= 0 and current element of array1 is greater than current element of array2 assign nums1[i] to nums1[k] and decrement i,k. else assign nums2[j] to nums1[k] and decrement i,k.

### Code

```c
int i = m-1, j = n-1, k = m+n-1;

while(j >= 0){
    if(i >= 0 && nums1[i] > nums2[j]){
        nums1[k--] = nums1[i--];
    }else {
        nums1[k--] = nums2[j--];
    }
}
```

### Space and Time Complexity

- TC: O(m+n) - Since we are traversing two arrays of length m and n
- SC: O(1) - We are not using any extra space

---

## Question 6

### Algorithm

1. Initialize unordered map
2. Loop over the given array. For each element check if it already exists in the map.  
    a. If already exists then return true  
    b. If not, return false

### Code

```c
unordered_map<int,int> mpp;

for(int i = 0; i < nums.size(); i++){
    if(mpp.find(nums[i]) != mpp.end()){
        return true;
    }else {
        mpp[nums[i]]++;
    }       
}

return false;
```

### Space and Time Complexity

- TC: O(n) - Since we are traversing array of size n
- SC: O(n) - Since we are using unordered_map

---

## Question 7

### Algorithm

1. Initialize i with first position of array
2. Loop over the given array. For each element which is not equal to 0 swap it with the element at i'th position

### Code

```c
int i = 0;

for(int j = 0; j < nums.size(); j++){
    if(nums[j] != 0){
        swap(nums[j] , nums[i]);
        i++;
    }
}
```

### Space and Time Complexity

- TC: O(n) - Since we are traversing array of size n
- SC: O(1) - We are not using any extra space

---

## Question 8

### Algorithm

1. Initialize set and sum.
2. Loop over the given array. For each element check if the element already exists in the array  
   a. If Yes then push the element into result array
   b. If No insert the element into the set and recalculate the sum
3. Find the totalSum of all the elements from 0 to n and subtract the sum from it get the missing number. push the element into result array
4. Return result array

### Code

```c
int n = nums.size();
unordered_set<int> s;
vector<int> res;
int sum = 0;

for(int i = 0; i < n; i++){
    if(s.find(nums[i]) != s.end()){
        res.push_back(nums[i]); // push duplicate element into res
    } else {
        s.insert(nums[i]);
        sum += nums[i];
    }
}

int totalSum = n * (n+1) / 2;
int missingNumber = totalSum - sum;
res.push_back(missingNumber); // push missing number element into res

return res;
```

### Space and Time Complexity

- TC: O(n) - Since we are traversing array of size n
- SC: O(n) - Since we are using set of size n
