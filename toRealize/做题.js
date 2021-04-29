// // function red(){
// //     console.log('red');
// // }
// // function green(){
// //     console.log('green');
// // }
// // function yellow(){
// //     console.log('yellow');
// // }

// // function light(cb,timmer){
// //     return new Promise((resolve, reject) => {
// //         setTimeout(function(){
// //             cb();
// //             resolve(7777);
// //         },timmer)
// //     })
// // }

// // function step(){
// //     Promise.resolve().then(function(){
// //         return light(red, 5000)
// //     }).then(function(){
// //         return light(yellow, 3000)
// //     }).then(function(){
// //         return light(green, 500)
// //     }).then(function(res){
// //         console.log(res);
// //     })
// // }

// // step();
// // function* gen() {
// //     var r1 = yield fetch('https://api.github.com/users/github');
// //     var r2 = yield fetch('https://api.github.com/users/github/followers');
// //     var r3 = yield fetch('https://api.github.com/users/github/repos');

// //     console.log([r1.bio, r2[0].login, r3[0].full_name].join('\n'));
// // }

// // var i = gen();
// // var result = i.next();


// // function run(gen){
// //     var i = gen();

// //     function go(data){
// //         var result = i.next(data);
// //         if(result.done) return;

// //         result.value.then(data=>data.json()).then(data=>go(data));
// //     }

// //     go();
// // }

// // run(gen);

// // result.value.then(data=>data.json()).then(data=>i.next(data).value).then(data=>data.json()).then(data=>i.next(data).value).then(data=>data.json()).then(data=>i.next(data))
// // function fetchData(url) {
// //     return function (cb) {
// //         setTimeout(function () {
// //             cb({
// //                 status: 200,
// //                 data: url
// //             })
// //         }, 1000)
// //     }
// // }

// // function* gen() {
// //     var r1 = yield fetchData('https://api.github.com/users/github');
// //     var r2 = yield fetchData('https://api.github.com/users/github/followers');

// //     console.log([r1.data, r2.data].join('\n'));
// // }



// // r1.value(function(data) {
// //     var r2 = g.next(data);
// //     r2.value(function(data) {
// //         g.next(data);
// //     });
// // });

// // let f = function(cb){
// //         setTimeout(function(){
// //             cb({status: 200, data: url})
// //         }, 1000)
// //     }
// // let y = function(data){var r2 = g.next(data)};

// // f(y)

// // function run(gen) {
// //     var g = gen();



// //     function go(data){
// //         var result = g.next(data);
// //         if(result.done) return;
// //         result.value(go);
// //     }

// //     go();
// // }

// // async function test() {
// //     console.log(1)
// //     await Promise.resolve(console.log(2));
// //     console.log(3)
// // }
// // test();
// // console.log(4)

// // let a1 =  ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']

// // let a2 = ['A','B','C','D'].map(item=>item+3);

// // let a3 = [...a1,...a2].sort();

// // a3 = a3.map(item=>{
// //     if(item.includes('3')){
// //         return item.split('')[0]
// //     }
// //     return item
// // })

// // console.log(a3)

// // for (var i = 0; i< 10; i++){    
// // 	setTimeout((i) => {
// // 		console.log(i);
// //     }, 1000,i)
// // }

// // function sleep(time){
// // 	return new Promise((resolve,reject)=>{
// // 		setTimeout(()=>{console.log('休息一下'),resolve()},time)
// // 	})
// // }

// // sleep(2000);

// // var x = {
// // 	a: {
// // 		value: 3
// // 	},

// // 	b(a){
// // 		console.log(this.a.value);
// // 	}
// // }

// // x.b();

// // Number.prototype.add = function(n){
// // 	return this.valueOf() + n;
// // };

// // Number.prototype.minus = function(n){
// // 	return this.valueOf() - n;
// // };


// // console.log((5).add(3).minus(2))

// // var a = {1:222,2:123,5:888}

// // var b = Array(12).fill(null,0,12);

// // for(let i=0;i<b.length;i++){
// // 	if(a[i+1]!=undefined){
// // 		b[i] = a[i+1]
// // 	}
// // }

// // console.log(b)

// // function jiaoji(arr1,arr2){
// // 	return arr1.filter(item=> arr2.includes(item))
// // }

// // console.log(jiaoji([1,2,2,2,1],[2,2]));

