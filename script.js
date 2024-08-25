let startTime;
let updatedTime;
let difference;
let timerInterval;
let running=false;

const timerDisplay = document.getElementById("timer");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn =document.getElementById("resetBtn");

function startStopTimer(){
    if(!running){
        startTime = new Date().getTime() -(difference || 0);
        timerInterval = setInterval(updatedTimer,10);
        startStopBtn.textContent="Stop";
        running = "true";
    }
    else{
        clearInterval(timerInterval);
        startStopBtn.textContent = "Start";
        running =false;
    }
}
function resetTimer(){
    clearInterval(timerInterval);
    startStopBtn.textContent ="Start";
    timerDisplay.textContent = "00:00:00.00";
    running = "false";
    difference = 0;
}
function updatedTimer(){
    updatedTime=new Date().getTime();
    difference = updatedTime-startTime;

    let hours = Math.floor((difference%(1000*60*60*24))/(100*60*60));
    let minutes = Math.floor((difference%(1000*60*60))/(1000*60));
    let seconds = Math.floor((difference%(1000*60))/1000);
    let milliseconds = Math.floor((difference%1000)/10);

    timerDisplay.textContent=
    (hours<10 ? "0"+hours:hours)+":"+
    (minutes<10 ? "0"+minutes:minutes)+":"+
    (seconds<10 ? "0"+ seconds:seconds)+"."+
    (milliseconds<10 ? "0" +milliseconds:milliseconds);
}
startStopBtn.addEventListener("click",startStopTimer);
resetBtn.addEventListener("click",resetTimer);