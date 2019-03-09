"use strict";
exports.__esModule = true;
var trees_1 = require("../../data_structures/trees/trees");
exports.validateMaxMin = function (root, max, min) {
    if (root === null)
        return true;
    if (root.val > max || root.val < min)
        return false;
    var left = exports.validateMaxMin(root.left, root.val, min);
    if (left === false)
        return false;
    var right = exports.validateMaxMin(root.right, max, root.val);
    if (right === false)
        return false;
    return true;
};
exports.validateBinarySearchTree = function (root) {
    var left = exports.validateMaxMin(root.left, root.val, -Infinity);
    if (left === false)
        return false;
    var right = exports.validateMaxMin(root.right, Infinity, root.val);
    if (right === false)
        return false;
    return true;
};
var tree = new trees_1.BinaryTreeNode(2);
tree.left = new trees_1.BinaryTreeNode(1);
tree.right = new trees_1.BinaryTreeNode(3);
console.log(exports.validateBinarySearchTree(tree));
