var a = ['1', '2', '3'].map((item, index, array) => {
  return parseInt(item)
})
console.log(a)

var b = ['a', 'b', 'c'].map(function(item, index, array) {
  console.log(this)
  console.log(item, index, array)
}, 'aaa')


function debounce(fn) {
  let timeout = null; // 创建一个标记用来存放定时器的返回值
  return function () {
    clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
    timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
      // fn.apply(this, arguments);
      fn.apply('aaa', [1, 2])
    }, 500);
  };
}
function sayHi(a) {
  console.log('防抖成功', this, a);
}

var fnq = debounce(sayHi); // 防抖
fnq()


function throttle(fn) {
  let canRun = true; // 通过闭包保存一个标记
  return function () {
    if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
    canRun = false; // 立即设置为false
    setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
      fn.apply(this, arguments);
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
      canRun = true;
    }, 500);
  };
}
function sayHi(e) {
  console.log(e.target.innerWidth, e.target.innerHeight);
}


const s = new Set([1,2,3,4,1,2]);
console.log(s);
console.log([...s])
console.log(s.keys())

const map = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);
console.log(map.keys())

const map0 = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

[...map0].map(([k, v]) => {
  console.log(k, v)
})

const map1 = new Map(
  [...map0].filter(([k, v]) => k < 3)
);
// 产生 Map 结构 {1 => 'a', 2 => 'b'}

const map2 = new Map(
  [...map0].map(([k, v]) => [k * 2, '_' + v])
    );
// 产生 Map 结构 {2 => '_a', 4 => '_b', 6 => '_c'}


function Cat(color) {
  var xin = 'xin';
  var wei = 'wei';
  var tiao = function() {  // 私有属性方法，在构造函数内用var定义的就是私有的
    console.log(60)
  }
  this.color = color;      // 公有属性方法，在构造函数内用this承接的就是公有的
  this.beng = function() {
    console.log(xin + wei)
  }
}

Cat.descript = '我这个构造函数是用来生产出一只猫的'
Cat.actingCute = function () {  console.log('一听到猫我就想到了它会卖萌')}  // 定义在构造函数上的属性和方法，被称为静态属性和方法
Cat.prototype.cleanTheBody = function () {  console.log('我会用唾液清洁身体')}  // 构造函数内使用this设置，或者设置在构造函数原型对象上的，就是公有属性和方法

// 定义在构造函数原型对象上的属性和方法虽然不能直接表现在实例对象上，但是实例对象却可以访问或者调用他们

var mimi = new Cat('red');
console.log(Cat.color) // undefined
mimi.beng();
console.log(mimi);
for(let key in mimi) {     // for...in...能获取到实例对象自身的属性和原型链上的属性
  console.log(key)
}
console.log(Object.keys(mimi));  // Object.keys()和Object.getOwnPropertyNames()只能获取实例对象自身的属性
console.log(Object.getOwnPropertyNames(mimi));


function Person (name, sex) {  
  this.name = name;  
  this.sex = sex;  
  var evil = '我很邪恶';
  var pickNose = function () {    console.log('我会扣鼻子但不让你看见')  }  
  this.drawing = function (type) {    console.log('我要画一幅' + type)  }
}
Person.fight = function () {  console.log('打架')}
Person.prototype.wc = function () {  console.log('我是个人我会wc')}
var p1 = new Person('lindaidai', 'boy')
// console.log(p1.name)
// console.log(p1.evil)
// p1.drawing('国画')
// p1.pickNose()
// p1.fight()
// p1.wc()
// Person.fight()
// Person.wc()
// console.log(Person.sex)

console.log(p1.__proto__, Person.prototype, Person.__proto__)

class Cat {
  constructor(name) {
    var heart = '❤️'    // class constructor 中var一个变量， 他只存在与constructor这个构造函数中
    var heartbeat = function() {
      console.log(heart)
    }
    this.name = name    // class constructor 中使用this定义的属性和方法会被定义到实例上
    this.jump = function() {
      heartbeat()
    }
  }
  color = 'white'     // class 中使用 = 来定义一个属性和方法，会被定义到实例上
  cleanTheBody = function() {
    console.log('我会用唾液清洁身体')
  }
  hideTheShit() {     // class 中直接定义一个方法，会被添加到原型对象上
    console.log('我在臭臭完之后会把它藏起来')
  }
}

var mimi = new Cat()
console.log(Object.keys(mimi))


class Cat {  
  constructor (name, color) {    
    var heart = '❤️'    
    var stomach = '胃'    
    var heartbeat = function () {      console.log(heart + '跳')    }    
    this.name = name    
    this.color = color    
    heartbeat()    
    this.jump = function () {      
      console.log(this)      
      console.log('我跳起来了~来追我啊')    
    }  
  }  
  cleanTheBody = function () {    console.log('我会用唾液清洁身体')  }  
  static descript = '我这个类是用来生产出一只猫的' 
  static actingCute () {    
    console.log(this)    
    console.log('一听到猫我就想到了它会卖萌')  
  }
}
Cat.staticName = 'staticName'
var guaiguai = new Cat('guaiguai', 'white')

