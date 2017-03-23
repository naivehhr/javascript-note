### 继承
  * prototype属性与原型
  ```
    function Foo(){}
    typeof Foo.prototype //object
    Foo.protorype.x = 1
    var obj3 = new Foo()

  ```
  > Foo.prototype 创建Foo对象时的原型
  ```
  {
    constructor: Foo,
    _proto_: Object.prototype,
    x: 1
  }
  ```

### 例子
http://rockyuse.iteye.com/blog/1426510
```

01	<script type="text/javascript">
02	var Person = function () { };
03		Person.prototype.Say = function () {
04		alert("Person say");
05	}
06	Person.prototype.Salary = 50000;

07	var Programmer = function () { };
08	Programmer.prototype = new Person();
09	Programmer.prototype.WriteCode = function () {
10		alert("programmer writes code");
11	};

12	Programmer.prototype.Salary = 500;

13	var p = new Programmer();
14	p.Say();
15	p.WriteCode();
16	alert(p.Salary);
17	</script>

```
> 理解过程：
  var p = new Programmer() ==> p._proto_ = Programmer.prototype
  Programmer.prototype = new Persion() ==>
  var p1 = new Person()
  Programmer.prototype = p1 ==>
  p1._proto_ = Person.prototype ==>
  Programmer.prototype._proto_ = Person.prototype ==>
  p._proto_._proto_ = Person.prototype

  所以 Programmer.prototype = new Person() 就是让Programmer.prototype._proto_ = Person.prototype(因为new出来的programmer._proto_ = Programmer.prototype的)


### constructor 属性
  * prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数。
    function A(){};
    console.log(A.prototype.constructor===A) //true
    要注意的是，prototype是构造函数的属性，而constructor则是构造函数的prototype属性所指向的那个对象，也就是原型对象的属性。注意不要混淆。

### 继承 这几步
  ```
    function Student(name, age, class){
      Persion.call(this,name,age)
      this.className = className
    }

    Student.prototype = Object.creat(Person.prototype)
    Student.prototype.constructor = Student
  ```

### 实现集成的方式

```
  function Person(){}
  function Student(){}

  Student.prototype = Person.prototype // 不行
  Student.prototype = new Person() // 不建议
  Student.prototype = Object.create(Person.prototype) 建议
  Student.prototype.constructor = Student;
  如果不兼容create 模拟
  if(!Object.create){
    Object.create = function(proto){
      function F(){}
      F.prototype = proto
      return new F;
    }
  }

```
### 方法重载 内部判断

###
