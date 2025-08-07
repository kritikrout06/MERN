function fibonacci(num){
    let n=num
    if(n==0)
        return 0
    return n+fibonacci(n-1)
}
let res=fibonacci(10)
console.log(res)