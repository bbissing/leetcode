/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  var arr = [];

  if (root !== null) {
    var innerFunc = (root) => {
      arr.push(root.val);

      if (root.left !== null) {
        innerFunc(root.left);
      }

      if (root.right !== null) {
        innerFunc(root.right);
      }
    }

    innerFunc(root);
  }

  return arr;
};