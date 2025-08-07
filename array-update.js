let arr=["a","b","c","d","e"]
//change existing array
// console.log("before",arr) //["b","c"]
// arr[2]="f"
// console.log("after",arr) //["a","b","c","d","e","d

//removing existing array
console.log("before deleting:",arr.length)
delete arr[2]
console.log(arr) //["a","b","c","d","e"]
console.log("after deleting:",arr.length) //5
 console.log(arr[2])