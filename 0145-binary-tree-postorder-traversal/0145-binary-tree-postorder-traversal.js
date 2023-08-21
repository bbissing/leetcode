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
var postorderTraversal = function(root) {
  var arr = [];
  var firstElement;

  if (root !== null) {
    // console.log('root val:', root['val']);
    var innerFunc = (root) => {
      // arr.push(root.val);
      if (root.left === null && root.right === null) {
        arr.push(root.val);
        return;
      }
      
      if (root.left !== null) {
        innerFunc(root.left);
      }

      if (root.right !== null) {
        innerFunc(root.right);
      }

      arr.push(root.val);
    }

    innerFunc(root);
  }

  // console.log('arr: ', arr.reverse());
  // firstElement = arr.shift();
  // arr.push(firstElement);
  return arr;
};