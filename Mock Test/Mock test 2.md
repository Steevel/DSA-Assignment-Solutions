# Mock Test 2 - Java

## Question 1 code

```java
class Solution {
  public int mySqrt(long x) {
    long l = 1;
    long r = x + 1;

    while (l < r) {
      final long m = (l + r) / 2;
      if (m > x / m)
        r = m;
      else
        l = m + 1;
    }

    // l: smallest number s.t. l * l > x
    return (int) l - 1;
  }
}

```

---

## Question 2 code

```java
class Solution {
  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode curr = dummy;
    int carry = 0;

    while (l1 != null || l2 != null || carry > 0) {
      if (l1 != null) {
        carry += l1.val;
        l1 = l1.next;
      }
      if (l2 != null) {
        carry += l2.val;
        l2 = l2.next;
      }
      curr.next = new ListNode(carry % 10);
      carry /= 10;
      curr = curr.next;
    }

    return dummy.next;
  }
}
```

---
