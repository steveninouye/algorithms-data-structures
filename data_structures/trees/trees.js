"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var nodes_1 = require("../nodes/nodes");
var BinaryTreeNode = /** @class */ (function (_super) {
    __extends(BinaryTreeNode, _super);
    function BinaryTreeNode(val) {
        var _this = _super.call(this, val) || this;
        _this.left = null;
        _this.right = null;
        return _this;
    }
    return BinaryTreeNode;
}(nodes_1.Node));
exports.BinaryTreeNode = BinaryTreeNode;
