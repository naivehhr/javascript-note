### arguments
  * arguments.length
  * foo.name 函数自带的一个东东

### bind IE9+
  * 改变
  * 指定默认参数,es6中有更好的解决方式
  * new Func 此时bind不会起作用

### currying











```
  function add(a,b,c){
    return a + b + c
  }

  var func = add.bind(undefined, 100)
  func(1, 2) //103
  var func2 = func.bind(undefined, 200)

  func2(10) //310
```

```
  fucntion foo() {
    this.b = 100;
    return this.a;
  }
  var func = foo.bind({a: 1})
  func(); //1
  new func(); //{b : 100}
```



* 模拟bind
> 使用上面的例子
```
if(!Function.prototype.bind){
  Function.prototype.bind = function(oThis) {
    if(typeof this !== 'function'){
      throw new TypeError('....')
    }
    var aArgs = Array.prototype.slice.call(arguments, 1),
    fToBind = _this, //指向 foo函数 普通调用时候
    fNOP = function(){}
    fBound = function() {
      // this 指向新的bind后的对象
      return fToBind.apply(this instanceof fNOP? this: toThis,
        aArgs.concat(Array.prototype.call(arguments)) // arguments 新传来的参数
      )
      // 这里就是Object.create() caution! 不能直接=赋值，会影响整个原型链
      fNOP.prototype = this.prototype;
      fBound.prototype = new fNOP();
      return fBound;
    }
  }
}



```
