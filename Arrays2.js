//array methods and functions

let y=["one",76,"you",true]
console.log(y.shift())
console.log(y.unshift(false))
console.log(y.pop())
console.log(y.push("two"))
console.log(y)
let x=[4,5,6,7]
console.log(x.splice())
console.log(x.splice(1,2)) //return the removed arr
console.log(x)
console.log(y.sort())
console.log(y.reverse())
console.log(y.join())
console.log(y.length)
console.log(y.indexOf("you"))
console.log(y.copyWithin(3,1))
let t=y.concat(x)
console.log(t)
console.log(y.at(3))
let r=[1,2,3]
r.forEach(num =>num *2)
console.log(r)


function arrays(arr){
    if (arr.length<=1){
    return arr;
}
let middle=Math.floor(arr.length/2)
let left=arr.slice(0,middle)
let right=arr.slice(middle)
return sort(arrays(left),arrays(right))
}
function sort(left,right){
    let newArray=[]
    while(left.length && right.length){
        if(left[0]<right[0]){
        newArray.push(left.shift())
        }
    else {
newArray.push(right.shift())
    }
    return [...newArray,...left,...right]
    }
}
let arr=[12,11,14,34,56,80]
console.log(arrays(arr))

//forEach
let calculate=[23,12,5,6]
let calc=[]
calculate.forEach(function(calculate){
calc.push(calculate * 2);
});
console.log (calc)
//looping through an array
calculate. forEach(function(calculate){
console.log(calculate)
})
let num=calculate.filter(calculate => calculate)
console.log(num)
