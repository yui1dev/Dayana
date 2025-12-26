const navList = document.querySelector(".nav-list");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () =>{
    menu.classList.toggle("aktive")
    navList.classList.toggle("aktive")
})

links.forEach(link =>{
    link.addEventListener("click", () =>{
        menu.classList.remove("aktive");
        navList.classList.remove("aktive")
    })
})

function openModel(title, imgSrc){
    document.getElementById("modelTitle").innerText = title;
    document.getElementById("modelImg").src = imgSrc;
    document.getElementById("myModel").style.display = "flex";

}
 
function closeModel(){
    document.getElementById("myModel").style.display = "none";

}
function sentData(){
    let phone = document.getElementById("phone").value;

     if(phone == ""){
        alert("Telefon raqam kiriting");
     } else{
       alert("Telefon raqamingiz qabul qilindi: " + phone)

       closeModel()
     }
}

function openVideo(){
    document.getElementById("myVideo").style.display = "flex";
}

function closeVideo(){
    document.getElementById("myVideo").style.display = "none";
}