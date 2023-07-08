# Day 2 Solutions

## Question 1

### Algorithm

1. We need to form pairs (a,b) such that a <= b. The min element of the pair (i.e a) is added to the end of the sum where as max element is discarded.
2. Sort the given array. Initialize maxSum
3. Iterate over the sorted array and add min element to the maxSum. Increment the iterator by 2
4. return maxSum

### Code

```c
sort(nums.begin(), nums.end());
int maxSum = 0;

for(int i = 0; i < nums.size(); i+=2){
    maxSum += nums[i];
}

return maxSum;
```

### Space and Time Complexity

- TC: O(NlogN) - Since we are using built in sort funtion
- SC: O(logN) - Since we are using built in sort funtion

---

## Question 2

### Algorithm

1. Initialize a set
2. Loop over all the elements of the array and insert them into the set
3. Size of the set is nothing but the number of unique candies. array.size()/2 is the number of candies alice can eat
4. return the minimum number of unique candies

### Code

```c
unordered_set<int> uniqueCandiesSet;

for(auto candy: candyType){
  uniqueCandiesSet.insert(candy);
}

int totalCandyTypes = uniqueCandiesSet.size(); // Types of candies
int canEat = candyType.size() / 2; // Total candies Alice can eat

return min(totalCandyTypes, canEat);
```

### Space and Time Complexity

- TC: O(N) - We go over all the elements of the array
- SC: O(1) - We are not using any extra space

---

## Question 3

### Algorithm

1. Initialize map and insert all the elements and their frequencies into the map
2. Initialize ans with 0. Loop over the map and check if an element greater than the current element by one exists
3. If yes assign the maximum value between the current ans and frequency of current element + frequency of the element which is 1 greater than current element to sum
4. return the sum

### Code

```c
unordered_map<int, int> mpp;

for(auto x: nums){
  mpp[x]++;
}

int res = 0;
for(auto x: mpp){
  if(mpp.find(x.first+1) != mpp.end()){
    res = max(res, (x.second + mpp[x.first+1]));
  }
}

return res;
```

### Space and Time Complexity

- TC: O(N) - We go over all the elements of the array
- SC: O(N) - Since we are using map of size N

---

## Question 4

### Algorithm

1. Initialize count.
2. Check if the current plot is empty.
3. If yes chec whether the left and right plots of the current plot is empty. If yes return ture. If the left and right plots happens to be the first and last plots even then return true else return false.
4. If both plots are empty then change current plot to 1 and increment the count
5. If the count is greater than or equal to n return true
6. Else return false

### Code

```c
int count = 0;

for(int i = 0; i < flowerbed.size(); i++){
  if(flowerbed[i] == 0){ // check if current plot is empty
    bool emptyLeftPlot = (i == 0) || (flowerbed[i-1] == 0);// check if left plot is empty
    bool emptyRightPlot = (i == flowerbed.size()-1) || (flowerbed[i+1] == 0); // check if right plot is empty
    if(emptyLeftPlot && emptyRightPlot){
      flowerbed[i] = 1;
      count++;
      if(count >= n){
          return true;
      }
    }
  }
}

return count >= n;
```

### Space and Time Complexity

- TC: O(N) - We go over all the elements of the array
- SC: O(1) - We are not using any extra space

---

## Question 5

### Algorithm

1. We need to find 2 mininum and 3 maximum values inorder to find the maxproduct.Initialize min1, min2, max1, max2 and max3
2. Iterate over array. Compare each element with min1, min2, max1, max2 and max3 assign it to appropriately.
3. Return max(min1 \* min2 \* max3, max1 \* max2 \* max3)

### Code

```c
int min1 = INT_MAX, min2 = INT_MAX;
int max1 = INT_MIN, max2 = INT_MIN, max3 = INT_MIN;

for(auto n: nums)
{
  if(n <= min1){
      min2 = min1;
      min1 = n;
  } else if(n <= min2){
      min2 = n;
  } else if(n >= max1){
      max2 = max1;
      max3 = max2;
      max1 = n;
  } else if(n >= max2){
      max3 = max2;
      max2 = n;
  } else if(n >= max3){
      max3 = n;
  }
}

return max(min1 * min2 * max3, max1 * max2 * max3);
```

### Space and Time Complexity

- TC: O(N) - We go over all the elements of the array
- SC: O(1) - We are not using any extra space

---

## Question 6

### Algorithm

1. Initialize start and end pointers
2. while start less than or equal to end calculate index of middle element
3. if the middle element is equal to the target retutn  mid
4. if the middle element is greater than the target set end to mid - 1
5. if the middle element is less than the target set start to mid + 1
6. if the element is not found return -1

### Code

```c
int start = 0;
int end = nums.size() -1;

while(start <= end){
    int mid = start + (end - start) / 2;

    if(nums[mid] == target){
        return mid;
    } else if(nums[mid] > target){
        end = mid - 1;
    } else {
        start = mid + 1;
    }
}

return -1;
```

### Space and Time Complexity

- TC: O(logN) - The search space is halved at each iteration
- SC: O(1) - We are not using any extra space

---

## Question 7

### Algorithm

1. Check if first element of the array is less than the last element  
    a. If YES, the array is in increasing order. Loop over the array and check if any i'th element is less than i-1'th element. If yes it means that the all the elements are not in increasing order so return false  
    b. If NO, the array is in decreasing order. Loop over the array and check if any i'th element is greater than i-1'th element. If yes it means that the all the elements are not in decreasing order order so return false.
2. If above conditions are not satisfied return true

### Code

```c
int n = nums.size()-1;

if(nums[0] < nums[n]){
  for(int i = 1; i < nums.size(); i++){
    if(nums[i] < nums[i-1])
      return false;
  }
}else {
  for(int i = 1; i < nums.size(); i++){
    if(nums[i] > nums[i-1])
      return false;
  }
}

return true;
```

### Space and Time Complexity

- TC: O(N) - We go over all the elements of the array
- SC: O(1) - We are not using any extra space

---

## Question 8

### Algorithm

1. Initialize minimum and maximum value with the first element of the array
2. Iterate over the array and compare with current minimum and maximum value. Assign it to min and max respectively
3. We get least possible difference by stracting smallest possible large value (maxValue - k) from largest possible small value (minValue + k).
4. If the difference is greater than 0 return it otherwise return 0

### Code

```c
int n = nums.size();
int min_val = nums[0];
int max_val = nums[0];

for(int i = 0; i < n; i++){
    min_val = min(nums[i], min_val);
    max_val = max(nums[i], max_val);
}

if(min_val + k >= max_val - k){
    return 0;
} else {
    return (max_val - k) - (min_val + k);
}
```

### Space and Time Complexity

- TC: O(N) - We go over all the elements of the array
- SC: O(1) - We are not using any extra space

---
