// 1. string interpolation ("", '', ``) ---> back tick
let name = 'jt'
console.log('the teacher\'s name is ' + name)
console.log(`the teacher's name is ${name}`)
console.log(`the teacher's age is ${2024-2006}`)

const date = new Date() // Date is an internal class defined by js developer
// format: hh:mm:ss
console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)

// 2. spread operator ... (array, object)
// 1> duplicate array/object
let names = ['jt', 'tony', 'hangning']
// let names2 = names  // be careful!
let names2 = [...names]
names2[0] = 'test'
console.log(names, names2)

let car = {color: 'red'}
let car2 = {...car}
// 2> edit array/object
let names3 = [...names, 'Shengge', 'Niexiaoying']
let names4 = ['Mark', ...names2, 'Xing', ...names3]
console.log(names4)

let car3 = {...car, owner: 'JT'}
console.log(car3)

let car4 = {owner: 'Xing'}
let car5 = {color: 'green', owner: 'Tony'}
let newCar = {...car5, ...car4}
let newCar2 = {...car4, ...car5}
console.log(newCar, newCar2)

// 3> other features...
// function print(x) {console.log(x)}
// print(...)

// 3. Arrow function
function sum(a, b) {
    return a + b
}

const sum2 = function(a, b) {
    return a + b
}

const sum3 = (a, b) => {
   return a + b
}
console.log(sum(2,3), sum2(2, 3), sum3(2,3))

// Features of arrow function
// 1> if there is only 1 parameter, () can be omitted
const myFun = x => {
    return x**2
}
// 2> if there is only 1 expression/statement to return sth, {} and return can be omitted
// exception: when you return one object, use ({})
const myFun2 = x => x**2
const exceptionFun = (owner, name) => ({[owner]: name})
console.log(exceptionFun('Lablaws', 'sucks'))

// 3> Arrow function vs regular function
// -hoisting
// -arrow function does not have its bindings to this or super, and should not be used as method
let myCar = {
    color: 'red',
    horn: function(){
        console.log('hello', this.color)
    }
}
myCar.horn()

let myCar2 = {
    color: 'red',
    horn: ()=> {
        console.log('hello', this.color)
    }
}
myCar2.horn()

// 4. Array method
// examples: forEach, map, filter, reduce, find, some, sort, ...
// refer to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// array.map: returns array with same number of elements
const imgArr = ['url1', 'url2', 'url3']
let imgArr2 = imgArr.map((item, index)=>`https://${item}${index}`)
console.log(imgArr2)
// array.forEach: return undefined
let imgArr3 = imgArr.forEach(item=>`https://${item}`)
console.log(imgArr3)
// console.log(imgArr)

// let totalPrice = ''
// imgArr.forEach(item=>{
//     totalPrice += item
// })
// console.log(totalPrice)
// array.filter: return array with satisfied requirement
let filteredArr = imgArr.filter(item => item === 'url2'|| item ==='url3')
console.log(filteredArr)

// 5. destruction: array and object
const size = 'small'
let phone = {
    brand: 'Huawei',
    price: 300,
    size, // is same to
    // size: size
    owner: {
        name2: 'JT',
        age: 24
    }
}
console.log(phone)
// console.log(phone.price) is same to:
const {price} = phone
console.log(price)
// destructing from nested object
const {owner: {name2}} = phone
console.log(name2)

let [first, second] = imgArr
console.log('first', first, 'second', second)

let [,,third] = imgArr
console.log('third', third)

let [,...rest] = imgArr
console.log('rest', rest)

// useState --> hook
// const [state, updateState] = useState('JT')

// push: 添加到尾部，原数组会改变
// unshift: 添加到头部，原数组会改变
// splice: 添加到任意位置，原数组会改变 splice(start, deleteCount, item1, item2, itemN)
// concat: 拼接数组
// pop：删除尾部元素，改变原数组，返回删除的元素
// shift:删除头部元素，改变原数组，返回删除的元素
// slice: 截取元素 slice(start, end) ---[ )
// indexOf: 查找，返回index，没有就是-1
// includes: 返回true/false
// sort: 排序
// reverse: 倒序
// join: 将arr转成string, 不改变原数组 arr.join(',')
// every: 将数组每一项传入一个函数，如果每一项都符合条件才返回true
// forEach: 遍历，不需要返回值
// map：新建数组并返回数
// reduce: 函数累加器，从左到右开始，高阶函数 arr.reduce(callback[, initialValue])
// set: 去除重复值
// some: 将数组每一项传入函数中，如果有一个符合添加就返回true，剩下的就不会再执行





