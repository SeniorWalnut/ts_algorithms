"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("../../helpers/test");
function bruteSearch(s, p) {
    for (var i = 0; i < s.length; i++) {
        var check = 0;
        for (var j = 0; j < p.length; j++) {
            if (s[i + j] === p[j])
                check++;
        }
        if (check === p.length)
            return i;
    }
    return -1;
}
test_1.default([
    { val: bruteSearch('abc', 'abc'), expect: 0 },
    { val: bruteSearch('', 'abc'), expect: -1 },
    { val: bruteSearch('cbcd', 'abc'), expect: -1 },
    { val: bruteSearch('abcdefghs', 'fghs'), expect: 5 },
    { val: bruteSearch('abcdefghs', 'fhs'), expect: -1 },
]);
//# sourceMappingURL=bruteSearch.js.map