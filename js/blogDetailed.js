//Global Variblies

//Header Variblies
const header = document.querySelector("header");

//Form Varibles
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const webSiteInput = document.querySelector("#website");
const commentInput = document.querySelector("#comment"); 
const submitBtn = document.querySelector("#submitBtn");
//-----------
const nameAlert = document.querySelector("#nameAlert");
const emailAlert = document.querySelector("#emailAlert");
const webSiteAlert = document.querySelector("#webSiteAlert");
const commentAlert = document.querySelector("#commentAlert");
//-----RegEx----
const nameRegEx = /^[A-Z][-a-zA-Z]+$/;
const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//=================
let lastScroll = window.scrollY;

//====Program Events=====
nameInput.addEventListener("input", nameValidation);

emailInput.addEventListener("input", emailValidation);

webSiteInput.addEventListener("input", webSiteValidation);

commentInput.addEventListener("input", commentValidation);

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

//======Program Functions====
function isEmpty(){
    if (nameInput.value == "" && emailInput.value == "" && commentInput.value == "" && webSiteInput.value == ""){
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

function webSiteValidation(e) {
    webSiteTxt = e.target.value;
    if(emailRegEx.test(subjectTxt)){
        webSiteAlert.classList.add("d-none");
        webSiteAlert.classList.remove("d-block");
        return true;
    }else {
        webSiteAlert.classList.add("d-block");
        webSiteAlert.classList.remove("d-none");
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

function commentValidation(e) {
    let messageCount = e.target.value;
    let messageLength = messageCount.length;
    let maxValue = 150;
    let typedChar = maxValue - messageLength;
    if (typedChar == 0){
        messageInput.setAttribute("readonly","true");
        commentAlert.classList.add("d-block");
        commentAlert.classList.remove("d-none");
        commentAlert.innerHTML = `you reached available character for Message`;
    }else {
        commentAlert.classList.add("d-none");
        commentAlert.classList.remove("d-block");
    }
}