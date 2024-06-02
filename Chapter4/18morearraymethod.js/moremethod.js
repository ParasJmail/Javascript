let num = [421,233,143,634,523,6];
console.log(num.length);
// delete num[0];
// console.log(num.length);
// console.log(num)


// let num1 = [11,12,13,14,15,16]
// let num2 = [21,22,23,24,25,26]

// let newArray = num.concat(num1,num2);
// console.log(newArray.length);


// console.log(newArray)

// num.sort();
// console.log(num) //[ 143, 233, 421, 523, 6, 634 ]
// // it sort the array as a string

num.splice(2,6,16,24)
console.log(num)

let newNum = num.slice(1,3);
console.log(newNum);