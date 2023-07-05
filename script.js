let menu = document.querySelector('#menu');
let navber = document.querySelector('#navber');

menu.onclick = () => {
    menu.classList.toggle('fa-bars');
    menu.classList.remove('fa-bars');
    menu.classList.add('fa-xmark');
    navber.classList.toggle('active');
}


