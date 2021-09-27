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

// 




