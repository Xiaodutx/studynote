// // // // function maopao(arr){
// // // //     for(let i=arr.length;i>0;i--){
// // // //         for(let j=0;j<i;j++){
// // // //             if(arr[j]>arr[j+1]){
// // // //                 let temp = arr[j];
// // // //                 arr[j] = arr[j+1];
// // // //                 arr[j+1] = temp;
// // // //             }
// // // //         }
// // // //     }

// // // //     return arr;
// // // // }

// // // // console.log(merge([5,6,2,4,1,3,7]))

// // // // function charu(arr){
// // // //     for(let i=1;i<arr.length;i++){
// // // //         let j = i-1;
// // // //         let key = arr[i];
// // // //         while(key<arr[j]&&j>=0){
// // // //             arr[j+1] = arr[j];
// // // //             j--;
// // // //         }
// // // //         arr[j+1] = key;
// // // //     }
// // // //     return arr;
// // // // }

// // // // function xuanze(arr){
// // // //     for(let i=0;i<arr.length;i++){
// // // //         let index = i; //最小数组的下标

// // // //         for(let j=i+1;j<arr.length;j++){
// // // //             if(arr[index]>arr[j]){
// // // //                 index = j;
// // // //             }
// // // //         }
// // // //         let temp =arr[i];
// // // //         arr[i] = arr[index];
// // // //         arr[index] = temp;
// // // //     }

// // // //     return arr;
// // // // }

// // // // function merge(arr){

// // // //     if(arr.length<2){
// // // //         return arr
// // // //     }

// // // //     let mid = Math.floor(arr.length/2);
// // // //     let left = arr.slice(0,mid);
// // // //     let right = arr.slice(mid);

// // // //     return mergeSort(merge(left),merge(right))
// // // // }

// // // // function mergeSort(left,right){
// // // //     var result = [];
// // // //     while(left.length&&right.length){
// // // //         if(left[0]<=right[0]){
// // // //             result.push(left.shift())
// // // //         }else{
// // // //             result.push(right.shift())
// // // //         }
// // // //     }

// // // //     while(left.length){
// // // //         result.push(left.shift())
// // // //     }

// // // //     while(right.length){
// // // //         result.push(right.shift())
// // // //     }

// // // //     return result;
// // // // }

// // // // function kuaisu(arr,i,j){
// // // //     if(i<j){
// // // //         let left = i;
// // // //         let right = j;
// // // //         let pivot = arr[left];
// // // //         while(i<j){
// // // //             while(arr[j]>=pivot&&j>i){
// // // //                 j--
// // // //             }
// // // //             if(i<j){
// // // //                 arr[i] = arr[j]
// // // //             }
// // // //             while(arr[i]<=pivot&&i<j){
// // // //                 i++
// // // //             }
// // // //             if(i<j){
// // // //                 arr[j] = arr[i]
// // // //             }
// // // //         }
// // // //         arr[i] = pivot;
// // // //         kuaisu(arr,left,i-1);
// // // //         kuaisu(arr,i+1,right);
// // // //     }

// // // //     return arr;
// // // // }

// // // // console.log(kuaisu([5,6,2,4,1,3,7,8,9,6],0,9))

// // // function maopao(arr) {
// // //     for (let i = arr.length - 1; i > 0; i--) {
// // //         for (let j = 0; j < i; j++) {
// // //             if (arr[j] > arr[j + 1]) {
// // //                 let temp = arr[j];
// // //                 arr[j] = arr[j + 1];
// // //                 arr[j + 1] = temp;
// // //             }
// // //         }
// // //     }
// // //     return arr;
// // // }

// // // console.log(kuaisu([8, 7, 5, 3, 4, 6, 1, 6, 2], 0, 8))

// // // function charu(arr) {
// // //     for (let i = 1; i < arr.length; i++) {
// // //         let key = arr[i];
// // //         let j = i - 1;
// // //         while (key < arr[j] && j >= 0) {
// // //             arr[j + 1] = arr[j];
// // //             j--;
// // //         }
// // //         arr[j + 1] = key;
// // //     }

// // //     return arr;
// // // }

// // // function xuanze(arr) {
// // //     for (let i = 0; i < arr.length; i++) {
// // //         let minIndex = i;
// // //         for (let j = i + 1; j < arr.length; j++) {
// // //             if (arr[j] < arr[minIndex]) {
// // //                 minIndex = j;
// // //             }
// // //         }
// // //         let temp = arr[i];
// // //         arr[i] = arr[minIndex];
// // //         arr[minIndex] = temp;
// // //     }

// // //     return arr;
// // // }

// // // function merge(arr) {
// // //     if (arr.length < 2) {
// // //         return arr;
// // //     }
// // //     let mid = Math.floor(arr.length / 2);
// // //     let left = arr.slice(0, mid);
// // //     let right = arr.slice(mid);

// // //     return mergeSort(merge(left), merge(right))
// // // }

// // // function mergeSort(left, right) {
// // //     let result = [];
// // //     while (left.length && right.length) {
// // //         if (left[0] < right[0]) {
// // //             result.push(left.shift());
// // //         } else {
// // //             result.push(right.shift());
// // //         }
// // //     }

// // //     while (left.length) {
// // //         result.push(left.shift());
// // //     }

// // //     while (right.length) {
// // //         result.push(right.shift());
// // //     }

// // //     return result;
// // // }

// // // function kuaisu(arr, i, j) {
// // //     if (i < j) {
// // //         let pivot = arr[i];
// // //         let left = i;
// // //         let right = j;
// // //         while (i < j) {
// // //             while (arr[j] >= pivot && j > i) {
// // //                 j--
// // //             }
// // //             arr[i] = arr[j];

