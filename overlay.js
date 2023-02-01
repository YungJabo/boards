const overlay = document.querySelector(".overlay");
const burger = document.querySelector(".burger");
const close = document.querySelector(".overlay__close-link");
var html= document.querySelector("html");
burger.addEventListener("click",e=>{
    e.preventDefault();
    overlay.style.display = "flex";
    html.style.overflow = "hidden";
    
    
});

close.addEventListener("click",e=>{
    e.preventDefault();
    overlay.style.display = "none";
    html.style.overflow = "visible";
});