# Mock Test 1 - C++

## Question 1 code

```c
int i = 0;

for(int j = 0; j < nums.size(); j++){
  if(nums[j] != 0){
    swap(nums[j] , nums[i]);
    i++;
  }
}
```

## Question 2 code

```c
unordered_map<char, int> mpp;

for(auto ch: s){
  mpp[s[ch]]++;
}

for(auto ch: mpp){
  cout<<ch<<" ";
}

return -1;
```
