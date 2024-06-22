let submit =document.querySelector("#submit");
let okCard =document.querySelector("#okCard");
let inputName= document.querySelector("#inputName");
let inputPhoneno= document.querySelector("#inputPhoneno");
let inputEmail= document.querySelector("#inputEmail");
let inputTextarea= document.querySelector("#inputTextarea");



let error= document.querySelector(".error");
let name_error=document.querySelector("#name-error"); 
let phone_error=document.querySelector("#phone-error"); 
let email_error=document.querySelector("#email-error"); 
let message_error=document.querySelector("#message-error"); 

let card= document.querySelector("#card");
let card1= document.querySelector("#card1");
submit.addEventListener("click",()=>{
    if(check()){
        card.style.visibility ="visible";
        console.log("hello");
        card1.style.visibility ="hidden";

    }

})
okCard.addEventListener("click",()=>{
    card.style.visibility ="hidden";
})
function check(){
    if(inputName.value===""){
        console.log("enter your name");
        name_error.style.visibility= "visible";
        return false;
    }else if(inputPhoneno.value==""){
        console.log("phone_error");
        name_error.style.visibility= "hidden";
        phone_error.style.visibility= "visible";
        return false;

    }else if(inputEmail.value==""){
        console.log("email_error");
        phone_error.style.visibility= "hidden";
        email_error.style.visibility= "visible";
        return false;

    }else if(inputTextarea.value==""){
        console.log("message_error");
        email_error.style.visibility= "hidden";
        message_error.style.visibility= "visible";
        return false;

    }
    email_error.style.visibility= "hidden";
    phone_error.style.visibility= "hidden";
    name_error.style.visibility= "hidden";
    message_error.style.visibility= "hidden";
    return true;

}
