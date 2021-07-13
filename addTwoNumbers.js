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
 var addTwoNumbers = function(l1, l2) {
  let head = new ListNode(0);
  let node = head;
  let carry = 0;

  while (l1 || l2) {
      let l1Value = l1 ? l1.val : 0;
      let l2Value = l2 ? l2.val : 0;


      let sum = l1Value + l2Value + carry;

      if (sum > 9) {
          carry = 1;
      } else {
          carry = 0;
      }

      node.next = new ListNode(sum % 10);
      node = node.next;

      if (l1) {
          l1 = l1.next;
      }
      if (l2) {
          l2 = l2.next;
      }
  }

  if (carry === 1) {
      node.next = new ListNode(carry);
  }

  return head.next;
  // loop through array copies backwords, construct a number out of them
  // add the two numbers together
  // return the sum
};

let input1 = new ListNode(2);
input1.next = new ListNode(4);
input1.next.next = new ListNode(3);

let input2 = new ListNode(5);
input2.next = new ListNode(6);
input2.next.next = new ListNode(4);

console.log(addTwoNumbers(input1, input2));