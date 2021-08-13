




var sec=document.getElementById("sec")
var min=document.getElementById("min")
var hour=document.getElementById("hour")


setInterval(updateClock,1000)

function updateClock(){
    var date=new Date();
    var ss=date.getSeconds() /60;
    var mm=(date.getMinutes()+ss) /60;
    var hh=(date.getHours()+mm) /12;

    sec.style.transform="rotate(" +(ss*360)+"deg)";
    min.style.transform="rotate(" +(mm*360)+"deg)";
    hour.style.transform="rotate(" +(hh*360)+"deg)";
    
}
updateClock();



/*
var sec=document.getElementById("sec")
var min=document.getElementById("min")
var hour=document.getElementById("hour")

var deg=6;

setInterval(()=>{

    var day=new Date();
    var hh=day.getHours()*30;
    var mm=day.getMinutes()*deg;
    var ss=day.getSeconds()*deg;

    hour.style.transform=`rotateZ(${hh+(mm/12)}deg)`
    min.style.transform=`rotateZ(${mm}deg)`
    sec.style.transform=`rotateZ(${ss}deg)`

})


*/
