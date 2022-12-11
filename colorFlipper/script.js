const btn = document.getElementById("btn");
const color = document.querySelector('.color');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.onclick = () => {
    let c = '#';
    for(let l=0; l<6; l++) {
        c += hex[getRandomNum()];
    }

    document.body.style.backgroundColor = c;
    color.textContent = c;

};

function getRandomNum() {
    return Math.floor(Math.random() * hex.length);
}

btn.ontouchstart = ()=>{
    btn.style.transition = "all .1s";
    btn.style.color = "white";
    btn.style.backgroundColor = "black";
};
btn.ontouchend = ()=>{
    btn.style.transition = "all .4s";
    btn.style.color = "black";
    btn.style.backgroundColor = "transparent";
};