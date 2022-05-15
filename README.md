## 1、全局安装

```js
npm i typescript -g
```

## 2、编译

不能直接运行，需要编译成 js 才可以，意思是 typescript compiler，并且只有在全局安装了 typescript 才可以执行。

```js
tsc 对应的ts代码文件
```

## 3、函数出现重复（解决 Ts 和 Js 冲突问题）

```json
q: 当前编译环境下，存在同名的函数会报错?
a: tsc --init 生成配置文件
```

## 4、重新编译 ts 才能看到 js 效果（自动编译）

```json
q: 代码编写的时候能否帮助我们自动编译?
a: tsc --watch
```

## 5、ts 报错，js 还能正常运行（ts 出现错误不让其编译成 js）

```js
tsc -noEmitOnError 对应的ts代码文件
```

## 6、并不是必须给变量编写显示类型的注释

ts 很多情况下会帮助我们自动推断类型，当类型系统能够帮我们推断出类型的话，我们最好不需要添加类型注释了。

## 7、编译生成后的 js 文件会翻译成浏览器识别的代码

在 ts 里加了很多类型注释的代码，都会在编译的时候自动删除掉。

# 8、es6 的语法并不是所有浏览器都支持

修改配置文件 tsconfig.json

```json
/* Language and Environment */
"target": "es2016",
// 默认以 ES3 作为目标，但是大多数浏览器都支持 ES2015（es6），可以很安全地将更高的版本设置为目标。
```

## 9、严格模式

类型是可选的，推理采用最宽松的类型，而且不检查潜在的 null、undefined，应该始终打开这些严格检查。
noImplicitAny: true [不允许出现隐式的 any 类型]
strictNullChecks: true [不允许出现 null、undefined 类型]

```json
/* Type Checking */
"strict": true,                                      /* Enable all strict type-checking options. */
// "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied `any` type.. */
// "strictNullChecks": true,                         /* When type checking, take into account `null` and `undefined`. */
```

## 10、为了演示方便，修改入口和出口

修改成当前文件夹下的 src、dist 文件夹

```json
/* Modules */
"rootDir": "./src",
/* Emit */
"outDir": "./dist",
```

## 11、对于类型，始终使用小写

string、number、boolean
特殊的内置类型：Date 可以大写

## 12、数组的定义方法有两种

> 1. type[] []前面加一个 ts 常用的类型
> 2. Array<type> 关键字<ts 的常用类型> （泛型的写法）

## 13、any 不希望某个特定的值导致类型错误

当一个值的类型是 any 时，可以访问他的任何属性，将它分配给任何类型的值，或者任何其它语法上的东西都是合法的。

## 14、变量上的类型注释可以显示地指定

冒号+类型，根据习惯，最好加一个空格

## 15、函数

指定函数的输入值和输出值的类型，参数类型注释(形参) + 返回值类型注释(void) void 意思就是没有返回值，上下文类型（函数发生在上下文通知他应该具有什么类型上面）

## 16、对象

参数的类型注释是对象类型

## 17、联合类型

多个类型之间用 ｜ 隔开

## 18、类型别名

想要多次使用同一个类型，需要重复书写多次，单独定义一个类型，可以避免重复使用

## 19、接口

我们将 ts 称为结构类型的系统，其原因就是 ts 只关心类型的结构和功能，定义对象的另外一种方式

## 20、类型断言

有时候我们会获取一个值，这个值 ts 并不知道它具体的类型是什么，我们可以指定具体的类型，利用 as 更加具体的类型，或者<更加具体的类型>

## 21、文字类型

除了一般类型 string 和 number，我们可以在类型的位置引用特定的字符串和数字。比如 var、let、const。去细化变量类型的时候很用用。

## 22、null 和 undefined 类型

js 有两个原始的值：null 和 undefined，分别表示不存在和未初始化的值，ts 有两个对应的同名类型。

## 23、枚举

是 ts 添加到 js 的一项功能，它允许描述一组值，这个值可能是一组命名常量之一，与大多数的 ts 功能不同，这个不是 js 类型级别里边添加的内容，而是添加到 ts 语言和运行时的内容。因此你确定确实需要枚举累来做些事情，否则也没有必要使用它。只要定义了一个值的默认值，其他的值会默认递增 1。

## 24、不太常用的原语

js 一些较新的原语，ts 也实现了。比如 Symbol()、bigint。
