'use strict';

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const AllContainer = document.querySelector('.countdown-container');
const MusicContainer = document.querySelector('.music-container');
const CanvasContainer = document.querySelector('.container-canvas');

const newYears = '31 Dec 2021 22:00:00';

let distanceOftime;

// Initial call
let interval = setInterval(() => {
    const currentDate = new Date();
    const newYearsDate = new Date(newYears);

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

    const date = new Date(newYears), ss = 1000, mins = ss * 60, hs = mins * 60, ds = hs * 24;

    let now = currentDate.getTime();
    let countdown = date.getTime();

    distanceOftime = countdown - now;

    if(distanceOftime < 0){
        AllContainer.style.display = 'none';
        MusicContainer.style.display = 'none';
        CanvasContainer.style.display = 'block';
    }
    else{
        
        CanvasContainer.style.display = 'none';
    }
}, 0);


