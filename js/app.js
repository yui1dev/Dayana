const navList = document.querySelector(".nav-list");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () =>{
    menu.classList.toggle("aktive")
    navList.classList.toggle(".aktive")
})

links.forEach(link =>{
    link.addEventListener("click", () =>{
        menu.classList.remove("aktive");
        navList.classList.remove("aktive")
    })
})