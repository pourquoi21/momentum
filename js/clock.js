const clock = document.querySelector("h1#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const mins = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerText = (`${hours}:${mins}:${sec}`);
}

getClock();
setInterval(getClock, 1000);

// const hour = ("00"+date.getHours()).slice(-2);
// const mins = ("00"+date.getMinutes()).slice(-2);