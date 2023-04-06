// Arrays
//quiz1
// Find the last element of the following arrays.
let arr1 = [3,7,34,90,12]
console.log(arr1.slice(-1).pop())
let array=[-1]
console.log(arr1[array.length -1])
let arr2 = [true, "green", "where",12,56];
console.log(arr2.slice(-1).pop())
//quiz2
// Write a JS program that will join the following array elements into a string
let myPets = ["Cow", "Python", "Snake", "Dog"];
console.log(myPets.join());

//quiz3
// Write a JS script to sort the following array items
let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort());
console.log(arr3.reverse)

//quiz4
// write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
let  arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
let fruits=[]
arr.forEach(element){
    if(!fruits.includes(items)){
fruits.push(items);
    }
console.log()
}


//quiz5
// Write a JS script to search for the following word in the array.
// 4
// If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4, 23];
if(arr5.includes(4)){
    console.log(4);
}

else{
    console.log(" the search word was not found");
}
//quiz6
// Write a JS script to sort the following string
let word = "lufituaeb";
let word1 = word.split(',');
 console.log(word1.sort());

