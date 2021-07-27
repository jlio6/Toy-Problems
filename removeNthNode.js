/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}

 From head, go all the way to the tail
    while node.next
        node = node.next

 Reverse linked list
 start from head and go next until n - 1
 head.next = head.next.next
 Reverse linked list again and return

 */

 var removeNthFromEnd = function(head, n) {

  const reverseLinkedList = (head) => {
      if (!head) {
          return null;
      }
      if (!head.next) {
          return head;
      }
      let prev = null;
      let current = head;
      let next = current.next;

      while (next) {
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
      }
      return prev;
  }

  head = reverseLinkedList(head);
  console.log(head);
  let headCopy = head;
  if (n === 1) {
      head = head.next;
      headCopy = head;
  } else {
      for (let i = 1; i < n - 1; i++) {
          head = head.next;
      }
      head.next = head.next.next;
  }

  return reverseLinkedList(headCopy);

};