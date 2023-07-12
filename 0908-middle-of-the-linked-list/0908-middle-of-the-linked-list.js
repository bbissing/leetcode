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
var middleNode = function(head) {
    var arr = [];
    var result;

    var innerFunc = function(value) {
      if (value === null) {
        return;
      } else {
        var temp = value.next;
        arr.push(value);
        innerFunc(temp);
      }
    }
    
    innerFunc(head);
    result = arr[Math.floor(arr.length/2)];
    return result;
};