// // let a = [2, 10, 3, 4, 5, 11, 10, 11, 20];
// // a.sort((a,b)=>a-b);
// // a = [...new Set(a)];
// // // console.log(a);// [2,3,4,5,10,11,20]
// // let b = [];
// // a.forEach(item=>{
// // 	let key = Math.floor(item/10);
// // 	if(!b[key]){
// // 		b[key] = [];
// // 		b[key].push(item)
// // 	}else{
// // 		b[key].push(item)
// // 	}
// // })
// // a = b;
// // console.log(a)

// // function contrary(s){
// // 	let a = s.split('');
// // 	let b = a.map(item=>{
// // 		return item === item.toUpperCase()? item.toLowerCase() : item.toUpperCase();
// // 	})

// // 	return b.join('');
// // }

// // console.log(contrary('aBc'))

// // function xuanzhuan(arr,k){
// // 	var length = arr.length
// // 	var arr1 = arr.splice(length-k,length);
// // 	arr = arr1.concat(arr);
// // 	return arr;
// // }

// // console.log(xuanzhuan([1, 2, 3, 4, 5, 6, 7] ,3))

// // let arr = [];

// // for(let i=1;i<10000;i++){
// // 	var s = i + '';
// // 	var a = s.split('');
// // 	if(s == a.reverse().join('')){
// // 		arr.push(i);
// // 	}
// // }

// // console.log(arr);


// // function removeZero(array) {
// // 	let len = array.length;
// // 	let j = 0;
// // 	for(let i=0;i<len-j;i++){
// // 		if(array[i]===0){
// // 			array.splice(i,1);//移除掉为0的元素
// // 			array.push(0); //在末尾添加0			
// // 			i --; //此时后面的元素都往前移了一位,所以下次判断哪个元素需要i--
// // 			j ++;//后面j个元素全部都是为0,如果不选择j++,后面为0的元素会一直循环下去,后面为0的元素不需要比较!
// // 		}
// // 	}
// // 	return array;
// // }

// // console.log(removeZero([0,1,2,2,0,1,0,0,5]))

function add(...arg) {
    var result = arg.reduce((prev, next) => prev + next);
    const fn = (...args) => add(...args, result);
    fn.toString = () => result;
    return fn;
}

// // console.log(add(1))

// // function answer(arr,target){
// // 	let a = [];
// // 	for(let i=0;i<arr.length;i++){
// // 		for(let j=i+1;j<arr.length;j++){
// // 			if(arr[i]+arr[j]==target){
// // 				a.push(i);
// // 				a.push(j);
// // 			}
// // 		}
// // 	}

// // 	return a;
// // }

// // answer([1,2,3,4],4)

// // const value = '1123456'
// // const fn = (value) => {
// // 	let a = value.split('');
// // 	let arr = [];
// // 	a.reduce((prev,next)=>(arr.push(prev+next-0),prev+next),0);
// // 	return arr;
// // }
// // console.log(fn(value))

// // function digui(num) {
// // 	let num1 = num / 10; //取整
// // 	let num2 = num % 10; //取余得最后一位数

// // 	if (num1 < 1) {
// // 		return num + '';
// // 	} else {
// // 		num1 = Math.floor(num1);
// // 		return num2 + `${digui(num1)}`
// // 	}
// // }

// // console.log(digui(12340))

// // function Foo() {
// // 	Foo.a = function () {
// // 		console.log(1)
// // 	}
// // 	this.a = function () {
// // 		console.log(2)
// // 	}
// // }
// // Foo.prototype.a = function () {
// // 	console.log(3)
// // }
// // Foo.a = function () {
// // 	console.log(4)
// // }
// // Foo.a(); //4
// // let obj = new Foo();
// // obj.a();//2
// // Foo.a();//1

// // function print(n) {
// // 	setTimeout(() => {
// // 		console.log(n);
// // 	}, Math.floor(Math.random() * 1000));
// // }
// // for (var i = 0; i < 100; i++) {
// // 	print(i);
// // }
// // function fn(str){
// //     let arr = str.split(',');
// //     let res = [];
// //     let i=0;
// //     let length = arr.length;
// //     for(let j=0;j<length;j++){
// //         if(arr[j+1]-arr[j]!==1){
// //             res.push(j==i?arr[j]:arr[i]+'~'+arr[j]);
// //             i = j+1;
// //         }
// //     }
// //     return res.join(',');
// // }

