const dias = document.getElementById('daysEl');
const horas = document.getElementById('hoursEl');
const minu = document.getElementById('minutesEl');
const segun = document.getElementById('secondsEl');
const theday = "27 June 2021";
function contador(){
    const thedaydate = new Date(theday);
    const rightnow = new Date();
    const totalseconds = (thedaydate - rightnow) / 1000;
    const daysEl = Math.floor(totalseconds / 3600 / 24);
    const hoursEl = Math.floor(totalseconds / 3600) % 24;
    const minutesEl = Math.floor(totalseconds / 60) % 60;
    const secondsEl = Math.floor(totalseconds) % 60;

    dias.innerHTML = daysEl;
    horas.innerHTML = formatTime(hoursEl);
    minu.innerHTML = formatTime(minutesEl);
    segun.innerHTML = formatTime(secondsEl); 
}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
contador();
setInterval(contador, 1000);