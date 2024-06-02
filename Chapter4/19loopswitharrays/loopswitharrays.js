let num = [3,34,45,12];

for(let i = 0; i<num.length; i++){
    console.log(num[i]);
}
console.log("//////////////////////////////////////////////////////")
//for each
num.forEach((element) =>{
    console.log(element*element)
})

// array.from
let name = "paras"
let arr = Array.from(name)

console.log(arr)

console.log("//////////////////////////////////////////////////////")

// for...of
for(let i of num){
    console.log(i);
}

console.log("//////////////////////////////////////////////////////")

// for...of
for(let i in num){
    console.log(i);
}