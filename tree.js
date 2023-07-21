class Node {
  left = null
  right = null

  value = null

  constructor(value) {
    this.value = value
  }
}

function insert(root, value) {
  if (root === null) return new Node(value)

  if (value < root.value) {
    root.left = insert(root.left, value)
  } else if (value > root.value) {
    root.right = insert(root.right, value)
  }

  return root
}

function findMinValueNode(root) {
  if (root.left === null) return root

  return findMinValueNode(root.left)
}

function remove(root, value) {
  if (root === null) return null

  if (root.value > value) root.left = remove(root.left, value)
  else if (root.value < value) root.right = remove(root.right, value)
  else {
    if (root.left == null) {
      return root.right;
    } else if (root.right == null) {
      return root.left;
    } else {
      let minNode = minValueNode(root.right);
      root.value = minNode.value
      root.right = remove(root.right, minNode.value);
    }
  }

  return root
}


const root = new Node(12)


insert(root, 9)
insert(root, 8)
insert(root, 1)
insert(root, 15)
insert(root, 11)

console.log(root)
remove(root, 8)
console.log(root)