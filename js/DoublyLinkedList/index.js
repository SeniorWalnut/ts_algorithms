"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoublyListNode = (function () {
    function DoublyListNode(value) {
        this.val = value ? value : null;
        this.next = null;
        this.prev = null;
    }
    return DoublyListNode;
}());
var DoublyList = (function () {
    function DoublyList() {
        this.head = new DoublyListNode();
        this.tail = new DoublyListNode();
        this.headTailDefault();
    }
    DoublyList.prototype.headTailDefault = function () {
        this.head.next = this.tail;
        this.tail.prev = this.head;
    };
    DoublyList.prototype.logForward = function () {
        var cur = this.head;
        for (; cur; cur = cur.next) {
            console.log(cur.val);
        }
    };
    DoublyList.prototype.logBackwards = function () {
        var cur = this.tail;
        for (; cur; cur = cur.prev) {
            console.log(cur.val);
        }
    };
    DoublyList.prototype.insertStart = function (val) {
        var node = new DoublyListNode(val);
        if (!this.head.val) {
            this.head = node;
            this.headTailDefault();
        }
        else if (!this.tail.val) {
            this.tail = node;
            this.headTailDefault();
        }
        else {
            node.next = this.head;
            node.prev = null;
            this.head.prev = node;
            this.head = node;
        }
    };
    DoublyList.prototype.insertEnd = function (val) {
        var node = new DoublyListNode(val);
        if (!this.head.val) {
            this.head = node;
            this.headTailDefault();
        }
        else if (!this.tail.val) {
            this.tail = node;
            this.headTailDefault();
        }
        else {
            node.prev = this.tail;
            node.next = null;
            this.tail.next = node;
            this.tail = node;
        }
    };
    DoublyList.prototype.deleteStart = function () {
        if (!this.head.next) {
            this.deleteList();
        }
        else {
            this.head = this.head.next;
            this.headTailDefault();
            this.head.prev = null;
        }
    };
    DoublyList.prototype.deleteEnd = function () {
        if (!this.tail.prev) {
            this.deleteList();
        }
        else {
            this.tail = this.tail.prev;
            this.headTailDefault();
            this.tail.next = null;
        }
    };
    DoublyList.prototype.deleteList = function () {
        while (this.head) {
            this.head = this.head.next;
            if (this.head)
                this.head.prev = null;
        }
        this.head = null;
    };
    DoublyList.prototype.find = function (val) {
        return null;
    };
    return DoublyList;
}());
exports.DoublyList = DoublyList;
//# sourceMappingURL=index.js.map