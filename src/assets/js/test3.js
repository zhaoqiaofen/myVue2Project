export function test3 () {
  // let arr = [1, 2, 3, 4, 5]
  // 一、在数组末尾添加元素=============================================push
  // let arr2 = arr.push(6)
  // console.log('arr2', arr2)
  // 二、删除数组末尾的元素=============================================pop
  // let arr2 = arr.pop()
  // console.log('arr', arr)
  // console.log('arr2', arr2)
  // 三、在数组首位添加元素=============================================unshift
  // let arr2 = arr.unshift(0)
  // console.log('arr', arr)
  // console.log('arr2', arr2)
  // 四、删除数组首位的元素=============================================shift
  // let arr2 = arr.shift()
  // console.log('arr', arr)
  // console.log('arr2', arr2)
  // 五、将字符串拆分成数组=============================================split
  // let obj = 'hello body'
  // let arr = obj.split(' ')
  // console.log('arr', arr)
  // 六、将数组拼接成字符串=============================================join
  // let arr = ['hello', 'body']
  // let arr2 = arr.join('-')
  // console.log('arr2', arr2)
  // 七、将数组拆分成字符串=============================================toString
  // let arr = ['hello', 'body']
  // let arr2 = arr.toString()
  // console.log('arr2', arr2)
  // 八、获取数组中的某个或者多个元素(切片)==============================slice
  // let arr = ['hello', 'body', 'gery', 'candy']
  // let arr2 = arr.slice(1, 3)
  // console.log('arr2', arr2)
  // 九、去掉数组中的某个或多个元素，并替换成新的元素（剪接）==============splice
  // let arr = ['hello', 'body', 'gery', 'candy']
  // let arr2 = arr.splice(1, 1, 'boy')
  // console.log('arr2', arr2)
  // console.log('arr', arr)
  // 十、连接两个或多个数组==============================================concat
  // let arr = [1, 2, 3]
  // let arr2 = [4, 5, 6]
  // let arr3 = arr.concat(arr2)
  // console.log('arr3', arr3)
  // 十一、判断是否为数组================instanceof======================Array.isArray
  // let arr = [1, 2, 3]
  // console.log('arr', arr instanceof Array)
  // console.log('arr2', Array.isArray(arr))
  // 十二、数组降序和升序================================================sort
  // let arr = [1, 3, 5, 2, 7, 6, 8, 4, 9, 10]
  // let arr2 = arr.sort((a, b) => a - b) // 升序
  // console.log('arr2', arr2)
  // let arr3 = arr.sort((a, b) => b - a) // 降序
  // console.log('arr3', arr3)
  // 十三、翻转数组======================================================reverse
  // let arr = [1, 2, 3, 4, 5]
  // let arr2 = arr.reverse()
  // console.log('arr2', arr2)
  // 十四、数组去重=============indexOf============Set===================splice
  // let arr = [1, 2, 3, 4, 5, 6, 5, 7, 2, 8, 9]
  // ====方法一：使用indexOf
  // let arr2 = []
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr2.indexOf(arr[i]) === -1) {
  //     arr2.push(arr[i])
  //   }
  // }
  // console.log('arr2', arr2)
  // ====方法二：new Set
  // let arr3 = Array.from(new Set(arr))
  // let arr4 = [...new Set(arr)]
  // console.log('arr3', arr3)
  // console.log('arr4', arr4)
  // ====方法三：使用splice
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] === arr[j]) {
  //       arr.splice(j, 1)
  //       j--
  //     }
  //   }
  // }
  // console.log('arr', arr)
  // 十五、将一个具有length属性的对象（类数组）转变为真正的数组=======Array.from======Array.prototype.slice.call()
  // let obj = {
  //   0: '1',
  //   1: '2',
  //   2: '3',
  //   3: ['4', '5', '6'],
  //   length: 4
  // }
  // console.log('obj', Array.from(obj))
  // console.log('obj2', Array.prototype.slice.call(obj))
  // 十六、数组循环for...in、for...of和forEach的区别===========for...in===========for...of=============forEach
  // for...in适用于纯对象的遍历，循环读取键名，不可中断
  // let arr = {
  //   name: '张三',
  //   age: 24
  // }
  // for (let i in arr) {
  //   console.log('i', i)
  // }
  // // for...of适用于无需知道索引值的数组遍历，循环读取键值，可以中断，可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、Generator 对象，以及字符串,不能循环对象
  // let arr1 = ['a', 'b', 'c', 'd']
  // for (let j of arr1) {
  //   console.log('j', j)
  // }
  // forEach适用于需要知道索引值的数组遍历，不可中断
  // let arr = ['a', 'b', 'c', 'd']
  // arr.forEach((value, key) => {
  //   if (value === 'a') {
  //     console.log('aaaaaaaaa')
  //     return false
  //   }
  //   console.log('key', key)
  //   console.log('value', value)
  // })
  // console.log('arr', arr)
  // 十七、数组迭代器 ==================================================forEach every some map filter
}
