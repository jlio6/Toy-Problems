/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 var removeNthFromEnd = function(head, n) {
  let dummy = head;
  let headCopy = head;
  for (let i = 1; i <= n; i++) {
      head = head.next;
  }
  let tailCopy = head;
  if (tailCopy) {
      while (tailCopy.next) {
          tailCopy = tailCopy.next;
          headCopy = headCopy.next;
      }
  } else {
      return dummy.next;
  }
  headCopy.next = headCopy.next.next;

  return dummy;

};