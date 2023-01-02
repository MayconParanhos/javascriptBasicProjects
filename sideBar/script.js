const toggle = document.querySelector('.sidebar-toggle');
const closeBtn  = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggle.onclick = ()=> {
    sidebar.classList.toggle('sidebar-show');
    toggle.children[0].classList.toggle('fa-bars');
    toggle.children[0].classList.toggle('fa-bars-staggered');
}

closeBtn.onclick = ()=> {
    sidebar.classList.remove('sidebar-show');
    toggle.children[0].classList.remove('fa-bars-staggered');
    toggle.children[0].classList.add('fa-bars');
}