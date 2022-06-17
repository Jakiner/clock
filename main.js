const body = document.body;
const container = document.getElementById('container');
const clock = document.getElementById('clock');
const time = document.getElementById('time');
const timeAfter = window.getComputedStyle(time, "::after")
const date = document.getElementById('date');


showTime();

function go(){ 
    changePosition();
    setInterval(clockTimer, 1000);
}

function clockTimer() {

    let today = new Date();
    let seconds = today.getSeconds();

    if(time.classList.contains('fadeOut')) {
        time.classList.remove('fadeOut');
        time.style.fontSize = '64px';
        time.style.setProperty('--timeAfterFontSize', '32px');
        date.classList.remove('fadeOut');
        date.style.fontSize = '18px';
        changePosition();
        console.log(seconds)
    } else if(seconds === 59) {
        time.style.fontSize = '42px';
        time.style.setProperty('--timeAfterFontSize', '18px');
        date.style.fontSize = '10px';
        time.classList.add('fadeOut');
        date.classList.add('fadeOut');
    }

    showTime();
}

let changePosition = function() {
    let clockHeight = clock.clientHeight;
    let clockWidth = clock.clientWidth;
    let height = container.clientHeight;
    let width = container.clientWidth;

    let top = Math.floor(Math.random() * (height - clockHeight));
    let left = Math.floor(Math.random() * width);

    while(left < 10 || left + clockWidth > width - 80 || top < 20|| top > height - clockHeight - 60) {
        top = Math.floor(Math.random() * (height - clockHeight));
        left = Math.floor(Math.random() * width);
        console.log(width - 80, left + clockWidth)
    }

    clock.style.top = `${top}px`;
    clock.style.left = `${left}px`;
}

function showTime() {
    let today = new Date()
    time.innerHTML = today.toLocaleTimeString([], {hour:'numeric', minute:'numeric'}).replace('PM', '').replace('AM', '');
    date.innerHTML = today.toLocaleDateString([], {weekday: 'short', month:'short', day: 'numeric'});
}

window.onload = go();

