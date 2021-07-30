/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
  if (!head) {
      return null;
  }
  if (!head.next) {
      return head;
  }
  let newHead = head.next;
  while (head.next.next) {
      let thirdCopy = head.next.next;
      let fourthCopy = head.next.next.next;

      head.next.next = head;
      if (fourthCopy) {
          head.next = fourthCopy;
      } else {
          head.next = thirdCopy;
      }
      head = thirdCopy;
      if (!head.next) {
          return newHead;
      }

  }
  head.next.next = head;
  head.next = null;
  return newHead;
};

//              3
//              |
//              v
//    2 -> 1 -> 4 -> 5 -> 6
//  2 -> 1 -> 3 -> 4