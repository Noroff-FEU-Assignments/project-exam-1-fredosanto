import { inputLengthValidation, emailValidate, messageLengthValidation } from "./utils/validation.js";

const contactForm = document.getElementById("contact-form");
const formError = document.getElementById("error-message");
const formSuccess = document.getElementById("success-message");

//Inputs
const name = document.getElementById("name");
const nameError = document.querySelector(".error-name");

const email = document.getElementById("email");
const emailError = document.querySelector(".error-email");

const subject = document.getElementById("subject");
const subjectError = document.querySelector(".error-subject");

const message = document.getElementById("message");
const messageError = document.querySelector(".error-message");


function submitForm() {
    event.preventDefault();

    if (inputLengthValidation(name.value, 1)) {
        nameError.style.display = 'none';
    } else {
        nameError.style.display = 'block';
    }

    if (emailValidate(email.value)) {
        emailError.style.display = 'none';
    } else {
        emailError.style.display = 'block';
    }

    if (inputLengthValidation(subject.value, 3)) {
        subjectError.style.display = 'none';
    } else {
        subjectError.style.display = 'block';
    }

    if (messageLengthValidation(message.value, 101)) {
        messageError.style.display = 'none';
    } else {
        messageError.style.display = 'block';
    }

    console.log(event);
    console.log(email.value);
}

contactForm.addEventListener('submit', submitForm);


