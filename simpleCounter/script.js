const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset    = document.getElementById('reset');
const number   = document.querySelector('.number');
let counter = 0;

increase.onclick = () => {
    counter++;
    number.innerText = counter;
};

decrease.onclick = () => {
    counter--;
    number.innerText = counter;
};

reset.addEventListener('click', function(){
    counter = 0;
    number.innerHTML = counter;
});

/*
* Code writen by @MayconParanhos
*/