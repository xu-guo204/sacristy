// Observer(Object.defineProperty) 循环为data中的每个属性增加get，set
function Observer(data) {
  for(let key in data) {
    defineProperty(data, key)
  }
}

function defineProperty(data, key) {
  let value = data[key]
  const dep = new Dep();
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      dep.depend()
      return value
    },
    set: function(newValue) {
      value = newValue
      dep.notify()
    }
  })

}

// Watcher
function Watcher(vm, fn) {
  this.vm = vm;
  // 将Dep.taregt指向当前wathcer
  Dep.target = this;
  this.addDep = (dep) => {
    dep.addSub(this)
  }
  // 更新方法，用于触发vm._render
  this.update = () => {
    fn()
  }
  // 这里会首次调用vm._render,从而触发text的get
  // 从而将当前的Watcher与Dep关联起来
  this.value = fn();
  Dep.target = null;
}

// Dep 依赖收集器，data属性值发生变化时，通知依赖收集器，更新每个需要更新的Watcher
function Dep() {
  // 收集目标
  this.target = null;
  // 存储收集器中需要通知的Watcher
  this.subs = [];
  // 当有目标时，绑定Dep和Watcher的关系
  this.depend = () => {
    if (Dep.target) {
      Dep.target.addDep(this) // 或者写为this.addSub(Dep.target),则不需要在Watcher中定义addDep()
    }
  }
  // 为当前收集器添加Watcher
  this.addSub = (watcher) => {
    this.subs.push(watcher)
  }
  // 通知收集器中所有Watcher，调用其update方法
  this.notify = () => {
    console.log('subs', this.subs)
    this.subs.forEach(item => {
      item.update()
    })
  }
}

// Vue
function Vue(options) {
  // 将data赋值给_data
  if (options && typeof options.data === 'function') {
    this._data = options.data.apply(this)
  }
  // 挂载函数
  this.mount = () => {
    new Watcher(this, this.render)
  }
  // 渲染函数
  this.render = () => {
    with(this) {
      _data.text
      _data.text001
    }
  }
  // 监听this._data
  observer(this._data)
}

function observer(data) {
  return new Observer(data)
}

const vue = new Vue({
  data() {
    return {
      text: 'hello world',
      text001: 'ddddd',
      text002: 'ddddd'
    }
  }
})

vue.mount()

vue._data.text = '123'
vue._data.text001 = '245'
vue._data.text002 = '245'

