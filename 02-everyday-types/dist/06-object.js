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
    // 可选链式编程
    console.log(obj.last?.toUpperCase());
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
