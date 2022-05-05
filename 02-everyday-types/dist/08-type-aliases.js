"use strict";
function printPoint(pt) {
}
printPoint({
    x: 100,
    y: 200
});
function printID(id) {
}
printID(100);
printID('hello');
function sanitizedInput(str) {
    return str.slice(0, 2);
}
let userInput = sanitizedInput('hello');
userInput = 'new input';
