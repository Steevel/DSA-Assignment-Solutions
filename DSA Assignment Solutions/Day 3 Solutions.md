# Day 3 Solutions - 1, 4, 5, 6

## Question 1

### Algorithm

1. Initialize answer. If number of elements is less than 3 return 0
2. Sort the given array and loop over the array
3. set pointer j at i+1 and k at n-1.
4. while the j < k calculate the sum and compare it wtih target. If it is equal to the target increment j and decrement k. else if sum-target is less than ans-target ans=sum. if sum < target increment j or else decrement k
5. Return ans

### Code

```c
int n = nums.size();
int ans = nums[0] + nums[1] + nums[2];
if(n < 3) return 0;

sort(nums.begin(), nums.end());

for(int i = 0; i < n; i++){
  int j = i + 1;
  int k = n - 1;

  while(j < k){
    int sum = nums[i] + nums[j] + nums[k];
    if(sum == target){
      j++;
      k--;
    }
    if(abs(sum-target) < abs(ans-target)){
      ans = sum;
    }
    if(sum < target){
      j++;
    }
    else {
      k--;
    }
  }
}

return ans;
```

### Space and Time Complexity

- TC: O(N^2) - Since we have two loops
- SC: O(1) - We are not using any extra space

---

## Question 4

### Algorithm

1. Perfrom binary search and return the value of mid. Calculate mid outside of the while loop

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

## Question 5

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

## Question 6

### Algorithm

1. Iterate over the array and store the elment and its fequency in the map
2. Iterate over the map and look for the element having frequency equal to 1 and return it
3. If not found, return -1

### Code

```c
unordered_map<int,int> mpp;

for(auto x: nums){
  mpp[x]++;
}

for(auto x: mpp){
  if(x.second == 1)
    return x.first;
}

return - 1;
```

### Space and Time Complexity

- TC: O(n) - Since we are traversing array of size n
- SC: O(n) - Since wer are using map

---

// Q2 is 4 sum problem
// Q3 is already discussed in live class
// Q7 need to solve by myself
// Q8 leetcode premium problem