// // //             while (arr[i] <= pivot && j > i) {
// // //                 i++
// // //             }
// // //             arr[j] = arr[i]
// // //         }

// // //         arr[i] = pivot;
// // //         kuaisu(arr, left, i - 1);
// // //         kuaisu(arr, i + 1, right);
// // //     }

// // //     return arr;
// // // }

// // function maopao(arr){
// //     for(let i=arr.length-1;i>0;i--){
// //         for(let j=0;j<i;j++){
// //             if(arr[j]>arr[j+1]){
// //                 let temp = arr[j];
// //                 arr[j] = arr[j+1];
// //                 arr[j+1] = temp;
// //             }
// //         }
// //     }

// //     return arr;
// // }

// // function charu(arr){
// //     for(let i=1;i<arr.length;i++){
// //         let key = arr[i];
// //         let j = i-1;
// //         while(arr[j]>key&&j>=0){
// //             arr[j+1] = arr[j];
// //             j--
// //         }

// //         arr[j+1] = key;
// //     }

// //     return arr;
// // }

// // function xuanze(arr){
// //     for(let i=0;i<arr.length;i++){
// //         let minIndex = i;
// //         for(let j=i+1;j<arr.length;j++){
// //             if(arr[j]<arr[minIndex]){
// //                 minIndex = j;
// //             }
// //         }
// //         let temp = arr[i];
// //         arr[i] = arr[minIndex];
// //         arr[minIndex] = temp
// //     }

// //     return arr;
// // }

// // function merge(arr){
// //     if(arr.length<2){
// //         return arr;
// //     }

// //     let mid = Math.floor(arr.length/2);
// //     let left = arr.slice(0,mid);
// //     let right = arr.slice(mid);

// //     return mergeSort(merge(left),merge(right))
// // }

// // function mergeSort(left,right){
// //     let result = [];

// //     while(left.length&&right.length){
// //         left[0]<right[0]? result.push(left.shift()): result.push(right.shift())
// //     }

// //     while(left.length){
// //         result.push(left.shift());
// //     }

// //     while(right.length){
// //         result.push(right.shift());
// //     }

// //     return result;
// // }

// // function kuaisu(arr, i, j){
// //     if(i<j){
// //         let pivot = arr[i];
// //         let left = i;
// //         let right = j;

// //         while(i<j){
// //             while(arr[j]>pivot&&i<j){
// //                 j--
// //             }
// //             arr[i] = arr[j];
// //             while(arr[i]<pivot&&i<j){
// //                 i++
// //             }
// //             arr[j] = arr[i]
// //         }

// //         arr[i] = pivot;
// //         kuaisu(arr,left,i-1);
// //         kuaisu(arr,i+1,right);
// //     }

// //     return arr;
// // }

// // console.log(merge([1,2,2,5,3,3,6],0,6))

// function maopao(arr){
//     for(let i=arr.length-1;i>0;i--){
//         for(let j=0;j<i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }

//     return arr;
// }

// function charu(arr){
//     for(let i=1;i<arr.length;i++){
//         let key = arr[i];
//         let j = i-1;
//         while(arr[j]>key&&j>=0){
//             arr[j+1] = arr[j];
//             j--
//         }

//         arr[j+1] = key
//     }

//     return arr;
// }

// function xuanze(arr){
//     for(let i=0;i<arr.length;i++){
//         let minIndex = i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 minIndex = j;
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp
//     }

//     return arr;
// }

// function merge(arr){
//     if(arr.length<2){
//         return arr;
//     }

//     let mid = Math.floor(arr.length/2);
//     let left = arr.slice(0,mid);
//     let right = arr.slice(mid);

//     console.log(left,right)

//     return mergeSort(merge(left),merge(right));
// }

// function mergeSort(left, right){
//     let result = [];
//     console.log(left,right,1)
//     while(left.length&&right.length){
//         left[0] < right[0]? result.push(left.shift()) : result.push(right.shift());
//     }

//     while(left.length){
//         result.push(left.shift())
//     }

//     while(right.length){
//         result.push(right.shift())
//     }

//     return result;
// }

// function kuaisu(arr, i, j){
//     if(i<j){
//         let pivot = arr[i];
//         let left = i;
//         let right = j;

//         while(i<j){

//             while(arr[j]>=pivot&&j>i){
//                 j--;
//             }
//             arr[i] = arr[j];

//             while(arr[i]<=pivot&&j>i){
//                 i++;
//             }
//             arr[j] = arr[i];
//         }

//         arr[i] = pivot;
//         kuaisu(arr, left, i-1);
//         kuaisu(arr, i+1, right);
//     }
//     return arr;
// }

// console.log(kuaisu([1,2,2,5,3,3,6,8],0,7))

function throttle(fn, delay) {
  let flag = true;
  let timer;

  return function (...args) {
    let context = this;
    if (!flag) {
      return;
    }

    flag = false;
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

function debounce(fn, delay) {
  let timer = null;

  return function (...args) {
    let context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

// function add(...args){
//     let result = args.reduce((prev, cur) => prev+cur);

//     let fn = (...args)=> add(result,...args);

//     fn.toString = ()=> result;

//     return fn;
// }

// console.log(add(1,2)(3))

function foo() {
  console.log("first");
  setTimeout(function () {
    console.log("second");
  }, 5);
}

for (var i = 0; i < 1000000; i++) {
  foo();
}
