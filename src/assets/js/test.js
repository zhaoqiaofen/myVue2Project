// 事件循环机制 有这几个概念
// 1、任务队列：js是单线程的，所有任务（程序员写的每一行代码，或者每个代码块）都在一个线程上面执行，任务排成一队，形成了队列，所以称为任务队列
// 2、同步任务：会阻塞代码执行
// 3、异步任务：不会阻塞代码执行
// 4、宏任务：由宿主（浏览器或者Node）发起的，有①整个代码(scirpt)；②setTimeout, setInterval, setImmediate(nodejs的),的回调函数；③ajax的回调函数；④I/O（nodejs）
// 5、微任务：由JavaScript自身发起的，有①promise中的then()②process.nextTikc(nodejs)；
// 注：微任务是宏任务的组成部分,微任务与宏任务是包含关系,并非前后并列，宏任务包含微任务.如果要谈微任务,需要指出它属于哪个宏任务才有意义。
// 注：直接执行的有：（1）console.log(),（2）new promise里面的。
// 总结：事件循环机制就是执行代码的过程中，遇到script标签，就把它放到宏任务队列中，然后拿出script这个宏任务出来执行，
// 如果执行过程中遇到setTimeout,就把它放到宏任务队列中，继续向下执行，
// 如果遇到Promise.then，就把它放到微任务队列中，继续向下执行，
// 直到这个script第一个宏任务执行完，就去微任务队列中看有没有任务，
// 如果有就先执行微任务队列中的任务，直到微任务队列中的任务执行完，再去宏任务中拿任务来执行，一直这样循环下去；
// 就算某一时刻没有宏任务和微任务，它也会一直在监听任务。
export function test () {
  new Promise(resolve => {
    setTimeout(() => {
      console.log(666)
      new Promise(resolve => {
        resolve()
      }).then(() => { console.log(777) })
    })
    resolve()
  }).then(() => {
    new Promise(resolve => {
      resolve()
    }).then(() => { console.log(111) }).then(() => { console.log(222) })
  }).then(() => {
    new Promise((resolve) => {
      resolve()
    }).then(() => {
      new Promise((resolve) => {
        resolve()
      }).then(() => { console.log(444) })
    }).then(() => {
      console.log(555)
    })
  }).then(() => {
    console.log(333)
  })
}
