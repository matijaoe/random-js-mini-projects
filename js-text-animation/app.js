const text = document.querySelector('.fancy');
const strText = text.innerText;
const splitText = strText.split('');

text.innerHTML = splitText.reduce((a, b) => a += `<span>${b}</span>`, '');

let char = 0;
let timer = setInterval(onTick, 150);

function onTick() {
    const span = text.querySelectorAll('span')[char++];
    span.classList.add('fade');
    if (char === splitText.length) {
        complete();
        return;
    }
};

function complete() {
    clearInterval(timer);
    timer = null;
}