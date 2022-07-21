//The js Date Object
function makeDate (){
    let currentDate = new Date();
let secs=currentDate.getSeconds(),
    mins=currentDate.getMinutes(),
   hours=currentDate.getHours(),
   date=currentDate.getDate(),
   day=currentDate.getDay(),
   months=currentDate.getMonth(),
   years=currentDate.getFullYear();
let time;
if (secs <10){
    secs=`0${secs}`;
}
if (hours <10){
    hours=`0${hours}`;
}
if (mins <10){
    mins=`0${mins}`;
}
if (hours >= 12){
    time = "Pm"
} else{
    time = "Am"
} 
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let formarttedDay=days[day];
let month=["January","February","March","April","May","June","Jully","August","September","October","November","December"];
let formarttedMonth = month[months];
document.getElementById("day").innerHTML=formarttedDay;
document.getElementById("date").innerHTML=date;
document.getElementById("month").innerHTML=formarttedMonth;
document.getElementById("years").innerHTML=years;
document.getElementById("hours").innerHTML=hours;
document.getElementById("mins").innerHTML=mins;
document.getElementById("secs").innerHTML=secs;
document.getElementById("time").innerHTML=time;
}

setInterval(makeDate,1000); 


