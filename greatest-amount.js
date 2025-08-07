function greatestNumber(n1,n2,n3){
   

    if(n1>n2 && n1>n3)
    {
        console.log("n1 is the greatest number:"+" "+n1);

    }
    else if(n2>n1 && n2>n3)
    {
        console.log("n2 is the greatest number:"+" "+n2);
    }
    else{
        console.log("n3 is the greatest number:"+" "+n3);
    }
}
greatestNumber(230,232,231)