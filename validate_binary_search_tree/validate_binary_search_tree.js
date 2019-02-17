const validateBinarySearchTree = (root) => {
  return validateBTree(root, -Infinity, Infinity);
};

const validateBTree = (root, min, max) => {
  if (!root) {
    return true;
  }

  if (root.val <= min || root.val >= max) {
    return false;
  }

  return (
    validateBTree(root.left, min, root.val) &&
    validateBTree(root.right, root.val, max)
  );
};

module.exports = validateBinarySearchTree;
