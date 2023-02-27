const menuIcon = document.querySelector(".open-menu")
const closeIcon = document.querySelector(".close-menu")
const nav = document.querySelector(".nav")

function openMenu(){
    nav.style.right = "0";
}

function closeMenu(){
    nav.style.right = "-250px";
}

menuIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);


