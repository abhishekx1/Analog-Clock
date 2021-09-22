setInterval(() => {
    date = new Date();
    hr = date.getHours();
    mn = date.getMinutes();
    sc = date.getSeconds();
    hrrotation = 30 * hr + mn / 2;
    mnrotation = 6 * mn;
    scrotation = 6 * sc;

    hour.style.transform = `rotate(${hrrotation}deg)`;
    minute.style.transform = `rotate(${mnrotation}deg)`;
    second.style.transform = `rotate(${scrotation}deg)`;
}, 1000);

function addclass() {
    const body = document.querySelector('body');
    body.classList.toggle('light');
}