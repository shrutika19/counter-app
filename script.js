
const plusBtn = document.getElementById("plus");
const refreshBtn = document.getElementById("refresh");
const minusBtn = document.getElementById("minus");
const scoreTag = document.getElementById("score");

let count = 0;

plusBtn.addEventListener('click', () => {
    count += 1;
    scoreTag.innerText = count;
});

refreshBtn.addEventListener('click', () => {
    count = 0;
    scoreTag.innerText = count;
});

minusBtn.addEventListener('click', () => {
    count -= 1;
    scoreTag.innerText = count;
})