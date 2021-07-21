// 链表反转
var reverseList = function (head) {
  var prev = null;
  var cur = head;
  //   var next = null;

  while (cur !== null) {
    console.log(prev);
    var next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

// 数组中第 K 大的元素
var kthLargest = function (nums, k) {
  const quene = [];

  nums.forEach(num => {
    if (quene.length < k) {
      quene.push(num);
    } else {
      if (quene[0] <= num) {
        quene.push(num);
        quene.splice(0, 1);
      }
    }
    quene.sort((a, b) => a - b);
  });

  return quene[0];
};