console.log(guaiguai)
guaiguai.jump()
guaiguai.cleanTheBody()
console.log(guaiguai.descript)
// guaiguai.actingCute()
Cat.actingCute()
console.log(Cat.descript)
console.log(Cat.staticName)


// 浅克隆
function shallowClone(o) {
  const obj = {}
  for(let key in o) {
    obj[key] = o[key]
  }
  return obj
}

const oldObj = {
  a: 1,
  b: ['e'],
  c: {h: {i:2}}
}

const newObj = shallowClone(oldObj)
newObj.a = 2
newObj.b.push('c')
newObj.c.h.d = 3
console.log(newObj, oldObj)

// 深克隆
function Cat(name, color) {
  this.name = name
  this.color = color
  this.getColor = function() {
    return 'red'
  }
  function getName() {
    return 'c'
  }
}
const oldObj = new Cat('a', 'green')
const newObj = JSON.parse(JSON.stringify(oldObj))
console.log(newObj.constructor, oldObj.constructor)


// 构造函数
function person(pname) {
  this.name = pname;
}

const Messi = new person('Messi');

// 函数
function say() {
  console.log('hi');
};

const oldObj = {
  a: say,
  b: new Array(1),
  c: new RegExp('ab+c', 'i'),
  d: Messi
};

const newObj = JSON.parse(JSON.stringify(oldObj));

// 无法复制函数
console.log(newObj.a, oldObj.a); // undefined [Function: say]
// 稀疏数组复制错误
console.log(newObj.b[0], oldObj.b[0]); // null undefined
// 无法复制正则对象
console.log(newObj.c, oldObj.c); // {} /ab+c/i
// 构造函数指向错误
console.log(newObj.d.constructor, oldObj.d.constructor); // [Function: Object] [Function: person]


const oldObj = {};
oldObj.a = oldObj;
// 对象的循环引用会抛出错误
const newObj = JSON.parse(JSON.stringify(oldObj)); // TypeError: Converting circular structure to JSON


function deepClone(o) {
  if(typeof o !== 'object' && typeof o !== 'function') {
    return o
  }
  var obj = new o.constructor()
  for(i in o) {
    if(o.hasOwnProperty(i)) {
      obj[i] = typeof o[i] === "object" ? deepClone(o[i]) : o[i]
    }
  }
  return obj
}

function Cat(name, color) {
  this.name = name
  this.color = color
  this.arr = new Array(1)
  this.arr.push(0)
  this.getColor = function() {
    return 'red'
  }
}
const oldObj = new Cat('a', 'green')
const newObj = deepClone(oldObj)
console.log(newObj.constructor, oldObj.constructor)
console.log(newObj, oldObj)


// 实现 new
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.getName = function() {
  return this.name
}
function Create(Con, ...args) {
  let obj = Object.create(Con)
  console.log(obj.__proto__)
  Con.call(obj, ...args)
  return obj
}
console.log(Create(Person, 'ha', '20'))

const sym1 = Symbol(2)
console.log(sym1)
console.log(Symbol.prototype)

var a = 2
function fun1() {
  console.log(a)
}
function fun2() {
  var a = 3
  fun1()
}
fun2()

for(var i = 0; i < 2; i++) {
  setTimeout(() => {
    console.log(i)
  })
}

for(var i = 0; i < 2; i++) {
  function fun1(j) {
    setTimeout(() => {
      console.log(j)
    })
  }
  fun1(i)
}


function module() {
	var arr = [];
	function add(val) {
		if (typeof val == 'number') {
			arr.push(val);
		}
	}
	function get(index) {
		if (index < arr.length) {
			return arr[index]
		} else {
			return null;
		}
	}
	return {
		add: add,
		get: get
	}
}
var mod1 = module();
mod1.add(1);
mod1.add(2);
mod1.add('xxx');
console.log(mod1.get(2));

console.log(NaN)

var a = true
console.log(a == 2)
console.log(String([1, '2', null, true, undefined, [], {}]))
console.log(Number('12a'), 0x12a)

const a = {
  i: 1,
  toString() {
    let j = this.i++
    console.log(j, this.i)
    return j
  }
}
console.log([0]+[1])


function fun1(a, ...args) {
  console.log('args', args)
  console.log('arguments', [].slice.call(arguments))
}
fun1('a', 'b', 'c')

function each() {
  // console.log(this);
  this.forEach(element => {
    console.log(element)
  });
}
each.call(['a', 'b'])
each.call({'0': 1, '1': 2})


