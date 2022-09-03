//Global Variblies

//Header Variblies
const header = document.querySelector("header");

//Form Varibles
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");
//-----------
const nameAlert = document.querySelector("#nameAlert");
const emailAlert = document.querySelector("#emailAlert");
const subjectAlert = document.querySelector("#subjectAlert");
const messageAlert = document.querySelector("#messageAlert");
//-----RegEx----
const nameRegEx = /^[A-Z][-a-zA-Z]+$/;
const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//=================
let lastScroll = window.scrollY;

//====Program Events=====
nameInput.addEventListener("input", nameValidation);

emailInput.addEventListener("input", emailValidation);

subjectInput.addEventListener("input", subjectValidation);

messageInput.addEventListener("input", messageValidation);

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(isEmpty) {
        submitBtn.setAttribute("disabled", "true");
    }else{
        submitBtn.setAttribute("disabled", "false");
    }
});

window.addEventListener("scroll",function(){
    if(lastScroll < window.scrollY){
        header.classList.add("bg-dark");
        header.classList.remove("bg-transparent");
    }else {
        header.classList.remove("bg-dark");
        header.classList.add("bg-transparent");
    }
});


$(".nav-link").click(function(){
    let currentHref = $(this).attr("href");
    let currentOffSet = $(currentHref).offset().top;
    $(window).animate({scrollTop: currentOffSet},2000);
})

//======Program Functions====
function isEmpty(){
    if (nameInput.value == "" && emailInput.value == "" && messageInput.value == ""){
        return false; 
    } else {
        return true;
    }
}

function nameValidation(e) {
    nameTxt = e.target.value;
    if(nameRegEx.test(nameTxt)){
        nameAlert.classList.add("d-none");
        nameAlert.classList.remove("d-block");
        return true;
    }else {
        nameAlert.classList.add("d-block");
        nameAlert.classList.remove("d-none");
        return false;
    }
}

function subjectValidation(e) {
    subjectTxt = e.target.value;
    if(nameRegEx.test(subjectTxt)){
        subjectAlert.classList.add("d-none");
        subjectAlert.classList.remove("d-block");
        return true;
    }else {
        subjectAlert.classList.add("d-block");
        subjectAlert.classList.remove("d-none");
        return false;
    }
}

function emailValidation(e) {
    emailTxt = e.target.value;
    if(emailRegEx.test(emailTxt)){
        emailAlert.classList.add("d-none");
        emailAlert.classList.remove("d-block");
        return true;
    }else {
        emailAlert.classList.add("d-block");
        emailAlert.classList.remove("d-none");
        return false;
    }
}

function messageValidation(e) {
    let messageCount = e.target.value;
    let messageLength = messageCount.length;
    let maxValue = 150;
    let typedChar = maxValue - messageLength;
    if (typedChar == 0){
        messageInput.setAttribute("readonly","true");
        messageAlert.classList.add("d-block");
        messageAlert.classList.remove("d-none");
        messageAlert.innerHTML = `you reached available character for Message`;
    }else {
        messageAlert.classList.add("d-none");
        messageAlert.classList.remove("d-block");
    }
}


// Type.js Fire Function 
var typed = new Typed('.element', {
    strings: ["Photographer" ,"Designer","Developer","Freelancer"],
    typeSpeed: 150,
    loop: true,
    backSpeed: 80,
    backDelay: 10,
    showCursor: false,
    cursorChar: '|',
});

//Owl.js Fire Function
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        center: true,
    });
});