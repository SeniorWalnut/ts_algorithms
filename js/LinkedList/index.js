"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListNode = (function () {
    function ListNode(val) {
        this.next = null;
        this.val = val ? val : null;
    }
    return ListNode;
}());
var List = (function () {
    function List(val) {
        this.head = new ListNode(val);
    }
    List.prototype.append = function (val) {
        if (!this.head)
            this.head = new ListNode(val);
        else {
            var current = this.head;
            while (current.next !== null)
                current = current.next;
            current.next = new ListNode(val);
        }
    };
    List.prototype.log = function () {
        var current = this.head;
        while (current !== null) {
            console.log(current.val);
            current = current.next;
        }
    };
    List.prototype.insert = function (val, index) {
        if (index === void 0) { index = 0; }
        var ind = 0;
        var cur = this.head;
        var node = new ListNode(val);
        if (index === 0) {
            node.next = this.head;
            this.head = node;
            return;
        }
        while (ind !== index - 1 && cur.next !== null) {
            ind++;
            cur = cur.next;
        }
        if (ind < index - 1 && cur.next === null) {
            cur.next = node;
            return;
        }
        node.next = cur.next;
        cur.next = node;
        return;
    };
    List.prototype.delete = function (val) {
        var ind = this.find(val);
        var cur = this.head;
        if (ind !== null) {
            if (this.head.val === val)
                this.head = this.head.next;
            else {
                while (cur.next.val !== val)
                    cur = cur.next;
                cur.next = cur.next.next;
                return;
            }
        }
    };
    List.prototype.find = function (val) {
        var cur = this.head, ind = 0;
        while (cur.next !== null) {
            if (cur.val === val)
                return ind;
            else {
                cur = cur.next;
                ind += 1;
            }
            ;
        }
        return -1;
    };
    return List;
}());
exports.List = List;
//# sourceMappingURL=index.js.map