// // console.log(fn('1,3,4,5,7,8,9,11'))

// // var entry = {
// //     a: {
// //         b: {
// //             c: {
// //                 dd: 'abcdd'
// //             }
// //         },
// //         d: {
// //             xx: 'adxx'
// //         },
// //         e: 'ae'
// //     }
// // }

// // function fn(obj,parentkey="", res={}){
// //     for(var key in obj){
// //         let keyName= parentkey + key;
// //         if(typeof obj[key] == 'object'){
// //             fn(obj[key],keyName+'.',res)
// //         }else{
// //             res[keyName] = obj[key]            
// //         }
// //     }
// //     return res;
// // }

// // console.log(fn(entry))
// // 要求转换成如下对象
// // var output = {
// //     'a.b.c.dd': 'abcdd',
// //     'a.d.xx': 'adxx',
// //     'a.e': 'ae'
// // }

// // function fn1(obj){
// //     let keys = Object.keys(obj);
// //     let resObj = {}

// //     for(var key of keys){
// //         var arr = key.split('.');
// //         arr.reduce((pre,next,index,arr1)=>{
// //             if(index == arr1.length-1){
// //                 pre[next] = obj[key];
// //                 return
// //             }
// //             pre[next] = pre[next] || {}; //?为什么要写pre[next] = pre[next] || {}而不是直接等于空对象,因为等到key为'a.d.xx'的时候,再去遍历resobj[a]的时候在第一次循环已经为其赋值了,如果将其设置为空会出问题
// //             return pre[next]
// //         },resObj)
// //     }

// //     return resObj;
// // }

// // console.log(fn1(output))

// // let str1 = 'abcaakjbb', str2 = 'abbkejsbcccwqaa';

// // function fn2(str){
// //     let count = 0, maxCount = 0, cur = str[0], length = str.length, resObj = {};
// //     for(let i=0;i<length;i++){

// //         let s = str[i];
// //         if(s == cur){
// //             count++
// //         }else{
// //             count = 1;
// //             cur = s;
// //         }

// //         if(count>maxCount){
// //             resObj = {[s]: count};
// //             maxCount = count;
// //         }

// //         if(count == maxCount){
// //             resObj[s] = count;
// //         }
// //     }
// //     return resObj
// // }
// // console.log(fn2(str2))
// // const fruits = ["Apple","Orange","Banana","Apple"];
// // const qualityInBox = [1,2,4,5];

// // function fn(fruits, qualityInBox){
// //     let resArr = [];
// //     let obj = {};
// //     fruits.forEach((item,i)=>{
// //         if(!obj[item]){           
// //             obj[item]  = qualityInBox[i];
// //         }else{
// //             obj[item] = obj[item] + qualityInBox[i];
// //         }
// //     })


// //     for(let [key, value] of Object.entries(obj)){
// //         resArr.push({[key]: value});
// //     }

// //     return resArr;
// // }
// // console.log(fn(fruits,qualityInBox))

// var moveZeroes = function(nums) {
//     let len = nums.length;
//     for(let i = len-1; i>=0; i--){
//         if(nums[i] === 0){
//             nums.splice(i,1);
//             nums.push(0);
//             console.log(nums,i);       
//         }
//     }
//     return nums;
// };

// function moveZeroes1(nums){
//     let j = 0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]){
//             nums[j++] = nums[i];
//         }
//     }

//     for(j;j<nums.length;j++){
//         nums[j] = 0;
//     }

//     return nums;
// }

// console.log(moveZeroes1([0,0,1,2,0,0,6,0,0]))


// function findIndex(arr, target){
//     let map = new Map();

//     for(let i=0;i<arr.length;i++){
//         let key = target - arr[i];
//         if(map.has(key)){
//             return [map.get(key), i];
//         }
//         map.set(arr[i], i);
//     }

//     return '没找到';
// }

// console.log(findIndex([2,2,4,5],4))

// function print(n) {
//     setTimeout((() => {
//         console.log(n);
//         return ()=>{}
//     })(), Math.floor(Math.random() * 1000));
// }
// for (var i = 0; i < 100; i++) {
//     print(i);
// }

// function lianxu(str){
//     let arr = str.split(',');
//     let result = [];
//     let j = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i+1] - arr[i]!==1){
//             let key = j==i? arr[i]: arr[j] + '~' + arr[i];
//             result.push(key);
//             j = i+1;
//         }
//     }

