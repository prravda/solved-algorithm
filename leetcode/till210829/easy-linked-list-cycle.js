// the number of input: 0~10000
// val 이 모두 다른 수라는 보장은 없음
// ListNode.val === 0 이 될 때까지 반복문을 도는 경우, cyclic 한 경우에선 벗어날 수 없음
// val 이 undefined 이지만 next 가 존재할 수 있음
// Node.val 이 10^5 에서 -10^5 이니, Node.val 로 주어질 수 없는 수를 넣어주고 초기화 하면 될 듯
// 문제 review
// 나같은 경우는 재귀를 쓰긴 했는데, 하위 20%의 속도가 나왔다. 다른 사람들은 어떻게 풀었을까?
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
var hasCycle = function (head) {
    var checkerNumber = Math.pow(10, 5) + 1;
    var searchNode = function (node) {
        // if node.next is null -> return false
        if (node === null || node.next === null) {
            return false;
        }
        // if node.val is same with checkerNumber -> return true
        if (node.val === checkerNumber) {
            return true;
        }
        // if next node exist -> mark this node value as the checkerNumber
        if (node.next && node.next !== null) {
            node.val = checkerNumber;
        }
        return searchNode(node.next);
    };
    return searchNode(head);
};
