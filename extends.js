function Parent(name) {
  this.name = name;
  this.play = [1, 2, 3];
}
Parent.prototype.append = function(num) {
  this.play.push(num);
  return this.play;
}

// 原型链继承
// 将子类的prototype指向父类的实例，将父类的属性和方法放到了子类的原型对象上
// 缺点：假如说父类里面有一个数组这样的引用类型值，那么改变子类实例间会互相影响，无法给父类传参
function Child(type) {
  this.type = type;
}
Child.prototype = new Parent();
let child_1 = new Child('haha');
let child_2 = new Child('hehe');
child_1.append(5)

// 借用构造函数继承（也叫伪对象或经典继承），借助call()
// 可以拿到父类实例本身的属性和方法，无法拿到父类原型上的方法和属性
function Child_01(type, ...rest) {
  this.type = type;
  Parent.call(this, ...rest);
}
let child_3 = new Child_01('haha', 'hehe')

// 组合继承，结合原型链继承和构造函数继承
// 缺点：Parent构造函数多执行了一次
function Child_02(type, ...rest) {
  this.type = type;
  Parent.call(this, ...rest)
}
Child_02.prototype = new Parent();
let child_4 = new Child_02('haha', 'hehe');

// 原型式继承,ES5通过新增Object.create()方法实现原型，Object.create()传入一个对象，返回一个已传入对象为原型的新对象
// 缺点：无法拿到父类实例本身的属性和方法
function Child_03(type) {
  this.type = type
}
Child_03.prototype = Object.create(Parent.prototype)

// 寄生式继承,在子构造函数中，通过Object.create()创建一个新对象，并给新对象添加属性和方法，然后返回新对象
// 缺点：同样无法拿到父类实例本身的属性和方法, 且
function Child_04(type) {
  var clone = Object.create(Parent.prototype);
  clone.type = type;
  return clone
}

// 寄生组合式继承，结合组合继承和原型式继承
function Child_05(type, ...rest) {
  this.type = type;
  Parent.call(this, ...rest)
}
Child_05.prototype = Object.create(Parent.prototype)





