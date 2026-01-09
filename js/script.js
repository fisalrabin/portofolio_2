const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        navMenu.classList.remove("active");
    });
});
