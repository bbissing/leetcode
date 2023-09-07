/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

const getTargetCopy = function(original, cloned, target) {
  let result;

  function traverse(root) {
    if (root !== null) {
      if (root.val === target.val) {
        result = root;
      }
      
      traverse(root.left);
      traverse(root.right);
    }
  }

  traverse(cloned);

  return result;
};