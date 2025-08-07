let positiveEven=num=>{
    if(num%2==0){
        if(num>0){
            console.log("It is a Positive Even Number");
        }
    }
    else if(num%2==1){
        if(num>0){
            console.log("It is a Positive Odd Number");
        }
    }
    else{
        console.log("It is a Negative Number");
    }
}
positiveEven(1)