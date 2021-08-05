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
