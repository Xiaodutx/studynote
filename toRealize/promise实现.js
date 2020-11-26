// function add(a){
//     function sum(b=0){
//         a = a+b;
//         return sum;
//     }
//     sum.toString = function(){
//         return a;
//     }
//     return sum;
// }

const { resolve } = require("core-js/fn/promise");

// console.log(add(1)(2)(3));
// console.log('11111');
function unzip(arr = []) {
    return arr.reduce(
        (t, v) => (v.forEach((m, i) => t[i].push(m)), t),
        Array.from({
            length: Math.max(...arr.map(v => v.length))
        }).map(v => [])
    )
}

// const arr = [["a", 1, true], ["b", 2, false]];
// console.log(unzip(arr)); 

function count(arr = []) {
    return arr.reduce((t, v) => (t[v] = (t[v] || 0) + 1, t), {})
}

// const arr = [0, 1, 1, 2, 2, 2];
// console.log(count(arr));

function position(arr = [], val) {
    return arr.reduce((t, v, i) => (v === val && t.push(i), t), [])
}
// const arr = [2, 1, 5, 4, 2, 1, 6, 6, 7];
// console.log(position(arr, 6))

const PENDING = "pending"; //初始值，不是fulfilled，也不是rejected
const FULFILLED = "filfilled"; //代表操作成功
const REJECTED = "rejected"; //代表操作失败

function myPromise(fn) {
    console.log(1);
    let that = this;
    that.state = PENDING;
    that.value = null;
    that.resolvedCallBacks = [];
    that.rejectedCallBacks = [];

    // 首先两个函数都得判断当前状态是否为等待中，因为规范规定只有等待态才可以改变状态
    // 将当前状态更改为对应状态，并且将传入的值赋值给 value
    // 遍历回调数组并执行

    function resolve(value) {
        console.log(2);

        if (that.state == PENDING) {
            that.value = value;
            that.resolvedCallBacks.map(cb => that.value);
        }
    };

    function reject(value) {
        console.log(3);

        if (that.state == PENDING) {
            that.value = value;
            that.rejectedCallBacks.map(cb => that.value);
        }
    };

    // 实现很简单，执行传入的参数并且将之前两个函数当做参数传进去
    // 要注意的是，可能执行函数过程中会遇到错误，需要捕获错误并且执行 reject 函数
    try {
        console.log(4);

        fn(resolve, reject)
    } catch (e) {
        console.log(5);

        reject(e)
    }
}

myPromise.prototype.then = function (onFulfilled, onRejected) {
    const that = this;
    console.log(6);
    // 首先判断两个参数是否为函数类型，因为这两个参数是可选参数
    // 当参数不是函数类型时，需要创建一个函数赋值给对应的参数，同时也实现了透传
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : v => v;
    onRejected = typeof onRejected === "function" ? onRejected : r => {
        throw r
    };
    // 接下来就是一系列判断状态的逻辑，当状态不是等待态时，就去执行相对应的函数。
    // 如果状态是等待态的话，就往回调函数中 push 函数
    if (that.state === PENDING) {
        that.resolvedCallBacks.push(onFulfilled);
        that.rejectedCallBacks.push(onRejected);
    }
    if (that.state === FULFILLED) {
        onFulfilled(that.value)
    }
    if (that.state === REJECTED) {
        onRejected(that.value)
    }
}

new myPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(9)
    }, 3000)
}).then(res => {
    console.log(res)
    console.log(7)
}, err => {
    console.log(8)
})

myPromise.prototype.finally = function(fn){
    let P = this.constructor;
    return this.then(
        value => P.resolve(()=>fn()).then(()=>value),
        error => P.resolve(()=>fn()).then(()=>error)
    )
}

Promise.prototype.race = function(promises){
    return new Promise((resolve,reject)=>{
        promises.forEach(promise=>{
            Promise.resolve(promise).then(resolve,reject);            
        })
    })
}

Promise.prototype.all = function(promises){
    let arr = [];
    let i = 0;

    function processData(data,index){
        arr[index] = data;
        i++;
        if(i == promises.length){
            resolve(arr)
        }
    }

    return new Promise((resolve,reject)=>{
        promises.forEach((promise,i)=>{
            Promise.resolve(promise).then(data=>{
                processData(data,i)
            },reject)
        })
    })
}

