# 全局安装
```js
npm i typescript -g
```

# 编译
不能直接运行，需要编译成js才可以，意思是 typescript compiler，并且只有在全局安装了 typescript 才可以执行。
```js
tsc 对应的ts代码文件
```

# 函数出现重复（解决Ts和Js冲突问题）
q: 当前编译环境下，存在同名的函数会报错?
a: tsc --init 生成配置文件

# 重新编译ts才能看到js效果（自动编译）
q: 代码编写的时候能否帮助我们自动编译
a: tsc --watch

# ts报错，js还能正常运行（ts出现错误不让其编译成js）
tsc -noEmitOnError 对应的ts代码文件

## 并不是必须给变量编写显示类型的注释
ts很多情况下会帮助我们自动推断类型，当类型系统能够帮我们推断出类型的话，我们最好不需要添加类型注释了。

## 编译生成后的js文件会翻译成浏览器识别的代码
在ts里加了很多类型注释的代码，都会在编译的时候自动删除掉。

# es6的语法并不是所有浏览器都支持
修改配置文件 tsconfig.json 
```json
  /* Language and Environment */
  "target": "es2016", 
  // 默认以 ES3 作为目标，但是大多数浏览器都支持 ES2015（es6），可以很安全地将更高的版本设置为目标。
```
