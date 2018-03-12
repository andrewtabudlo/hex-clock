let clock = document.querySelector("#clock");

function updateClock() {
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    clock.innerText = "#" + hr + min + sec;
}

setInterval(updateClock, 1000)
