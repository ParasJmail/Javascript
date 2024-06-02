let num = [1,2,3,34,5]
console.log(num);
let b = num.toString();
b = num.join(" and ");

console.log(b,typeof(b));

// let c = num.pop()
// console.log(num, c);

// let d = num.push(56)
// console.log(num, d);

// let e = num.shift()
// console.log(num, e);

let e = num.unshift(78)
console.log(num, e);