// 手写call
Function.prototype.myCall = function(thisArg, ...invokeParams) {
  // 判断严格模式
  var isStrict = (function(){
    return this === undefined
  }())

  if(!isStrict) {
     // 如果thisArg是除了null或undefined的其他原始值，需要通过构造函数包装成对象
     var thisArgType = typeof thisArg
     if(thisArgType === 'number') {
       thisArg = new Number(thisArg)
     } else if(thisArgType === 'string') {
       thisArg = new String(thisArg)
     } else if(thisArgType === 'boolean') {
       thisArg = new Boolean(thisArg)
     }
  }

  // 因为myCall是作为一个方法被调用的，所以this指向调用对象
  var invokeFunc = this;
  if(thisArg === null || thisArg === undefined) {
    return invokeFunc(...invokeParams)
  }
  // 将调用对象（this）作为thisArg的方法，达到改变this指向的作用。
  var uniquePropName = Symbol(thisArg)
  thisArg[uniquePropName] = invokeFunc;
  console.log(invokeParams, ...invokeParams)
  return thisArg[uniquePropName](...invokeParams);
}

function fun1() {
  console.log(this)
  return this
}

console.log(fun1.myCall({'a': 0}))

function fun1() {
  console.log('fun1', this)
  function fun2() {
    console.log('fun2', this)
  }
  fun2()
}
fun1()


// 柯里化
function fn() {
  let num = 0;
  [].map.call(arguments, (element) => {
    num+= element
  })
  return num
}

function curry(fn) {
  let presetArgs = [].slice.call(arguments, 1)
  function curried() {
    var resArgs = [].slice.call(arguments)
    var allArgs = [...presetArgs, ...resArgs]
    return curry.call(this, fn, ...allArgs)
  }
  curried.toString = function() {
    return fn.apply(this, presetArgs)
  }
  return curried
}

var add = curry(fn)
var a = add(1)(2)(3)
console.log(add(1)(2)(3).toString())
console.log(add(1)(2)(3) + 0)


// Promise
class Promise{
  constructor(executor){
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    let resolve = value => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onResolvedCallbacks.forEach(fn=>fn());
      }
    };
    let reject = reason => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn=>fn());
      }
    };
    try{
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then(onFulfilled,onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
    let promise2 = new Promise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      };
      if (this.state === 'rejected') {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      };
      if (this.state === 'pending') {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0)
        });
      };
    });
    return promise2;
  }
  catch(fn){
    return this.then(null,fn);
  }
}
function resolvePromise(promise2, x, resolve, reject){
  if(x === promise2){
    return reject(new TypeError('Chaining cycle detected for promise'));
  }
  let called;
  if (x != null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then;
      if (typeof then === 'function') { 
        then.call(x, y => {
          if(called)return;
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        }, err => {
          if(called)return;
          called = true;
          reject(err);
        })
      } else {
        resolve(x);
      }
    } catch (e) {
      if(called)return;
      called = true;
      reject(e); 
    }
  } else {
    resolve(x);
  }
}
//resolve方法
Promise.resolve = function(val){
  return new Promise((resolve,reject)=>{
    resolve(val)
  });
}
//reject方法
Promise.reject = function(val){
  return new Promise((resolve,reject)=>{
    reject(val)
  });
}
//race方法 
Promise.race = function(promises){
  return new Promise((resolve,reject)=>{
    for(let i=0;i<promises.length;i++){
      promises[i].then(resolve,reject)
    };
  })
}
//all方法(获取所有的promise，都执行then，把结果放到数组，一起返回)
Promise.all = function(promises){
  let arr = [];
  let i = 0;
  function processData(index,data){
    arr[index] = data;
    i++;
    if(i == promises.length){
      resolve(arr);
    };
  };
  return new Promise((resolve,reject)=>{
    for(let i=0;i<promises.length;i++){
      promises[i].then(data=>{
        processData(i,data);
      },reject);
    };
  });
}

let p1 = Promise.resolve(123);
console.log(p1)

//Promise对象是一个构造函数，用来生成Promise实例
//Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject,它们是两个函数，由js引擎提供，不用自己部署。
//resolve函数的作用，将Promise对象的状态从“未完成”变为“成功”，在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。
//reject函数的作用，将Promise对象的状态从“未完成”变为“失败”，在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
//Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
//如果调用resolve和reject函数时带有参数，那么它们的参数会被传递给回调函数。
//then方法返回的是一个新的Promise对象。
//setTimout的第三个参数会作为function(第一参数)的参数
const promise = new Promise((resolve, reject) => {
  if(/* 异步操作成功 */) {
    resolve(value)
  } else {
    reject(value)
  }
})
promise.then((value) => {
  // success
}, (error) => {
  // failure
})

var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'a')
}).then(result => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'c')
  })
})
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'b')
})

Promise.all([p1, p2]).then(result => {
  console.log("result", result)
})


let thenable = {
  then: (resolve, reject) => {
    console.log('12')
    resolve(42)
  }
}
let p1 = Promise.resolve(thenable)
p1.then(value => {
  console.log(value)
})

let p1 = new Promise(resolve=>{
  console.log('12')
  resolve(42)
})
p1.then(value => {
  console.log(value)
})



console.log(a)
 
let a = [];
a.push(...[{a: 1}, {a: 2}], {b: 4})
console.log(a)