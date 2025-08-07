let arr=[10,13,24,14,75,65,46,87]
arr.sort()
//let res=arr.filter(element=>element%2===0)//even element
//let res=arr.filter(element=>element%2 !=0)//odd element
let res=arr.filter(a=>a%3==0)
console.log(res)