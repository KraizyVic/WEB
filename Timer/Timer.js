
function updater(){
    var currentTime = new Date;
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var hrs = document.getElementById('hours');
    hrs.innerHTML = hours + ':';
    var min = document.getElementById('minutes');
    if(minutes < 10){
        min.innerHTML ='0' + minutes + ':';
    }
    else{
        min.innerHTML = minutes + ':';
    }
    var sec = document.getElementById('seconds');
    if(seconds < 10){
        sec.innerHTML = '0' + seconds;
    }
    else{
        sec.innerHTML = seconds;
    }
}

var formata = document.getElementById('format');
function format(){
    var currentTime = new Date;
    var hours = currentTime.getHours();
    if (hours > 12) {
        var twelve = 0;
        twelve = hours - 12;

        var hrs = document.getElementById('hours');
        hrs.innerHTML = twelve + ':';
    }
    else{

    }
}
/* formata.addEventListener("click",format); */

function darktheme(){
    document.body.classList.toggle('dark');
}

updater();
setInterval(updater,1000);




