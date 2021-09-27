// 虽然Object构造函数或对象字面量都可以用来创建单个对象，但这些方式有个明显的缺点：使用同一个接口创建很多对象，会产生大量的重复代码。

// 工厂模式，工厂模式解决了多个相似对象的问题，但是并不能知道一个对象的类型。
function createPerson(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    console.log(this.name);
  };
  return o;
}
var person_1 = createPerson('haha', 19, 'teacher');
var person_2 = createPerson('hehe', 22, 'engineer');

// 构造函数模式，每个方法都要在每个实例上重新创建一遍
// ECMAScript中的构造函数可用来创建特定类型的对象。
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    console.log(this.name);
  }
}
var person_1 = new Person('haha', 19, 'teacher');
var person_2 = new Person('hehe', 22, 'engineer'); 
console.log(person_1.constructor == Person) // true  构造函数(constructor)属性，该属性指向Person
// 与工厂模式区别： 1、没有显示地创建对象；2、直接将属性和方法赋值给了this对象；3、没有return语句
// 通过构造函数创建实例，必须使用new操作符。
// new操作符作用：1、创建一个新对象；2、将构造函数的作用域赋值给新对象（因此this指向这个新对象）；3、执行构造函数中的代码（为这个新对象添加属性）；4、返回新对象
// 注意：此时实现的new操作符并没有将实例的constructor指向构造函数
function createObject(fun, ...rest) {
  var o = new Object();
  fun.call(o, ...rest);
  return o
}
var person_3 = createObject(Person, 'haha', 19, 'teacher')
console.log(person_3, person_3.constructor == Person) // false

// 原型模式，不能传递初始化参数，所有属性都是被实例共享的，引用类型值会出现共用问题。
// 创建每个函数都有一个prototype属性，这个prototype就是构造函数实例的原型对象。
function Person() {
}
Person.prototype.name = 'haha';
Person.prototype.sayName = function() {
}

// 组合使用构造函数模式和原型模式
// 构造函数模式用于定义实例属性，原型模式用于定义方法和共享的属性。
function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function() {
}

// 动态原型模式
// 把所有信息都封装在了构造函数中，而通过在构造函数中初始化原型（仅在必要的情况下）
function Person(name) {
  this.name = name;
  if (typeof this.sayName != "function") {
    Person.prototype.sayName = function() {
    }
  }
}

// 寄生构造函数模式
// 基本思想是创建一个函数，该函数的作用仅仅是封装创建对象的代码，然后再返回新的创建对象
function Person(name) {
  var o = new Object();
  o.name = name;
  o.sayName = function() {
  }
  return o
}
var friend = new Person('haha')
// 除了使用new操作符并把使用的包装函数叫做构造函数之外，这个模式跟工厂模式其实是一摸一样的

// 稳妥构造函数模式
// 所谓稳妥对象，指的是没有公共属性，而且其方法也不引用this的对象。
// 稳妥构造函数遵循与寄生构造函数类似的模式，但有两点不同：一是新创建对象的实例方法不引用this；二是不使用new操作符调用构造函数
function Person(name) {
  var o = new Object();
  o.sayName = function() {
    return name
  }
  return o
}


