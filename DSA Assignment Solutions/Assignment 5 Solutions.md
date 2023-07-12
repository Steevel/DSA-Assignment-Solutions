# Day 5 Solutions - 1, 2, 3, 4, 5, 6, 7

## Question 1

### Algorithm

1. Check if the length of the input array is equal to product of given m and n values. If not return empty 2d array
2. If it is equal intialize a 2d result array of m rowsn and n columns
3. Iterate through the input array and place each element at the appropriate position in result array by calculating the row and column indices of that element in the result array using the formula [i/columns][i%columns]
4. Return the result array

### Code

```java
if(original.length != m*n) return new int[][]{};

int[][] res = new int[m][n];

for(int i = 0; i < original.length; i++){
    res[i/n][i%n] = original[i];
}

return res;
```

### Space and Time Complexity

- TC: O(n) - Since we are iterating over the input array
- SC: O(1) - Since we are not using any extra space

---

## Question 2

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

## Question 3

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

## Question 4

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

## Question 5

### Algorithm

1. Sort arr2 and intialize the distance
2. Iterate over arr1 an check if the current element(val) check if there is any elment in arr2 in the range val-d and val+d using binary search
3. If not found increment the distance
4. return the distance

### Code

```java
public int findTheDistanceValue(int[] arr1, int[] arr2, int d) {
  Arrays.sort(arr2);
  int distance  = 0;
  for(int i = 0; i < arr1.length; i++){
    if(notInRange(arr2, arr1[i]-d, arr1[i]+d)){
      distance++;
    }
  }

  return distance;
}

public static boolean notInRange(int[] arr, int from, int to){
  int start = 0;
  int end = arr.length - 1;

  while(start <= end){
    int mid = start + (end - start)/2;
    if(arr[mid] >= from && arr[mid] <= to){
      return false;
    } if(arr[mid] < from){
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return true;
}
```

### Space and Time Complexity

- TC: O(nlogn) - Since are are sorting the array using inbuilt function
- SC: O(1) - Since we are not using any extra space

---

## Question 6

### Algorithm

1. Each element in the input array lies between 1 and length of the array. That means each element minus 1(a[i] - 1) also indicates a index in the array.
2. We need to iterate over the array and calculate the index. Go to that index and make it -ve. If you already encounter a negative value that means that particular number existed in the array before
3. If the element is negative add it the result array and return it

### Code

```java
List<Integer> res = new ArrayList<>();
for(int i = 0; i < nums.length; i++){
  int index = Math.abs(nums[i]) - 1;
  if(nums[index] < 0){
    res.add(index+1);
  }
  nums[index] = -nums[index];
}

return res;
```

### Space and Time Complexity

- TC: O(n) - Since we iterate over the array only once
- SC: O(1) - Since we are not using extra space to find the duplicate element

---

## Question 7

### Algorithm

1. Initialize start and end pointers
2. while start less than or equal to end calculate mid
3. If mid is greater than 0 and arr[mid] < arr[mid-1] then return arr[mid]
4. else check if the left part is sorted and right part is not sorted. If yes set start to mid +  1 to search in right part
5. else set mid - 1 to search in left part
6. return arr[start]

### Code

```java
if(nums.length == 0) return -1;
if(nums.length == 1) return nums[0];
int start = 0, end = nums.length - 1;

while(start <= end){
  int mid = start + (end - start)/2;
  
  if(mid > 0 && nums[mid] < nums[mid-1]){
    return nums[mid];
  } else if(nums[start] <= nums[mid] && nums[mid] > nums[end]){
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

return nums[start];
```

### Space and Time Complexity

- TC: O(logn) - Since we use binary search
- SC: O(1) - Since we do not use any extra space

---

## Question 8

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
