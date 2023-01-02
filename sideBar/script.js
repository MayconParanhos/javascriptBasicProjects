const toggle = document.querySelector('.sidebar-toggle');
const close  = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggle.onclick = ()=> {
    sidebar.classList.toggle('sidebar-show')
}

close.onclick = ()=> {
    sidebar.classList.remove('sidebar-show');
}