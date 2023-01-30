const overlay = document.querySelector(".overlay");
const burger = document.querySelector(".burger");
const close = document.querySelector(".overlay__close-link");
burger.addEventListener("click",e=>{
    e.preventDefault();
    overlay.style.display = "flex";
    
});

close.addEventListener("click",e=>{
    e.preventDefault();
    overlay.style.display = "none";
    
});