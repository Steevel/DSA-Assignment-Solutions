# Day 12 Solutions - 2,3

## Question 1

### Algorithm

1. If there is only one node, return null.
2. Otherwise, initialize two pointers slow and fast, with slow pointing to head and fast pointing to the second successor node of head.
3. While neither fast and fast.next is null:
   - we move fast forward by 2 nodes.
   - we move slow forward by 1 node.
4. Now slow is the predecessor of the middle node, delete the middle node.
5. Return head.

### Code

```java
// Edge case: If there is only one element in the LL
if(head.next == null){
  return null;
}

ListNode slow = head;
ListNode fast = head.next.next;

while(fast != null && fast.next != null){
  slow = slow.next;
  fast = fast.next.next;
}

slow.next = slow.next.next;
return head;
```

### Space and Time Complexity

- TC: O(N) - The loop runs N times in the worst case
- SC: O(1) - We are not using any extra space

---

## Question 2

### Algorithm

1. Initialize slow and fast pointer to head node
2. while fast pointer is not equal to null (it has exceeded the last node) or the node next to fast is not equal to null (in this case fast is at the last node) move slow pointer by one node and fast pointer by 2 nodes
3. If at any instance slow becomes equal to fast then loop exists so return true
4. If not return false

### Code

```java
ListNode slow = head;
ListNode fast = head;

while(fast != null && fast.next != null){
  slow = slow.next;
  fast = fast.next.next;
  if(slow == fast)
    return true;
}

return false;
```

### Space and Time Complexity

- TC: O(N) - The loop runs N times in the worst case
- SC: O(1) - We are not using any extra space

---

## Question 3

### Algorithm

1. Initialize slow and fast pointer to head node
2. Travese till N. if at any instance fast becomes null then return false(because N is greater than the size of the LL) else keep moving fast pointer by one node
3. Untll fast pointer is not pointing to null move slow and fast pointer by one node
4. When fast pointer is pointing to null the slow pointer will be pointing to N'th node from the end. return data of that node

### Code

```java
Node fast = head;
Node slow = head;

for(int i = 0; i < n; i++){
  if(fast == null) return -1;
  fast = fast.next;
}

while(fast != null){
  slow = slow.next;
  fast = fast.next;
}

return slow.data;
```

### Space and Time Complexity

- TC: O(N) - The loop runs N times in the worst case
- SC: O(1) - We are not using any extra space

---

## Question 4

### Algorithm

1. Find the middle node using slow fast method
2. Reverse the second half of the linked list
3. Iterate from front and back of the linked list and check if all nodes match
    - If yes, it is a palindrome. return true
    - If no, it is not a palindrome. return false

### Code

```java
// Step 1 - Find the middle
ListNode slow = head;
ListNode fast = head;

while(fast != null && fast.next != null){
  slow = slow.next;
  fast = fast.next.next;
}

// Step 2 - Reverse second half of the list
ListNode prev = slow;
slow = slow.next;
prev.next = null;

while(slow != null){
  ListNode temp = slow.next;
  slow.next = prev; // reverse the link
  prev = slow;
  slow = temp;
}

// Step 3 - Traverse and check
fast = head; // fast at start
slow = prev; // slow at last

while(slow != null){
  if(slow.val != fast.val)
    return false;
  slow = slow.next;
  fast = fast.next;
}

return true;
```

### Space and Time Complexity

- TC: O(N) - The loop runs N times in the worst case
- SC: O(1) - We are not using any extra space

---

## Question 5

### Algorithm

1. Check if there is a loop in the linked list. If not return head
2. If loop exists check slow(node where loop is detected) is equal to head. If yes make the next of previous node null and return head
3. Else find the first node of the loop by moving slow and head by 1 step. They will always meet at the first node of the loop
4. Make the next of the node previous to the first node as null and return head

### Code

```java
Node slow = head;
Node fast = head;
Node prev = slow;

// Step 1: Check if there is a loop
while(fast != null && fast.next != null){
  prev = slow;
  slow = slow.next;
  fast = fast.next.next;
  if(slow == fast)
    break;
}

if(fast == null || fast.next == null){
  return head;
}

// Step 2: Find the first node of the loop and make the next of the previous node equal to null
Node currNode = head;

// EDGE CASE: The loop is formed at the head.
if(slow == currNode){
  prev.next = null;
  return head;
}
  

while(currNode != slow){
  prev = slow;
  slow = slow.next;
  currNode = currNode.next;
}

prev.next = null;

return head;
```

### Space and Time Complexity

- TC: O(N) - The loop runs N times in the worst case
- SC: O(1) - We are not using any extra space

---

## Question 6

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC: O(N) - The loop runs N times in the worst case
- SC: O(1) - We are not using any extra space

---

## Question 8

### Algorithm

1. Initialize currentNode

### Code

```java
Node currNode = head.next;

while(currNode != null){
  if(currNode.next == head){
    return true;
  }
  currNode = currNode.next;
}

return false;
```

### Space and Time Complexity

- TC: O(N) - The loop runs N times in the worst case
- SC: O(1) - We are not using any extra space

---
