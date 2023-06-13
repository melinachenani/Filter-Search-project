//selectors
const loginBox = document.querySelector(".login-box");
const backDrop = document.querySelector(".backdrop");
const showLoginBox = document.querySelector(".user");
const closeLoginBox = document.querySelector(".submit");
const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");

//event listener
showLoginBox.addEventListener("click", showModal);
closeLoginBox.addEventListener("click", closeModal);
backDrop.addEventListener("click", closeModal);
toggler.addEventListener("click", hamburgerMenu);

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