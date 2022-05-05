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
