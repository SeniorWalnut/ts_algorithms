"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./DoublyLinkedList/index");
var dl = new index_1.DoublyList();
dl.insertStart(6);
dl.insertEnd(5);
dl.insertEnd(4);
dl.deleteEnd();
dl.deleteList();
dl.logForward();
//# sourceMappingURL=main.js.map