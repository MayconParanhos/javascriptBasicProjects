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