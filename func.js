function func1() {
  console.log('func1', this)
  function func2() {
    console.log('func2', this)
  }
  func2()
}

func1()