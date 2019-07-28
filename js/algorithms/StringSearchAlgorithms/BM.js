"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("../../helpers/test");
function shiftTable(p) {
    var obj = {};
    for (var i = p.length - 1; i > 0; i--)
        obj[p[i]] = p.length - i - 1;
    obj[p[p.length - 1]] = p.length;
    return obj;
}
function BM(s, p) {
    var table = shiftTable(p), i = 0;
    while (i < s.length) {
        for (var j = p.length - 1; j >= 0; j--) {
            if (s[i + j] !== p[j]) {
                i += table[s[i + j]] !== undefined ? table[s[i + j]] : p.length;
                break;
            }
            else if (j === 0)
                return i;
        }
    }
    return -1;
}
test_1.default([
    { val: BM('abc', 'abc'), expect: 0 },
    { val: BM('', 'abc'), expect: -1 },
    { val: BM('cbcd', 'abc'), expect: -1 },
    { val: BM('abcdefghs', 'fghs'), expect: 5 },
    { val: BM('abcdefghs', 'fhs'), expect: -1 },
]);
//# sourceMappingURL=BM.js.map