// let year = 2024;
// let result = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) 
//              ? "Leap Year" : "Not a Leap Year";
// console.log(result);

// let leapYear=year=>year%4==0 && year%100 !=0 || year %400==0 ? "Leap Year" : "Not a Leap Year";
// let res=leapYear(2023)
// console.log(res);    

let leapYear=function(year){
    if(year%4==0){
       console.log("leap year")
}
else if(year%100==0){
    console.log(" Not a leap year")
}
else if(year%400==0){
    console.log("leap year")
}
else{
    console.log("not a leap year")
}
}
leapYear(2023)
