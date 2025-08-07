let sum=0
for(let num=2;num<=10;num++){
     let prime=true
     for(let i=2;i<num;i++){
        if(num%i===0){
            prime=false
            break
        }
     }
     if(prime){
        console.log(num)
       sum+=num
     }
}
console.log("Sum of the prime number 0 to 10 is:"+sum)
   