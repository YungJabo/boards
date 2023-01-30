let menu = document.querySelector(".menu");
let menu__list = document.querySelector(".menu__list");
let menu__link= document.querySelector(".menu__link");
let burger = document.querySelector(".burger");



burger.addEventListener("click", e=>{
    e.preventDefault();
    let overlay = document.createElement("div");
    let overlay__container = document.createElement("div");
    overlay.className = "overlay";
    overlay__container.className = "overlay__container";
    const close = document.createElement("svg");
    const use = document.createElement("use");
    close.classList.add("icon");
    close.classList.add("icon--close");
    menu.classList.add("menu--overlay");
    use.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href', 'sprite.svg#close');
    close.appendChild(use);
    overlay__container.appendChild(close);
    overlay__container.appendChild(menu);
    overlay.appendChild(overlay__container);
    document.body.appendChild(overlay);
   
    console.log("ok");
});
