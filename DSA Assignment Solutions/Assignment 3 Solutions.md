# Day 3 Solutions

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

## Question 2

### Algorithm

1. Sort the give array
2. Initialize pointer i at 0th position. start iterating over the array. if i is not at 0th postion and the current arr[i] is equal to arr[i-1] then continue(basically avoid duplicates)
3. Initialize pointer j at i+1th position. start iterating from i+1 till n. if there are duplicates skip them as above
4. Initialize 2 more poiters k at j+1th position and l at n-1th postion. while k < l check if arr[i]+arr[j]+arr[k]+arr[l] is equal to the target. If yes add it to the answer and increment k and cecrement l. After incrementing/decrementing k and l check if they are equal to k-1 and l+1(checking for duplicates). If yes increment/decrement them untill the values are not duplicate
5. If the sum is greater than the target increment k else decrement l
6. return answer

### Code

```java
int n = nums.length; // size of array
List<List<Integer>> ans = new ArrayList<>();

// sort the give array
Arrays.sort(nums);

for(int i = 0; i < n; i++){
  // avoid the duplicates while moving i:
  if(i > 0 && nums[i] == nums[i-1]) continue;
  for(int j = i + 1; j < n; j++){
    // avoid the duplicates while moving j:
    if(j > i+1 && nums[j] == nums[j-1]) continue;

    // 2 pointers
    int k = j + 1;
    int l = n - 1;
    while(k < l){
      long sum = nums[i];
      sum += nums[j];
      sum += nums[k];
      sum += nums[l];

      if(sum == target){
        List<Integer> temp = new ArrayList<>();
        temp.add(nums[i]);
        temp.add(nums[j]);
        temp.add(nums[k]);
        temp.add(nums[l]);
        ans.add(temp);
        k++;
        l--;

        // skip duplicates
        while(k < l && nums[k] == nums[k-1]) k++;
        while(k < l && nums[l] == nums[l+1]) l--;
      } else if(sum < target) k++;
      else l--;
    }
  }
}

return ans;
```

### Space and Time Complexity

- TC: O(n^3) - n^2 for the 2 loops and n for looping between k and l
- SC: O(1) - since we are not using any extra space to solve the problem. However, we are using linear space O(n) to return the answer

---

## Question 3

### Algorithm

1. initialize a variable idx with -1
2. Find an element such that arr[i] < arr[i+1]. If the element is found then store index i in the variable idx and break out of the loop
3. If idx is -1 (i.e. arr[i] < arr[i+1] condition is not met) it means that the array is in decreasing order and it is the maximum permutation possible with the given array of numbers. In this case the next permutation will be the first permutation which is obtained by reversing the entire array
4. If idx is not -1, then find the element from the end which is just greater than arr[idx] and swap both elements.
5. After swapping reverse the elements from `idx+1` to n

### Code

```java
public void nextPermutation(int[] nums) {
  int n = nums.length;

  int index = -1;

  // Step1: Find an element such that arr[i] < arr[i+1]
  for(int i = n - 2; i >= 0; i--){
    if(nums[i] < nums[i+1]){
      index = i;
      break;
    }
  }

  if(index == -1){ // EDGE CASE: If all the elements are in decreasing order index will be -1.
      // the next permutation is the reverse of the given array
      reverse(nums, 0, n-1);
  } else {

    // Step2: Find the element which is just greater than the element at index from the end
    for(int i = n - 1; i >= 0; i++){
      if(nums[i] > nums[index]){
        swap(nums, i, index);
        break; 
      }
    }

    // Step 3: Reverse the array from index+1 to n
    reverse(nums, index+1, n-1);
  }
}
```

### Space and Time Complexity

- TC: O(N) - Since we are iterating over the array
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

## Question 7

### Algorithm

1. Check if the array is empty. If yes return [low, high]
2. if arr[0] > low add [low, arr[0]-1] to the ans
3. Iterate from 1 to n. check if difference between arr[i]-arr[i-1] is greater than 1. if yes add arr[i] - 1 and arr[i-1]+1 to the ans
4. Check if the last element of the array is less than high if yes add [arr[n-1]+1, high] to the ans
5. Return the ans

### Code

```java
private static ArrayList<Integer> addToAns(int num1, int num2){
  ArrayList<Integer> temp = new ArrayList<>();
  temp.add(num1);
  temp.add(num2);
  return temp;
}
    
public static void main (String[] args) {
  ArrayList<ArrayList<Integer>> ans = new ArrayList<>();
  int [] nums = {0,1,3,50,75};
  int n = nums.length;
  int low = 0, high = 99;
  
  // If the array is empty
  if(n == 0){
    ans.add(addToAns(low, high));
  }
  
  // If first element is greater than low
  if(nums[0] > low){
    ans.add(addToAns(low, nums[0]-1));s
  }
  
  for(int i = 1; i < n; i++){
    int a = nums[i-1], b = nums[i];
    if(b-a > 1){
      ans.add(addToAns(a+1, b-1));
    }
  }
  
  // If last element is smaller than high
  if(nums[n-1] < high){
    ans.add(addToAns(nums[n-1]+1, high));
  }
  
  System.out.println(ans);
}
```

### Space and Time Complexity

- TC: O(n) - Since we are traversing array of size n
- SC: O(1) - Since wer are not using any extra space

---

## Question 8

### Algorithm

1. Initialize a boolean flag
2. Iterate over the given intervals array from 0 to n-1 and check if the second value of the current interval is greater than the first value of the next interval. If yes then make the flag false and break the loop
3. Check if the flag is true, if yes print true else print false

### Code

```java
public static void main (String[] args) {
//   int[][] intervals = {{0, 30},{5, 10},{15, 20}}; // false
  int[][] intervals = {{10, 30},{40, 50},{75, 90}}; // true
  
  boolean flag = true;
  
  for(int i = 0; i < intervals.length-1; i++){
      if(intervals[i][1] > intervals[i+1][0]){
          flag = false;
          break;
      }
  }
  
  if(flag){
      System.out.println("true");
  } else {
      System.out.println("false");
  }
 }
```

### Space and Time Complexity

- TC: O(n) - Since we are traversing array of size n
- SC: O(1) - Since wer are not using any extra space

---
