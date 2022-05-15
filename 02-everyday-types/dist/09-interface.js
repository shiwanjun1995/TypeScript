"use strict";
function printPoint(pt) { }
printPoint({
    x: 100,
    y: 100,
});
// 类型别名和接口是很类似的，几乎所有可以使用 interface 定义的这种类型都可以通过 type 这种来定义
// // 扩展接口
// interface Animal {
//   name: string
// }
// // 定义了一个新的属性
// interface Bear extends Animal {
//   honney: Boolean
// }
// // 声明一个bear 的实例
// const bear: Bear = {
//   name: 'winie',
//   honney: true
// }
// console.log(bear.name);
// console.log(bear.honney);
// // 交叉扩展
// type Animal = {
//   name: string
// }
// type Bear = Animal & {
//   honney: Boolean
// }
// const bear: Bear = {
//   name: 'winie',
//   honney: true
// }
// // 向现有的类型添加字段 interface
// interface MyWindow {
//   count: number
// }
// interface MyWindow {
//   title: string
// }
// const w: MyWindow = {
//   title: 'hello ts',
//   count: 100
// }
// 类型创建以后不能进行扩展 type
// type MyWindow = {
//   title: string
// }
// type MyWindow = {
//   count: number
// }
