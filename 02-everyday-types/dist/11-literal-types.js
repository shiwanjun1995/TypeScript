"use strict";
let testString = 'Hello World';
testString = '大猪';
const constantString = 'Hello World';
// constantString = ''
let xx = 'hello';
// xx = 'world'
// 第二个参数是有三个值的文字类型
function printText(s, alignment) { }
printText('hello', 'left');
// printText('wolrd', 'center2')
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) { }
configure({
    width: 100,
});
configure('auto');
// configure('auto1')
// 布尔文字类型
let b1 = true;
let b2 = false;
// 文字推理
const objj = {
    count: 0,
};
if (true) {
    obj.count = 1;
}
function handleRequest(url, method) { }
const req = {
    url: 'https://example.com',
    method: 'GET',
};
// 文字类型推断字符串的范围太大，可能不是以上三个值
// handleRequest(req.url, req.method as 'GET')
handleRequest(req.url, req.method);
