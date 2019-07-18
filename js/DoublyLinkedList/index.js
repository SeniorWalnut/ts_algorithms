"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoublyListNode = (function () {
    function DoublyListNode(value) {
        this.val = value ? null : null;
        this.next = null;
        this.prev = null;
    }
    return DoublyListNode;
}());
var DoublyList = (function () {
    function DoublyList(val) {
        if (val === void 0) { val = null; }
        this.head = new DoublyListNode(val);
    }
    DoublyList.prototype.logForward = function () { };
    DoublyList.prototype.logBackwards = function () { };
    DoublyList.prototype.append = function (val) {
        var node = new DoublyListNode(val);
        if (!this.head) {
            this.head = node;
            node.prev = this.head;
        }
        else {
            var cur = this.head;
            while (this.head.next !== null)
                this.head = this.head.next;
            this.head.next = cur;
            cur.prev = this.head;
        }
    };
    DoublyList.prototype.insertAfter = function (val, index) {
        if (index === void 0) { index = 0; }
    };
    DoublyList.prototype.insertBefore = function (val, index) {
        if (index === void 0) { index = 0; }
    };
    DoublyList.prototype.delete = function (val) { };
    DoublyList.prototype.find = function (val) {
        return null;
    };
    return DoublyList;
}());
exports.DoublyList = DoublyList;
//# sourceMappingURL=index.js.map