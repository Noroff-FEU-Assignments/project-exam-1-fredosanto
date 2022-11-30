const contactForm = document.getElementById("contact-form");
const formError = document.getElementById("error-message");
const formSuccess = document.getElementById("success-message");

//Inputs
const name = document.getElementById("name");
const nameError = document.querySelector(".error-name");

const email = document.getElementById("email");
const emailError = document.querySelector("error-email");
// const emailRegEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

const subject = document.getElementById("subject");
const subjectError = document.querySelector(".error-subject");

const message = document.getElementById("message");
const messageError = document.querySelector(".error-message");