// 事件循环机制 有这几个概念
// 1、任务队列：js是单线程的，所有任务（程序员写的每一行代码，或者每个代码块）都在一个线程上面执行，任务排成一队，形成了队列，所以称为任务队列
// 2、同步任务：会阻塞代码执行
// 3、异步任务：不会阻塞代码执行
// 4、宏任务：由宿主（浏览器或者Node）发起的，有①整个代码(scirpt)；②setTimeout, setInterval, setImmediate(nodejs的),的回调函数；③ajax的回调函数；④I/O（nodejs）。⑤DOM事件
// 5、微任务：由JavaScript自身发起的，有①promise中的then()②process.nextTikc(nodejs)；
// 注：微任务是宏任务的组成部分,微任务与宏任务是包含关系,并非前后并列，宏任务包含微任务.如果要谈微任务,需要指出它属于哪个宏任务才有意义。
// 注：直接执行的有：（1）console.log(),（2）new promise里面的。
// 总结：事件循环机制就是执行代码的过程中，遇到script标签，就把它放到宏任务队列中，然后拿出script这个宏任务出来执行，如果执行过程中遇到setTimeout,就把它放到宏任务队列中，继续向下执行，如果遇到Promise.then，就把它放到微任务队列中，继续向下执行，直到这个script第一个宏任务执行完，就去微任务队列中看有没有任务，如果有就先执行微任务队列中的任务，直到微任务队列中的任务执行完，再去宏任务中拿任务来执行，一直这样循环下去；就算某一时刻没有宏任务和微任务，它也会一直在监听任务。
// 注：这里的promise的链条then，主要是要等前面的then函数执行后，后面的then才能执行，就是柯里化函数
export function test () {
  // new Promise(resolve => { // 同步执行
  //   setTimeout(() => { // 宏任务 => 进入宏任务队列
  //     console.log(666)
  //     new Promise(resolve => {
  //       resolve()
  //     }).then(() => {
  //       console.log(777) // 13、 输出777
  //     })
  //   })
  //   resolve()
  // }).then(() => { // 微任务 => 放入当前微任务队列，线程往后再没有可以执行的代码了,于是开始执行微任务队列（因为柯里化函数）
  //   console.log(888) // 1、输出888
  //   new Promise(resolve => {
  //     console.log(999) // 2、输出999
  //     resolve()
  //   }).then(() => { // 微任务 => 放入微任务队列，随后线程直接跳到第32行（因为柯里化函数）
  //     console.log(111)
  //   }).then(() => { // 微任务 => 放入微任务队列，随后线程跳到55行的微任务开始执行,执行到第60行
  //     console.log(222)
  //   })
  // }).then(() => { // 微任务 => 放入微任务队列，后续没有可执行的代码了，再开始执行第27行代码 3、输出111.
  //   console.log(121212) // 4、输出121212
  //   new Promise((resolve) => {
  //     console.log(131313) // 5、输出131313
  //     resolve()
  //   }).then(() => { // 微任务 => 放入微任务队列，此时线程继续往下跳到第48行（因为柯里化函数）
  //     console.log(141414) // 7、输出141414
  //     new Promise((resolve) => {
  //       console.log(151515) // 8、输出151515
  //       resolve()
  //     }).then(() => { // 微任务 => 放入微任务队列，线程继续执行下一个微任务跳到48行 9、输出 333.
  //       console.log(444)
  //     })
  //   }).then(() => { // 微任务 => 放入微任务队列,后续没有可执行的代码了,再开始执行微任务队列的第一个任务即46行代码 11、输出 555.
  //     console.log(555) // 所有微任务执行完毕,当前宏任务结束.线程开始执行下一个宏任务,线程跳到第14行 12、输出 666.
  //   })
  // }).then(() => { // 微任务 => 放入微任务队列，后续没有可执行的代码了,再开始执行微任务队列的第一个任务，线程跳到第29行执行微任务 6、输出 222，随后又跳到37行执行下一个微任务
  //   console.log(333) // 至此这一轮的三个微任务全部执行完毕清空,又开始执行微任务队列的第一个任务,线程跳到第43行 10、输出 444.
  // })
  console.log(1) // 1
  setTimeout(() => { // 宏任务
    console.log(2) // 11
    Promise.resolve().then(() => { // 微任务
      console.log(3) // 12
    })
  })
  new Promise((resolve, reject) => {
    console.log(4) // 2
    resolve(5)
  }).then((data) => { // 微任务
    console.log('data:', data) // 6
    Promise.resolve().then(() => { // 微任务
      console.log(6) // 7
    }).then(() => { // 微任务
      console.log(7) // 8
      setTimeout(() => { // 宏任务
        console.log(8) // 15
      }, 0)
    })
  })
  setTimeout(() => { // 宏任务2
    console.log(9) // 13
  })
  console.log(10) // 3

  console.log('script start') // 4
  setTimeout(function () { // 宏任务3
    console.log('setTimeout') // 14
  }, 0)
  Promise.resolve().then(function () { // 微任务
    console.log('promise1') // 9
  }).then(function () { // 微任务
    console.log('promise2') // 10
  })
  console.log('script end') // 5
}
