/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  // I: two linked lists (sorted integers)
  // O: single linked list (integers sorted)
  // C: integers only, linear time, O(n), n is the size of both linked lists
  // E: no empty lists,

  // initialize listNode
  let copy = new ListNode();
  let head = copy;
  // run while loop as long as both lists have current values
  while (l1 && l2) {
      head.next = new ListNode();
      head = head.next;
      if (l1.val >= l2.val) {
          head.val = l2.val;
          l2 = l2.next;
      } else {
          head.val = l1.val;
          l1 = l1.next;
      }

  // lets compare the current node at list1 and current node at list 2
  // if current1 value is greater than current2 value
      // assign current2 value to new linked list
      // current2 value is now next
  // otherwise if current1 value is less than current2 value
      // assign current1 value to new linkedlist
      // current1 value is now next
  }

  // while list1 current val exists or list2 current val exists
  while (l1 || l2) {
      head.next = new ListNode();
      head = head.next;
      if (l1) {
          head.val = l1.val;
          l1 = l1.next;
      } else {
          head.val = l2.val;
          l2 = l2.next;
      }

  }
      // add remaining nodes to linked list
      // if current1 val exists, assign current1 val
      // current1 is now next
      // if current2 val exists, assign current2 val
      // current2 is now next

  // return linked lists next
  return copy.next;
};