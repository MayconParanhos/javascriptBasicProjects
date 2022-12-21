const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

toggle.onclick = ()=>{
    links.classList.toggle('show-links');
    toggle.children[0].classList.toggle('fa-bars');
    toggle.childNodes[1].classList.toggle('fa-bars-staggered') // childNodes also lists \n elements before and after elements.
}

/* 
    This code was written by @mayconparanhos Twitter
*/