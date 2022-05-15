"use strict";
const oneHundred = BigInt(100);
const antherHundred = 100n;
// 目标低于 es2020 时，bigint 不可用，需要修改配置文件
const firstName = Symbol('name');
const secondName = Symbol('name');
// Symbol() 函数返回的值都是不同的
// if (firstName === secondName) {
//   console.log('ok')
// }
