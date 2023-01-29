const open = document.getElementById('open');
const close = document.getElementById('close');
const modalC = document.querySelector('.modal-container');


open.onclick = ()=> {
    modalC.style.opacity = "1";
    modalC.style.left = "0";
    modalC.style.transition = "opacity .5s ease-in-out";
}

close.onclick = ()=> {
    modalC.style.opacity = "0";
    modalC.style.left = "-100%";
    modalC.style.transition = "opacity .5s ease-in-out, left 0s ease-in-out .5s";
}