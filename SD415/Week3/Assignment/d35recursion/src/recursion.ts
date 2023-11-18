export {
  sumTo,
  factorial,
  fibonacci,
  outputList,
  outputListLoop,
  reverseList,
  reverseListLoop,
  TreeNode,
  sumTreeValues,
  List,
};

type List = {
  value: number;
  next: List | null;
};

type TreeNode = {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

function sumTo(n: number): number {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function fibonacci(n: number): number {
  if (n < 0) return 0;
  else if (n <= 1) return n;
  else return fibonacci(n - 2) + fibonacci(n - 1);
}

function outputList(node: List): string {
  let str = "";
  outputListRecursive(node);
  return str;

  function outputListRecursive(list: List | null) {
    if (list) {
      str += list.value;
      if (list.next) outputListRecursive(list.next);
    }
  }
}

function outputListLoop(node: List): string {
  let result: string = "";
  outputListLoopIterative(node);
  return result;

  function outputListLoopIterative(list: List | null): void {
    while (list) {
      console.log(list.value);
      result += list.value;
      list = list.next;
    }
  }
}

function reverseList(node: List): string {
  let result: string = "";
  reverseListRecursive(node);
  return result;

  function reverseListRecursive(list: List | null) {
    if (list) {
      if (list.next) reverseListRecursive(list.next);
      result += list.value;
    }
  }
}

function reverseListLoop(node: List): string {
  let result = "";
  innerFun(node);
  return result;

  function innerFun(list: List) {
    if (list.next) {
      innerFun(list.next);
    }
    result += list.value;
  }
}

function sumTreeValues(treeNode: TreeNode | null): number {
  if (treeNode === null) return 0;
  const calLeftBranch = sumTreeValues(treeNode.left as TreeNode);
  const callRightBranch = sumTreeValues(treeNode.right as TreeNode);

  return treeNode.value + calLeftBranch + callRightBranch;
}
