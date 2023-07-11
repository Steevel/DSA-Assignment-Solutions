# Day 11 Solutions - 5, 7, 8

## Question 5

### Algorithm

1. Sort both the arrays and intialize 2 pointers one for each array
2. when the pointers are within the bounds of the arrays check if the element at i is equal to the element at j. If yes store it in a set
3. else if element at i is smaller than the element at j increment i else increment j
4. Iterate over the set and add the element to the result array
4. return the result array

### Code

```java
Arrays.sort(nums1);
Arrays.sort(nums2);
int i = 0, j = 0, n = nums1.length, m = nums2.length;

HashSet<Integer> set = new HashSet<>();

while(i < n && j < m){
  if(nums1[i] == nums2[j]){
    set.add(nums1[i]);
    i++; j++;
  }else if(nums1[i] < nums2[j]){
    i++;
  } else {
    j++;
  }
}

int[] res = new int[set.size()];
int k = 0;
for(int item: set){
  res[k] = item;
  k++;
}

return res;
```

### Space and Time Complexity

- TC:
- SC:

---

## Question 7

### Algorithm

1. Find the first occurrence by searching the first half of the array using binary search
2. Find the last occurrence by searching the second half of the array using binary search
3. add both the indices to the result array and return the result array

### Code

```java
public int firstOccurence(int[] nums,int n, int target){
  int start = 0, end = n-1, ans = -1;

  while(start <= end){
    int mid = start + (end - start) / 2;
    if(nums[mid] == target){
      ans = mid;
      end = mid - 1;
    } else if(nums[mid] > target){
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return ans;
}

public int lastOccurence(int[] nums,int n, int target){
  int start = 0, end = n-1, ans = -1;

  while(start <= end){
    int mid = start + (end - start) / 2;
    if(nums[mid] == target){
      ans = mid;
      start = mid + 1;
    } else if(nums[mid] > target){
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return ans;
}

public int[] searchRange(int[] nums, int target) {
  int[] ans = new int[2];
  int n = nums.length;

  int first = firstOccurence(nums, n, target);
  int last = lastOccurence(nums, n, target);

  ans[0] = first;
  ans[1] = last;
  
  return ans;
}
```

### Space and Time Complexity

- TC: O(log n) since we are using binary search
- SC: O(1) since we are not using any extra space

---

## Question 8

### Algorithm

1. Sort both the arrays and intialize 2 pointers one for each array
2. when the pointers are within the bounds of the arrays check if the element at i is equal to the element at j. If yes store it in the result array
3. else if element at i is smaller than the element at j increment i else increment j
5. return the result array

### Code

```java
Arrays.sort(nums1);
Arrays.sort(nums2);
int i = 0, j = 0, n = nums1.length, m = nums2.length;

ArrayList<Integer> ans = new ArrayList<>();

while(i < n && j < m){
  if(nums1[i] == nums2[j]){
    ans.add(nums1[i]);
    i++; j++;
  }else if(nums1[i] < nums2[j]){
    i++;
  } else {
    j++;
  }
}

int[] res = new int[ans.size()];
for(int k = 0; k < ans.size(); k++){
  res[k] = ans.get(k);
}

return res;
```

### Space and Time Complexity

- TC:
- SC:

---
