### 执行上下文
  * 变量对象 VO: 变量/函数声明/函数参数
  * 先执行一个全局的执行环境
  ```
    var a = 10
    function test(x) {
      var b = 30
    }
    test(30)


    VO(globalContext) = {
      a: 10,
      test: <ref to function>
    };

    VO(test functionContext) = {
      x: 30,
      b: 20
    }

  ```
  * window指向window自己
  * VO(functionContext) == AO 执行时候的状态 可理解为赋值
  * VO填充顺序
   >
   1、函数参数(若未传入，初始化该参数值为undefined)
   2、函数声明(若发生命名冲突，会覆盖)
   3、变量声明(初始化变量值为undefined， 若发生冲突，忽略)
