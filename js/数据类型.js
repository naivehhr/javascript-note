/**
 * Created by aran.hu on 17/2/16.
 */
// console.log([1,2] === [1,2])
// console.log(typeof undefined)
// console.log(Object.prototype.toString(undefined))


// var obj = Object.create({a:1})
// console.log(obj.__proto__())



function P() {
  this.name = 'huhaoran'
}
P.prototype.x = 'x'


var per = new P()
// per.prototype.x = 'x'
per.age = 12
// console.log(P.prototype.hasOwnProperty('x'))
// console.log(Object.getOwnPropertyDescriptor(P, 'prototype')) //
// console.log(per.valueOf())



var arr1 = ['huhaoran']
// console.log('huhaoran' in arr1)

var str = '123'
// console.log(str.charAt(0))


var o = {prop: 37}
function inde(){
  return this.prop
}
o.f = inde
// console.log(o.f())


function A(name) {
  this.name = name;
}
// console.log(A.prototype.constructor, A.prototype.hasOwnProperty("constructor"));
//
// var a = new A("default");
// console.log(a.constructor, a.hasOwnProperty("constructor"));
//
function B(name, km) {
  // A.apply(this, arguments);
  this.km = km;
}

// var prototypeB = Object.create(A.prototype);
// console.log("B's prototype", prototypeB, new A());
// B.prototype = Object.create(A.prototype);
// B.prototype = new A()
//
// var a1 = new A("something"), b1 = new B("Car", "20000");
// var a2 = new A("something2"), b2 = new B("FireTruck", "20000");
//
// console.log();
// console.log(a1, a1.constructor);
// console.log(b1, b1.constructor);
// console.log();
// console.log(a2, a2.constructor);
// console.log(b2, b2.constructor);
//
// B.prototype.constructor = B;
//
// console.log();
// console.log("fix B's constructor");
// console.log();
// console.log(a1, a1.constructor);
// console.log(b1, b1.constructor);
// console.log();
// console.log(a2, a2.constructor);
// console.log(b2, b2.constructor);

// function C(){
//   // A.apply(this, arguments)
// }
// C.prototype.constructor = C;
// A.prototype.x = 'x'
// B.prototype = A.prototype
// // C.prototype = Object.create(A.prototype)
// A.prototype.y = 'y'
//
// var c = new C()
// console.log(B.prototype)
// console.log(A.prototype)
// console.log(C.prototype)
// var obj = new Object()
// var ad = []
// console.log(ad instanceof Array)
function Person(){}
function Student(){}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student;
console.log(Student.prototype.constructor)
