"use strict";
// 分隔符号可以为, 或者;
function printCoord(pt) {
    console.log('坐标的x值为：' + pt.x);
    console.log('坐标的y值为：' + pt.y);
}
printCoord({
    x: 3,
    y: 7
});
// last可选，后面加上?
function printName(obj) {
    var _a;
    // 可选链式编程
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
    if (obj.last !== undefined) {
        console.log(obj.last.toLocaleLowerCase());
    }
}
printName({
    first: '大'
});
printName({
    first: '大',
    last: '🐷',
});
