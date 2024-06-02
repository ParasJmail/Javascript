// map
let arr = [45,23,21,0,3,5]

let a1 = arr.map((value,index,array) => {
    console.log(value,index,array)
    return value + 1;
})

console.log("////////////////////////////////////////////////////////////////////////////")

console.log(a1);

console.log("////////////////////////////////////////////////////////////////////////////")

// filter
let a2 = arr.filter((a) => {
    return a<10
})

console.log(a2)

console.log("////////////////////////////////////////////////////////////////////////////")

// reduce
let a3 = arr.reduce((h1,h2)=> {
    return h1+h2;
})

console.log(a3);