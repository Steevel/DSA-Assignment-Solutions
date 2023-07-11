# Day 13 Solutions - 1, 2, 5, 6, 7

## Question 1

### Algorithm

1. Initialize pointers p1 and p2 to head1 and head2 of the linked lists
2. while p1 is not equal to null check if data of p1 is smaller than data of p2
3. If yes assign data of p2 to p1 and increment p1 and p2
4. else increment p1 and p2

### Code

```java
Node p1 = head1, Node p2 = head2;

while(p1 != null){
  if(p1.data < p2.data){
    p1.data = p2.data;
    p1 = p1.next;
    p2 = p2.next;
  } else {
    p1 = p1.next;
    p2 = p2.next;
  }
}

return p1;
```

### Space and Time Complexity

- TC: O(N) - The loop runs N times in the worst case
- SC: O(1) - We are not using any extra space

---

## Question 2

### Algorithm

1. Initialize current node to the head of the linked list
2. If the value of current node is not equal to the value of next node assign current node to the next node
3. Else assign currNode.next = currNode.next.next
4. return head

### Code

```java
ListNode currNode = head;

while(currNode != null && currNode.next!=null){
  if(currNode.val != currNode.next.val){
    currNode = currNode.next;
  }else {
    currNode.next = currNode.next.next;
  }
}

return head;
```

### Space and Time Complexity

- TC: O(N) - The loop runs N times in the worst case
- SC: O(1) - We are not using any extra space

---

## Question 5

### Algorithm

1. Initialize current node with head of the LL
2. if current node is not equal to null and currentNode.next is not equal to null check if the currentNode.next is equal to target. if yes store the referece of that node in temp and move currentNode
3. if the last occurrence of the target is the last node of the LL make temp.next = null
4. else if the last occurrence of the target is not the last node of the LL make temp.next = temp.next.next
5. return head

### Code

```java
Node currNode = head;
Node temp;

while(currNode != null && currNode.next != null){
  if(currNode.next == target){
    temp = currNode;
  }
  currNode = currNode.next;
}

// If the last occurence of the target is at the last node
if(temp.next.next == null){
  temp.next = null;
  return head;
}

// If the last occurence of the target is not at the last node
if(temp.next.next != null){
  temp.next = temp.next.next;
}

return head;
```

### Space and Time Complexity

- TC: O(N) - The loop runs N times in the worst case
- SC: O(1) - We are not using any extra space

---

## Question 6

### Algorithm

1. if list1 is null retur list2 and if list2  is null retur list1
2. Otherwise check if the value of list1 is less than or equal to the value of list2. If yes call mergeTwoLists recursively using list1.next node and list2. return list 1
3. else call mergeTwoLists recursively using list1 and next node of list2. return list 2

### Code

```java
if(list1 == null)
  return list2;
if(list2 == null)
  return list1;

if(list1.val <= list2.val){
  list1.next = mergeTwoLists(list1.next, list2);
  return list1;
} else {
  list2.next = mergeTwoLists(list1, list2.next);
  return list2;
}
```

### Space and Time Complexity

- TC: O(N) - The loop runs N times in the worst case
- SC: O(1) - We are not using any extra space

---

## Question 7

### Algorithm

1.

### Code

```java

```

### Space and Time Complexity

- TC: O(N) - The loop runs N times in the worst case
- SC: O(1) - We are not using any extra space

---
