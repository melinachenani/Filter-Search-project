//selectors
const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
const loginBox = document.querySelector(".login-box");
const showLoginBox = document.querySelector(".user");
const closeLoginBox = document.querySelector(".submit");
const backDrop = document.querySelector(".backdrop");
const cartCenter = document.querySelector(".cart-center");
const showCartModal = document.querySelector(".cart");
const closeCartModal = document.querySelector(".submit");
const overLay = document.querySelector(".overlay");

//event listener
toggler.addEventListener("click", hamburgerMenu);
showLoginBox.addEventListener("click", showModal);
closeLoginBox.addEventListener("click", closeModal);
backDrop.addEventListener("click", closeModal);
showCartModal.addEventListener("click", showCart);
closeCartModal.addEventListener("click", closeCart);
overLay.addEventListener("click", closeCart);


//Functions
function hamburgerMenu(){
    navbar.classList.toggle("nav__expanded")
}
function showModal () {
    loginBox.style.opacity = "1";
    backDrop.style.display = "block";
}

function closeModal (){
    loginBox.style.opacity = "0";
    backDrop.style.display = "none";
}
function showCart () {
    cartCenter.style.opacity = "1";
    overLay.style.display = "block";
}
function closeCart (){
    cartCenter.style.opacity = "0";
    overLay.style.display = "none";
}
