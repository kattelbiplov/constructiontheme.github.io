const countdown = () => {
    const countDate = new Date('Oct 17, 2021 00:00:00').getTime();
    const Now = new Date().getTime();
    const gap = countDate - Now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 60;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMin = Math.floor((gap % hour) / minute);
    const textSec = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".min").innerText = textMin;
    document.querySelector(".sec").innerText = textSec;
}
setInterval(countdown, 1000);