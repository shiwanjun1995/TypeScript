function greet(name: string) {
  console.log('Hello，' + name.toUpperCase() + '!!');
}

greet('大猪')

function getFavoriteNumber(): number {
  // 通常不需要定义函数的返回类型注释，ts会自动推断
  return 20
}

// 当匿名函数可以确定它如何被调动的地方的时候，这个函数的参数会自动地指定类型
const names = ['小猪', '大猪']
names.forEach(function(s) {
  console.log(s.toUpperCase());
})
names.forEach((s) => {
  console.log(s.toUpperCase());
})

 