const clock = document.querySelector("#clock");
const $date = document.querySelector('#date');

function getClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");    
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=(`${hour}:${minute}:${second}`);
}

function getDate(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    $date.textContent = `${year}.${month}.${day}`
}

getClock();
getDate();
setInterval(getClock, 1000);