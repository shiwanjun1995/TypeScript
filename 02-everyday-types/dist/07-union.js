"use strict";
function printId(id) {
    // console.log('Your ID is：' + id);
    // console.log(id.toUpperCase());
    // 类型缩小 让类型变得更加狭窄
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId(101);
printId('202');
// printId({
//   MyId: 123456
// })
// 联合类型能够让类型变得更宽，和更丰富
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log('Hello，' + x.join(','));
    }
    else {
        console.log('Welcome lone traveler' + x);
    }
}
// 一定要使用两个类型都具备的方法或者使用分支让类型缩窄的方法
welcomePeople('A');
welcomePeople(['a', 'b']);
function getFirstThree(x) {
    return x.slice(0, 3);
}
getFirstThree('abcdefg');
console.log(getFirstThree('abcdefg'));
console.log(getFirstThree([2, 3, 4, 5, 6]));
