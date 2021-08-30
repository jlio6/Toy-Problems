/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
  if (!root1 && !root2) {
      return null;
  }
  let newNode = new TreeNode();
  if (!root1 || !root2) {
      if (root1) {
          newNode.val = root1.val;
      } else {
          newNode.val = root2.val;
      }
  } else {
      newNode.val = root1.val + root2.val;
  }
  newNode.left = mergeTrees(root1 ? root1.left : null, root2 ? root2.left : null);
  newNode.right = mergeTrees(root1 ? root1.right : null, root2 ? root2.right : null);

  return newNode;
};