//     return result.join(',');
// }

// console.log(lianxu('1,2,3,5,7,8,9,6,7,10,12,13'))


// function trans(obj, parentKey = '', res = {}) {
//     for (var key in obj) {
//         let keyName = parentKey + key;
//         typeof obj[key] == 'object' ? trans(obj[key], keyName + '.', res) : res[keyName] = obj[key]
//     }

//     return res;
// }

// var entry = {
//     a: {
//         b: {
//             c: {
//                 dd: 'abcdd'
//             }
//         },
//         d: {
//             xx: 'adxx'
//         },
//         e: 'ae'
//     }
// }

// console.log(trans(entry))

// function transTwo(obj) {
//     let keys = Object.keys(obj);
//     let res = {};
//     for (let key of keys) {
//         let arr = key.split('.');

//         arr.reduce((pre, next, index, arr1) => {
//             if (index == arr1.length - 1) {
//                 pre[next] = obj[key];
//                 return;
//             }
//             pre[next] = pre[next] || {};
//             return pre[next]
//         }, res)
//     }

//     return res;
// }

// let x = {
//     'a.b.c.dd': 'abcdd',
//     'a.d.xx': 'adxx',
//     'a.e': 'ae'
// }

// console.log(transTwo(x));

// function tongji(str){
//     let arr = str.split('');
//     let max = 1;
//     let count = 1;
//     let temp = arr[0];
//     let res = {[temp]: 1};

//     for(let i=1;i<arr.length;i++){
//         if(arr[i] == temp){
//             count++;
//         }else{
//             temp = arr[i];
//             count = 1;
//         }

//         if(count>max){
//             res = {[temp]: count}
//             max = count;
//         }

//         if(count == max){
//             res[temp] = count;
//         }
//     }

//     return res;
// }

// console.log(tongji('abccaaaccc'))

// console.log(1 + "1") // '11'

// console.log(2 * "2") // 4

// console.log([1, 2] + [2, 1]) //'1,22,1'

// console.log("a" + + "b") //'aNaN'

// function origin(arr){
//     let res = [];
//     while(arr.length>1){
//         res.push(arr.pop());
//         res.push(res.shift());
//     }

//     res.push(arr.pop())

//     return res;
// }

// console.log(origin([1,2,3,4,5,6,7,8,9,10,11,12,13]));

// function myInterval(fn, time){
//     let f = function(){
//         setTimeout(fn, time)
//     };    
//     return f();
// }

// class LazyManClass {
//     constructor(name) {
//         this.taskList = [];
//         this.name = name;
//         console.log(`Hi I am ${this.name}`);
//         setTimeout(() => {
//             this.next();
//         }, 0);
//     }
//     eat(name) {
//         var that = this;
//         var fn = function () {
//             console.log(`I am eating ${name}`)
//             that.next();
//         }
//         this.taskList.push(fn);
//         return this;
//     }
//     sleepFirst(time) {
//         var that = this;
//         var fn = function () {

//             setTimeout(() => {
//                 console.log(`等待了${time}秒...`)
//                 that.next();
//             }, time * 1000);

//         };
//         this.taskList.unshift(fn);
//         return this;
//     }
//     sleep(time) {
//         var that = this
//         var fn = function () {

//             setTimeout(() => {
//                 console.log(`等待了${time}秒...`)
//                 that.next();
//             }, time * 1000);

//         }
//         this.taskList.push(fn);
//         return this;
//     }
//     next() {
//         var fn = this.taskList.shift();
//         fn && fn();
//     }
// }

// function LazyMan(name) {
//     return new LazyManClass(name);
// }
// LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(4).eat('junk food');

// function Foo() {
//     Foo.a = function () {
//         console.log(1)
//     }
//     this.a = function () {
//         console.log(2)
//     }
// }
// Foo.prototype.a = function () {
//     console.log(3)
// }
// Foo.a = function () {
//     console.log(4)
// }
// Foo.a(); //4
// let obj = new Foo(); 
// obj.a(); //2
// Foo.a(); //1

function print(n) {
    setTimeout((() => {
        console.log(n);
        return () => {}
    })(), Math.floor(Math.random() * 1000));
}
for (var i = 0; i < 100; i++) {
    print(i);
}

