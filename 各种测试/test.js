// async function ay() {
//     let t1Promise = fun1();
//     let t2Promise = fun2();
//     console.log(t1Promise);
//     t1 = await t1Promise;
//     t2 = await t2Promise;
//     console.log(t1);
//     console.log(t2);
// }

// async function fun1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             return resolve(1);
//         }, 2000)
//     })
// }

// async function fun2(p) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return resolve(2);
//         }, 2000)
//     })
// }
// //ay()

// const PENDDING = 'pendding';
// const RESOLVE = 'resolve';
// const REJECT = 'reject';

// function myPromise(fn) {
//     const that = this;
//     that.value = null;
//     that.state = PENDDING;
//     that.resolveCallbacks = [];
//     that.rejectCallbacks = [];

//     function resolve(value) {
//         if (that.state == PENDDING) {
//             that.state = RESOLVE;
//             that.value = value;
//             that.resolveCallbacks.map(cb => cb(that.value));
//         }
//     }

//     function reject(value) {
//         if (that.state = PENDDING) {
//             that.state = REJECT;
//             that.value = value;
//             that.rejectCallbacks.map(cb => cb(that.value));
//         }
//     }

//     try {
//         fn(resolve, reject);
//     } catch (e) {
//         reject(e)
//     }
// }

// myPromise.prototype.then = function (fulfilled, rejected) {
//     const that = this;
//     console.log(that);
//     fulfilled = typeof fulfilled == 'function' ? fulfilled : v => v;
//     rejected = typeof rejected == 'function' ? rejected : v => {
//         throw v
//     };

//     if (that.state == PENDDING) {
//         that.resolveCallbacks.push(fulfilled);
//         that.rejectCallbacks.push(rejected);
//     }

//     if (that.state == RESOLVE) {
//         fulfilled(that.value);
//     }

//     if (that.state == REJECT) {
//         rejected(that.value);
//     }
// }

// // new myPromise((resolve, reject) => { resolve(6) }).then(val => console.log(val));
// // new myPromise((resolve, reject) => {
// //     setTimeout(() => { console.log(666);resolve(8) }, 5000)
// // }).then(val => console.log(val));

// Function.prototype.myCall = function (ctx) {
//     ctx = ctx || window;
//     let fn = Symbol();
//     let arg = [...arguments].slice(1);
//     ctx[fn] = this;
//     let result = ctx[fn](...arg);
//     delete ctx[fn];
//     return result;
// }

// Function.prototype.myApply = function (ctx) {
//     ctx = ctx || window;
//     let fn = Symbol();
//     ctx[fn] = this;
//     let arg = arguments[1];
//     let result = ctx[fn](...arg);
//     delete ctx[fn];
//     return result;
// }

// Function.prototype.myBind = function (ctx) {
//     const that = this;
//     ctx = ctx || window;
//     let arg = arguments[1];

//     return function F() {
//         if (this instanceof F) {
//             return new that(...arg, ...arguments);
//         }
//         let result = that.apply(ctx, arg.concat(...arguments));
//         return result;
//     }
// }

// function myNew(object, ...args) {
//     let newObj = Object.create(object.prototype);
//     let res = object.apply(newObj, args);
//     console.log(res);
//     return typeof res == 'object' ? res : newObj;
// }

// function Student(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Student.prototype.say = function () {
//     console.log(this.name + this.age);
// }

// let s = myNew(Student, 'xxx', 20);
// s.say();

// // function test(a, b, c) {
// //     console.log(this.name + this.age + a + b + c);
// // }

// // let a = { age: 18, name: 'xxx' };

// // test.myApply(a, [1, 2])

// let arr = [{
//         id: 2,
//         name: '部门2',
//         pid: 1
//     },
//     {
//         id: 3,
//         name: '部门3',
//         pid: 1
//     },
//     {
//         id: 4,
//         name: '部门4',
//         pid: 3
//     },
//     {
//         id: 5,
//         name: '部门5',
//         pid: 4
//     },
//     {
//         id: 1,
//         name: '部门1',
//         pid: 0
//     },
// ]

// function arrayToTree(arr) {
//     let result = [];
//     let arrMap = {};


//     for (let item of arr) {
//         arrMap[item.id] = {
//             ...item,
//             children: []
//         };
//     }

//     for (let item of arr) {
//         let id = item.id;
//         let pid = item.pid;
//         pid == 0 ? result.push(arrMap[id]) : arrMap[pid].children.push(arrMap[id]);
//     }
//     return result;
// }

// function arrayToTree2(items) {
//     let result = [];
//     for (let item of items) {
//         let parent = items.find(v => v.id == item.pid);
//         if (parent) {
//             parent.children ? parent.children.push(item) : parent.children = [item];
//         } else {
//             result.push(item);
//         }

//     }
//     return result;
// }

// function arrayToTree(items) {
//     let result = [];
//     let arrMap = {}

//     for (let item of items) {
//         arrMap[item.id] = {
//             ...items,
//             children: []
//         };
//     }

//     for (let itme of items) {
//         let id = item.id;
//         let pid = item.pid;
//         pid == 0 ? result.push(item) : arrMap[pid].children.push(item);
//     }
// }

// // console.log(arrayToTree2(arr), arr)

function getUserMenu() {
    return new Promise((resolve, reject) => {
        resolve(3);
    })
}

function getMenu() {
    return new Promise((resolve, reject) => {
        getUserMenu().then(res => {
            resolve(res);
        })
    })
}

function getMenuTest() {
    getUserMenu().then(res => {
        return 3
    });
}

let d = getMenuTest();
console.log(d);

// getMenu().then(res=>{console.log(res)});