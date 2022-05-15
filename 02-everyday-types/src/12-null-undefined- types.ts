let xxx: undefined = undefined
let yyy: null = null
// let zzz: string = undefined

function doSomething(x: string | null) {
  if (x === null) {
    // do一些事情
  } else {
    console.log('hello,' + x.toUpperCase())
  }
}

// 这个参数可选
function liveDangerously(x?: number | null) {
  // 这个值不会是 null或者是undefined
  // 和其它的断言类型语言一样，这不会更改代码的运行时行为
  console.log(x!.toFixed())
}
