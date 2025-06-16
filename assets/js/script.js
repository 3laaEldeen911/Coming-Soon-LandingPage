"use strict"
const mail = document.querySelector(".email");

const btnSubmet = document.querySelector("button");

const message=document.querySelector(".message")

console.log(message);


const regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const valditation =()=>{
    if(regx.test(mail.value)){
        alert("valid email address")
        message.classList.add("hidden");
    }
    else{
        message.classList.remove("hidden");
    }
}

btnSubmet.addEventListener("click",valditation)