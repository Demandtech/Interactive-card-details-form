"use strict";
// Card HTML Element
const cardNumberEl = document.getElementById("cardNumberEl");
const cardNameEl =  document.getElementById("nameEl");
const cardCvcEl =  document.getElementById("cvcEl");
const cardExpMonthEl = document.getElementById("expire-month");

const cardExpYearEl = document.getElementById("expire-year");
cardExpMonthEl.textContent = "00";

//Card Inputs
let cardName = document.getElementById("name");
let cardExpMonth = document.getElementById("month");
let cardExpYear = document.getElementById("year");
let cardCvc = document.getElementById("cvc");
let cardNumber = document.getElementById("card-number");

//Error
let errorMsg = document.querySelectorAll('.error-msg')
let numberError = document.querySelector('.number-error');
let nameError = document.querySelector('.name-error');
let monthError = document.querySelector('.month-error');
let yearError = document.querySelector('.year-error');
let cvcError = document.querySelector('.cvc-error');


//Name
cardName.addEventListener("keyup", () => {
   if(!cardName.value){ 
    cardNameEl.textContent = "JANE APPLESEED";
    nameError.textContent = "Can't be empty";
    cardName.style.borderColor = "hsl(0, 100%, 66%)";
   }else{
    cardNameEl.textContent = cardName.value.toUpperCase();
    nameError.textContent= ""
    cardName.style.borderColor ="";
       
   }
});

//Month
cardExpMonth.addEventListener("keyup", () => {
  if (cardExpMonth.value){
    monthError.textContent = " ";
    cardExpMonthEl.textContent = cardExpMonth.value.padEnd(2, "0");
    cardExpMonth.style.borderColor = "";
  } else {
    monthError.textContent = "Can't be empty";
    cardExpMonthEl.textContent = '00';
    cardExpMonth.style.borderColor = "hsl(0, 100%, 66%)";
  }
});

//Year
cardExpYear.addEventListener("keyup", () => {
 if (cardExpYear.value) {
     yearError.textContent = " ";
     cardExpYearEl.textContent = cardExpYear.value.padEnd(2, "0");
     cardExpYear.style.borderColor = "";
 } else {
     yearError.textContent = "Can't be empty";
     cardExpYearEl.textContent = "00";
     cardExpYear.style.borderColor = "hsl(0, 100%, 66%)";
 }
});

//cvc
cardCvc.addEventListener("keyup", () => {
    if(cardCvc.value){
        cardCvcEl.textContent = cardCvc.value.padEnd(3, '0') 
        cvcError.textContent = " ";
        cardCvc.style.borderColor = ""
    } else{
        cardCvcEl.textContent = "000";
        cvcError.textContent = 'can\'t be blank'
        cardCvc.style.borderColor = "hsl(0, 100%, 66%)";
    }
}); 
  


//number
cardNumber.addEventListener("keyup", function () {
    if(cardNumber.value){
        cardNumberEl.textContent = cardNumber.value.padEnd(16, "0").match(/.{1,4}/g).join(" ") 
        numberError.textContent = " "; 
        cardNumber.style.borderColor ="";
    }else{
        cardNumberEl.textContent = `0000 0000 0000 0000`;
        cardNumber.style.borderColor =
            "hsl(0, 100%, 66%)";
        numberError.textContent = "Cant be empty";
    }
    if(isNaN(cardNumber.value)) {
        numberError.textContent = "Wrong format, numbers only";
    } 
     
});

const welcome = document.querySelector('.welcome')

document.getElementById('confirm-btn').addEventListener('click',(e)=>{
 e.preventDefault()
 let btnError = document.querySelector(".confirm-btn-error");
  if (
      cardNumber.value &&
      cardCvc.value &&
      cardExpYear.value &&
      cardExpMonth.value &&
      cardName.value
  ) {
      btnError.textContent = "Everywhere good";
      welcome.classList.remove("display")
      return true;
  } else {
      btnError.textContent = "Check all info";
      console.log(errorMsg);
  }
 
})


