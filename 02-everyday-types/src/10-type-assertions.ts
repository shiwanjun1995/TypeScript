const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement

const myCanvas2 = <HTMLCanvasElement>document.getElementById('main_canvas')

const x = 'hello' as any as number

const y = 'hello' as unknown as number

// 当我们并不知道某个变量是什么类型的情况下，可以把它设置成一个差不多的类型，而不是any类型，这就失去了它的意义。
