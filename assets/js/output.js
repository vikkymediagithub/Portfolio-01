// Menu Icon function
const menubar = document.querySelector(".menubar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

cancelBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
} 

window.onscroll = () => {
    this.scrollY > 20 ? menubar.classList.add("sticky") : menubar.classList.remove("sticky");
}

