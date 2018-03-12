let clock = document.querySelector("#clock");

function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

function updateClock() {
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    clock.innerText = "#" + leadingZero(hr) + leadingZero(min) + leadingZero(sec);
}

setInterval(updateClock, 1000)
