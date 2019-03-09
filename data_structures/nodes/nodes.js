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
var Node = /** @class */ (function () {
    function Node(val) {
        val = val === null || val === undefined ? null : val;
        this.val = val;
    }
    return Node;
}());
exports.Node = Node;
var SinglyLinkNode = /** @class */ (function (_super) {
    __extends(SinglyLinkNode, _super);
    function SinglyLinkNode(val) {
        var _this = _super.call(this, val) || this;
        _this.next = null;
        return _this;
    }
    return SinglyLinkNode;
}(Node));
exports.SinglyLinkNode = SinglyLinkNode;
var DoublyLinkNode = /** @class */ (function (_super) {
    __extends(DoublyLinkNode, _super);
    function DoublyLinkNode(val) {
        var _this = _super.call(this, val) || this;
        _this.prev = null;
        return _this;
    }
    DoublyLinkNode.prototype.remove = function () {
        var _a = this, prev = _a.prev, next = _a.next;
        if (this.next)
            this.next.prev = prev;
        if (this.prev)
            this.prev.next = next;
        this.next = null;
        this.prev = null;
        return this;
    };
    return DoublyLinkNode;
}(SinglyLinkNode));
exports.DoublyLinkNode = DoublyLinkNode;
