export { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop, sumTreeValues, };
function sumTo(n) {
    if (n == 1)
        return 1;
    return n + sumTo(n - 1);
}
function factorial(n) {
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}
function fibonacci(n) {
    if (n < 0)
        return 0;
    else if (n <= 1)
        return n;
    else
        return fibonacci(n - 2) + fibonacci(n - 1);
}
function outputList(node) {
    let str = "";
    outputListRecursive(node);
    return str;
    function outputListRecursive(list) {
        if (list) {
            str += list.value;
            if (list.next)
                outputListRecursive(list.next);
        }
    }
}
function outputListLoop(node) {
    let result = "";
    outputListLoopIterative(node);
    return result;
    function outputListLoopIterative(list) {
        while (list) {
            console.log(list.value);
            result += list.value;
            list = list.next;
        }
    }
}
function reverseList(node) {
    let result = "";
    reverseListRecursive(node);
    return result;
    function reverseListRecursive(list) {
        if (list) {
            if (list.next)
                reverseListRecursive(list.next);
            result += list.value;
        }
    }
}
function reverseListLoop(node) {
    let result = "";
    innerFun(node);
    return result;
    function innerFun(list) {
        if (list.next) {
            innerFun(list.next);
        }
        result += list.value;
    }
}
function sumTreeValues(treeNode) {
    if (treeNode === null)
        return 0;
    const calLeftBranch = sumTreeValues(treeNode.left);
    const callRightBranch = sumTreeValues(treeNode.right);
    return treeNode.value + calLeftBranch + callRightBranch;
}
