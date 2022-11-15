// var count=0;
// var interval;
// function timer() {
//     count++;
// console.log(count);
// }
// setInterval(timer,1000); //baar baar chalega 

// setTimeout(timer,3000)   //one time chalega

// setInterval(timer,1000); 

// interval = setInterval(() => {
//     count++;
// console.log(count);
// }, 1000);

// setTimeout(() => {
//     clearInterval(interval)
// }, 5000);

var min=0;
var Sec=0;
var mSec=0;
var interval;

var minHd=document.getElementById("min");
var SecHd=document.getElementById("Sec");
var mSecHd=document.getElementById("mSec");
var disab=document.getElementById("disab");


function start() {
    interval= setInterval(()=>{
            mSec++;
mSecHd.innerHTML=mSec;
if (mSec>100) {
    Sec++;
    SecHd.innerHTML=Sec;
    mSec=0;
}
else if (Sec>60) {
    min++;
    minHd.innerHTML=min;
    Sec=0;
}
        }
    ,10);
    disab.disabled=true;

}

function stop(){
    clearInterval(interval);
    disab.disabled=false;
}
function reset(){
    var min=0;
    var Sec=0;
    var mSec=0;
    mSecHd.innerHTML=0;
    SecHd.innerHTML=0;
    minHd.innerHTML=0;
    interval=0;

    clearInterval(interval);
    disab.disabled=false;

}


